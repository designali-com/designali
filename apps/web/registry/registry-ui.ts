import type { Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "gauge",
    type: "registry:ui",
    files: [
      {
        path: "ui/gauge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "bento",
    type: "registry:ui",
    files: [
      {
        path: "ui/bento.tsx",
        type: "registry:component",
      },
    ],
  },
]
