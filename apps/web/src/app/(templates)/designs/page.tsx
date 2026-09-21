import { FigmaFrameCard } from "@/src/components/templates/design/figma-card"
import { figmaDesigns } from "@/src/components/templates/design/figma-category"
import { getFigmaFrames, formatFigmaNodeId } from "@/src/lib/figma"

const FILE_KEY = "VztJy6DsCcvC1DHeyWK0oK"
 

export default async function DesignPage() {
  const nodeIds = figmaDesigns.map((d) => d.nodeId)

  const imageUrls = await getFigmaFrames(FILE_KEY, nodeIds)

  return (
    <div className="mt-12 w-full px-2">
      <div className="columns-1 gap-2 md:columns-2 lg:columns-3">
        {figmaDesigns.map((design) => {
          const formattedId = formatFigmaNodeId(design.nodeId)
          const imageUrl = imageUrls[formattedId] ?? null

          return (
            <div
              key={design.nodeId}
              className="mb-2 break-inside-avoid"
            >
              <FigmaFrameCard
                fileKey={FILE_KEY}
                nodeId={design.nodeId}
                imageUrl={imageUrl}
                frameName={design.name}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}