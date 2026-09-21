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

  const twoColumnCategories = [
    "alert",
    "alert-dialog",
    "aspect-ratio",
    "avatar",
    "badge",
    "button"
  ]

  const isTwoColumn = twoColumnCategories.includes(slug)

  return (
    <div className="mb-20 mt-3">
       
      <div className="m-3">
        {components.length > 0 ? (
          <div
            className={
              isTwoColumn
                ? "grid w-full gap-3 md:grid-cols-2"
                : "grid w-full gap-3"
            }
          >
            {components.map((name) => (
              <ComponentPreview
                key={name}
                name={name}
                align="center"
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-120 items-center justify-center border border-dotted">
            <div className="text-center">
              <h2 className="text-xl font-medium">Design in process</h2>

              <p className="mt-2 text-sm text-muted-foreground">
                I&apos;m currently working on ui components for this category.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}