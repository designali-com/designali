import { FigmaFrameCard } from "@/src/components/templates/design/figma-card"
import { figmaDesigns } from "@/src/components/templates/design/figma-category"
import { getFigmaFrames, formatFigmaNodeId } from "@/src/lib/figma"
import { Figma } from "@designali/logos"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

const FILE_KEY = "VztJy6DsCcvC1DHeyWK0oK"

export default async function DesignPage() {
  const nodeIds = figmaDesigns.map((d) => d.nodeId)

  const imageUrls = await getFigmaFrames(FILE_KEY, nodeIds)

  return (
    <div className="mt-10 w-full">
      <div className="flex items-center border-b px-3 py-2 justify-between">
        <div className="flex items-center gap-2">
          <Figma className="size-5"/>
          <h1 className="text-md font-medium">
            Free Copy and Use Figma Designs in Your Projects
          </h1> 
        </div>
        <Button
          size="sm"
          render={<Link target="_blank" href="https://www.figma.com/design/VztJy6DsCcvC1DHeyWK0oK/designali?node-id=0-1&t=Nt4Sanqvi2jeHzeL-1" />} >
          View All Designs
        </Button>
      </div>
      <div className="columns-1 m-3 gap-2 md:columns-2 lg:columns-3">
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
    </div >
  )
}