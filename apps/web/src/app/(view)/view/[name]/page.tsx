import * as React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { siteConfig } from "@/src/config/site"
import { getRegistryComponent, getRegistryItem } from "@/src/lib/registry"
import { cn } from "@workspace/ui/lib/utils"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

const getCachedRegistryItem = React.cache(async (name: string) => {
  return getRegistryItem(name)
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    name: string
  }>
}): Promise<Metadata> {
  const { name } = await params
  const item = await getCachedRegistryItem(name)

  if (!item) {
    return {}
  }

  const title = item.name
  const description = item.description

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@elevenlabsio",
    },
  }
}

export async function generateStaticParams() {
  const { Index } = await import("@/registry/__index__")

  return Object.values(Index)
    .filter((block) =>
      [
        "registry:block",
        "registry:component",
        "registry:example",
        "registry:internal",
      ].includes(block.type)
    )
    .map((block) => ({
      name: block.name,
    }))
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    name: string
  }>
}) {
  const { name } = await params

  const item = await getCachedRegistryItem(name)

  if (!item) {
    notFound()
  }

  const Component = getRegistryComponent(name)

  if (!Component) {
    notFound()
  }

  return (
    <div className={cn("", item.meta?.container)}>
      <Component />
    </div>
  )
}
