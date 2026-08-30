"use server"

import { z } from "zod"

type RegistryItemType =
  | "registry:block"
  | "registry:internal"
  | "registry:component"
  | "registry:ui"
  | "registry:lib"
  | "registry:hook"
  | "registry:example"
  | "registry:page"

type RegistryItem = {
  name: string
  type: RegistryItemType
  categories?: string[]
  [key: string]: unknown
}

const registryItemSchema = z.object({
  name: z.string(),

  type: z.enum([
    "registry:block",
    "registry:internal",
    "registry:component",
    "registry:ui",
    "registry:lib",
    "registry:hook",
    "registry:example",
    "registry:page",
  ]),

  categories: z.array(z.string()).optional(),
})

export async function getAllBlockIds(
  types: RegistryItemType[] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = []
): Promise<string[]> {
  const blocks = await getAllBlocks(types, categories)

  return blocks.map((block) => block.name)
}

export async function getAllBlocks(
  types: RegistryItemType[] = [
    "registry:block",
    "registry:internal",
  ],
  categories: string[] = []
): Promise<RegistryItem[]> {
  const { Index } = await import("@/registry/__index__")

  const result = z
    .record(z.string(), registryItemSchema)
    .safeParse(Index)

  if (!result.success) {
    console.error(
      "Invalid registry index:",
      result.error.flatten()
    )

    throw new Error(
      "Invalid registry index. Check registry/__index__.ts and registry item definitions."
    )
  }

  const index = result.data

  return Object.values(index).filter(
    (block) =>
      types.includes(block.type) &&
      (categories.length === 0 ||
        block.categories?.some((category) =>
          categories.includes(category)
        ) === true) &&
      !block.name.startsWith("chart-")
  )
}