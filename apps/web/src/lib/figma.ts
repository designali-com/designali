const FIGMA_API = "https://api.figma.com/v1";
const CHUNK_SIZE = 10;
const TIMEOUT_MS = 20_000;

export function formatFigmaNodeId(id: string) {
  if (!id) return "";
  if (id.includes(":")) return id;
  const firstDashIndex = id.indexOf("-");
  if (firstDashIndex !== -1) {
    return id.substring(0, firstDashIndex) + ":" + id.substring(firstDashIndex + 1);
  }
  return id;
}

async function fetchChunk(
  fileKey: string,
  ids: string[],
  token: string
): Promise<Record<string, string>> {
  try {
    const res = await fetch(
      `${FIGMA_API}/images/${fileKey}?ids=${encodeURIComponent(ids.join(","))}&format=png&scale=1`,
      {
        headers: { "X-Figma-Token": token },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error("Figma chunk failed:", res.status);
      return {};
    }

    const data = await res.json();
    const images: Record<string, string | null> = data.images ?? {};

    // Figma returns null for nodes it couldn't render; drop those
    return Object.fromEntries(
      Object.entries(images).filter(([, url]) => typeof url === "string")
    ) as Record<string, string>;
  } catch (error) {
    console.error("Figma chunk error:", error);
    return {};
  }
}

export async function getFigmaFrames(
  fileKey: string,
  rawNodeIds: string[]
): Promise<Record<string, string>> {
  const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
  if (!token) return {};

  const nodeIds = rawNodeIds.map(formatFigmaNodeId).filter(Boolean);

  const chunks: string[][] = [];
  for (let i = 0; i < nodeIds.length; i += CHUNK_SIZE) {
    chunks.push(nodeIds.slice(i, i + CHUNK_SIZE));
  }

  const results = await Promise.all(
    chunks.map((ids) => fetchChunk(fileKey, ids, token))
  );

  return Object.assign({}, ...results);
}