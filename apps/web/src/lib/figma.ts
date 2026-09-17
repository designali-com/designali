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

export async function getFigmaFrames(
  fileKey: string,
  rawNodeIds: string[]
): Promise<Record<string, string>> {
  const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
  if (!token) return {};

  // Sabhi IDs ko format karke comma se jod lo (e.g., "5:13,33:3510,36:8534")
  const nodeIds = rawNodeIds.map(formatFigmaNodeId);
  const idsParam = nodeIds.join(",");

  try {
    // Sirf 1 API call sari images ke liye (No /nodes call)
    const res = await fetch(
      `${FIGMA_API}/images/${fileKey}?ids=${encodeURIComponent(idsParam)}&format=png&scale=2`,
      {
        headers: { "X-Figma-Token": token },
        next: { revalidate: 3600 }, // 1 ghante ke liye cache
      }
    );

    if (!res.ok) {
      console.error("Figma batch fetch failed:", res.status);
      return {};
    }

    const data = await res.json();
    return data.images || {}; // Returns { "5:13": "https://...", "33:3510": "https://..." }
  } catch (error) {
    console.error("Error fetching Figma frames:", error);
    return {};
  }
}