import { FigmaFrameCard } from "@/src/components/templates/design/figma-card"
import { figmaDesigns } from "@/src/components/templates/design/figma-category"
import { getFigmaFrames, formatFigmaNodeId } from "@/src/lib/figma"

const FILE_KEY = "VztJy6DsCcvC1DHeyWK0oK"

export const revalidate = 3600 // pura page bhi 1hr ke liye cache/ISR

export default async function DesignPage() {
  const frames = await getFigmaFrames(
    FILE_KEY,
    figmaDesigns.map((d) => d.nodeId)
  )
  

  return (
    <div className="mt-12 w-full px-2">
      <div className="columns-1 gap-2 md:columns-2 lg:columns-3">
        {figmaDesigns.map((design) => {
          const frame = frames[formatFigmaNodeId(design.nodeId)]
          return (
            <div key={design.nodeId} className="mb-2 break-inside-avoid">
              <FigmaFrameCard
                fileKey={FILE_KEY}
                nodeId={design.nodeId}
                imageUrl={frame?.imageUrl ?? null}
                frameName={frame?.name ?? design.name}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}