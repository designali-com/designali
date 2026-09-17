import { FigmaFrameCard } from "@/src/components/templates/design/figma-card"
import { figmaDesigns } from "@/src/components/templates/design/figma-category"
import { getFigmaFrames, formatFigmaNodeId } from "@/src/lib/figma"

const FILE_KEY = "VztJy6DsCcvC1DHeyWK0oK"

export const revalidate = 3600 // 1 hour ISR Cache

export default async function DesignPage() {
  // 1. Saare node IDs ki list nikalo
  const nodeIds = figmaDesigns.map((d) => d.nodeId);

  // 2. Sirf EK batch request bhejo Figma ko
  const imageUrls = await getFigmaFrames(FILE_KEY, nodeIds);

  return (
    <div className="mt-12 w-full px-2">
      <div className="columns-1 gap-2 md:columns-2 lg:columns-3">
        {figmaDesigns.map((design) => {
          const formattedId = formatFigmaNodeId(design.nodeId);
          const imageUrl = imageUrls[formattedId] ?? null;

          return (
            <div key={design.nodeId} className="mb-2 break-inside-avoid">
              <FigmaFrameCard
                fileKey={FILE_KEY}
                nodeId={design.nodeId}
                imageUrl={imageUrl} // Server se aayi hui image seedha pass hogi
                frameName={design.name} // Local config se name use hoga
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}