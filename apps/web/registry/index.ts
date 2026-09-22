import type { Registry } from "shadcn/schema"
import { ui } from "@/registry/registry-ui"
import { components } from "./registry-components"
import { blocks } from "./registry-blocks"
import { pages } from "./registry-pages"
import { examples } from "./registry-examples"

export const registry = {
  homepage: "https://designali.com",
  items: [
    ...ui, 
    ...blocks, 
    ...pages, 
    ...examples, 
    ...(components as Registry["items"])],
  name: "predict design",
} satisfies Registry
