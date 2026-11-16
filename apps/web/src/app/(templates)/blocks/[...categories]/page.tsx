import { getAllBlockIds } from "@/src/lib/blocks"
import { BlockDisplay } from "@/src/components/templates/blocks/block-display"
import { registryCategories } from "@/registry/registry-categories"
import { getCategoryIcon } from "@/src/lib/category-icons"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }))
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ categories?: string[] }>
}) {
  const { categories = [] } = await params

  const blocks = await getAllBlockIds(["registry:block"], categories)

  const currentCategory = registryCategories.find(
    (category) => category.slug === categories[0]
  )

  const title = currentCategory?.name ?? "All Blocks"

  const description =
    currentCategory?.description ??
    "A collection of beautifully designed blocks for your projects."

  const Icon = getCategoryIcon(currentCategory?.iconName)

  return (
    <div className="mb-20 mt-10">
       
      <div className="flex m-3 flex-col gap-12 md:gap-24">
        {blocks.length > 0 ? (
          blocks.map((name) => (
            <BlockDisplay key={name} name={name} />
          ))
        ) : (
          <div className="flex min-h-120 items-center justify-center border border-dotted">
            <div className="text-center">
              <h2 className="text-xl font-medium">Design in process</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                I&apos;m currently working on blocks for this category.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
