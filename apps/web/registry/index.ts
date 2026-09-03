import type { Registry } from "shadcn/schema"
import { ui } from "@/registry/registry-ui"
import { components } from "./registry-components"
import { blocks } from "./registry-blocks"
import { examples } from "./registry-examples"

export const registry = {
  homepage: "https://predict.fit",
  items: [...ui, ...blocks, ...examples, ...(components as Registry["items"])],
  name: "predict design",
} satisfies Registry
