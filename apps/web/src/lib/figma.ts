
const FIGMA_API = "https://api.figma.com/v1";

export function formatFigmaNodeId(id: string) {
  if (!id) return "";

  if (id.includes(":")) return id;

  const firstDashIndex = id.indexOf("-");

  if (firstDashIndex !== -1) {
    return (
      id.substring(0, firstDashIndex) +
      ":" +
      id.substring(firstDashIndex + 1)
    );
  }

  return id;
}

export interface FigmaFrameData {
  imageUrl: string | null;
  name: string;
}

export async function getFigmaFrames(
  fileKey: string,
  rawNodeIds: string[]
): Promise<Record<string, FigmaFrameData>> {
  const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;

  if (!token) {
    throw new Error("FIGMA_PERSONAL_ACCESS_TOKEN missing");
  }

  const nodeIds = rawNodeIds.map(formatFigmaNodeId);

  const idsParam = nodeIds.join(",");

  // Sabhi frames ek hi request mein fetch karo
  const [imageRes, nodeRes] = await Promise.all([
    fetch(
      `${FIGMA_API}/images/${fileKey}?ids=${encodeURIComponent(
        idsParam
      )}&format=png&scale=2`,
      {
        cache: "no-store",
        headers: {
          "X-Figma-Token": token,
        },
      }
    ),

    fetch(
      `${FIGMA_API}/files/${fileKey}/nodes?ids=${encodeURIComponent(
        idsParam
      )}`,
      {
        cache: "no-store",
        headers: {
          "X-Figma-Token": token,
        },
      }
    ),
  ]);

  if (!imageRes.ok || !nodeRes.ok) {
    console.error(
      "Figma batch fetch failed",
      imageRes.status,
      nodeRes.status
    );

    return {};
  }

  const [imageData, nodeData] = await Promise.all([
    imageRes.json(),
    nodeRes.json(),
  ]);

  const result: Record<string, FigmaFrameData> = {};

  for (const id of nodeIds) {
    result[id] = {
      imageUrl: imageData.images?.[id] ?? null,
      name: nodeData.nodes?.[id]?.document?.name ?? "Figma Frame",
    };
  }

  return result;
}