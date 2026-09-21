import { FigmaFrameCard } from "@/src/components/templates/design/figma-card"
import { figmaCategories, figmaDesigns } from "@/src/components/templates/design/figma-category"
import { notFound } from "next/navigation"
 

const FILE_KEY = "VztJy6DsCcvC1DHeyWK0oK"

interface DesignCategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function DesignCategoryPage({
  params,
}: DesignCategoryPageProps) {
  const { slug } = await params

  const category = figmaCategories.find(
    (item) => item.slug === slug
  )

  if (!category || slug === "all") {
    notFound()
  }

  const designs = figmaDesigns.filter(
    (design) => design.category === slug
  )

  return (
    <div className="mt-12 w-full px-2">
       
      {designs.length === 0 ? (
        <div className="flex min-h-60 items-center justify-center border border-dashed">
          <p className="text-sm text-muted-foreground">
            No designs in this category yet.
          </p>
        </div>
      ) : (
        <div className="columns-1 gap-2 md:columns-2">
          {designs.map((design) => (
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
      )}
    </div>
  )
}