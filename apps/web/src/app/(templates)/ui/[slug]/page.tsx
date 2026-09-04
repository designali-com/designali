import { notFound } from "next/navigation"
import * as Icons from "lucide-react"

import { ComponentPreview } from "@/src/components/docs/component-preview"
import { uiCategories } from "@/registry/registry-categories"
import { Index } from "@/registry/__index__"

export const revalidate = false
export const dynamic = "force-static"

export const dynamicParams = false

export async function generateStaticParams() {
  return uiCategories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function UIPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const currentCategory = uiCategories.find(
    (category) => category.slug === slug
  )

  if (!currentCategory) {
    notFound()
  }

  const components = Object.keys(Index).filter((name) => {
    return name === `${slug}-variants` || name.startsWith(`${slug}-`)
  })

  const Icon = currentCategory.iconName
    ? (Icons[
        currentCategory.iconName as keyof typeof Icons
      ] as React.ElementType)
    : null

  return (
    <div className="my-20 px-3">
      {/* Header */}
      <div className="flex flex-col items-center pt-10 pb-20 text-center">
        {Icon && <Icon className="mb-4 size-8 text-primary" />}

        <h1 className="text-2xl font-medium md:text-4xl">
          {currentCategory.name}
        </h1>

        <p className="mx-auto mt-2 max-w-80 text-sm text-muted-foreground md:max-w-xl">
          {currentCategory.description}
        </p>
      </div>

      {/* Components */}
      {components.length > 0 && (
        <div className="flex flex-col gap-12 md:gap-24">
          {components.map((name) => (
            <ComponentPreview key={name} name={name} align="center" />
          ))}
        </div>
      )}
    </div>
  )
}
