import { FigmaFrameCard } from "@/src/components/templates/design/figma-card"
import { figmaDesigns } from "@/src/components/templates/design/figma-category"

const FILE_KEY = "VztJy6DsCcvC1DHeyWK0oK"

export default function DesignPage() {
  return (
    <div className="mt-12 w-full px-2">
      <div className="columns-1 gap-2 md:columns-2 lg:columns-3">
        {figmaDesigns.map((design) => (
          <div
            key={design.nodeId}
            className="mb-2 break-inside-avoid"
          >
            <FigmaFrameCard
              fileKey={FILE_KEY}
              nodeId={design.nodeId}
            />
          </div>
        ))}
      </div>
    </div>
  )
}