import { getAllBlockIds } from "@/src/lib/blocks"
import { BlockDisplay } from "@/src/components/templates/blocks/block-display"
import { registryCategories } from "@/registry/registry-categories"

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

    const blocks = await getAllBlockIds(
        ["registry:block"],
        categories
    )

    const currentCategory = registryCategories.find(
        (category) => category.slug === categories[0]
    )

    const title = currentCategory?.name ?? "All Blocks"

    const description =
        currentCategory?.description ??
        "A collection of beautifully designed blocks for your projects."

    const Icon = currentCategory?.icon

    return (
        <div className="my-20 px-3">
            <div className="flex flex-col items-center pb-20 pt-10 text-center">
                {Icon && (
                    <Icon className="mb-4 size-8 text-primary" />
                )}

                <h1 className="text-2xl md:text-4xl font-medium">
                    {title}
                </h1>

                <p className="mt-2 mx-auto max-w-80 md:max-w-xl text-sm text-muted-foreground">
                    {description}
                </p>
            </div>

            <div className="flex flex-col gap-12 md:gap-24">
                {blocks.map((name) => (
                    <BlockDisplay
                        name={name}
                        key={name}
                    />
                ))}
            </div>
        </div>
    )
}