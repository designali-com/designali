import { NextRequest, NextResponse } from "next/server";

const FIGMA_API = "https://api.figma.com/v1";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileKey = searchParams.get("fileKey");
  const nodeId = searchParams.get("nodeId");

  if (!fileKey || !nodeId) {
    return NextResponse.json({ error: "fileKey and nodeId are required" }, { status: 400 });
  }

  const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Figma Access Token missing" }, { status: 500 });
  }

  try {
    const [imageRes, nodeRes] = await Promise.all([
      fetch(
        `${FIGMA_API}/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=2`,
        { headers: { "X-Figma-Token": token }, next: { revalidate: 86400 } }
      ),
      fetch(
        `${FIGMA_API}/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`,
        { headers: { "X-Figma-Token": token }, next: { revalidate: 86400 } }
      ),
    ]);

    const [imageData, nodeData] = await Promise.all([
      imageRes.json(),
      nodeRes.json(),
    ]);

    const imageUrl = imageData.images?.[nodeId] || null;
    const nodeName = nodeData.nodes?.[nodeId]?.document?.name || "Figma Frame";

    return NextResponse.json(
      { imageUrl, nodeName },
      { headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" } }
    );
  } catch (error) {
    console.error("Figma API Error:", error);
    return NextResponse.json({ error: "Failed to fetch Figma data" }, { status: 500 });
  }
}