import { notFound } from "next/navigation"

import { ComponentPreview } from "@/src/components/docs/component-preview"
import { uiCategories } from "@/registry/registry-categories"
import { Index } from "@/registry/__index__"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const category = uiCategories.find(
    (category) => category.slug === slug
  )

  if (!category) {
    notFound()
  }

  const components = Object.keys(Index).filter((name) => {
    return name === `${slug}-variants` ||
      name.startsWith(`${slug}-`)
  })

  if (components.length === 0) {
    notFound()
  }

  return (
    <div className="mx-auto w-full">
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
            {category.name}
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            {category.description}
          </p>
        </div>

        {/* Components */}
        <div className="grid w-full gap-8">
          {components.map((name) => (
            <ComponentPreview
              key={name}
              name={name}
              align="center"
            />
          ))}
        </div>
      </section>
    </div>
  )
}