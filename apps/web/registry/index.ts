import type { Registry } from "shadcn/schema"; 
import { ui } from "@/registry/registry-ui";
import { components } from "./registry-components";

export const registry = {
  homepage: "https://predict.fit",
  items: [
    ...ui, 
    ...(components as Registry["items"]),
  ],
  name: "predict design",
} satisfies Registry;