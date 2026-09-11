// app/api/figma/svg/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileKey = searchParams.get("fileKey");
  const nodeId = searchParams.get("nodeId");

  if (!fileKey || !nodeId) {
    return NextResponse.json(
      { error: "fileKey and nodeId are required" },
      { status: 400 }
    );
  }

  const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Figma Access Token missing in environment variables" },
      { status: 500 }
    );
  }

  try {
    const svgRes = await fetch(
      `https://api.figma.com/v1/images/${fileKey}?ids=${nodeId}&format=svg`,
      { headers: { "X-Figma-Token": token }, next: { revalidate: 3600 } }
    );
    const svgData = await svgRes.json();
    const svgUrl = svgData.images?.[nodeId];

    let svgContent = "";
    if (svgUrl) {
      const svgFetch = await fetch(svgUrl);
      svgContent = await svgFetch.text();
    }

    return NextResponse.json({ svgContent });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch SVG" },
      { status: 500 }
    );
  }
}