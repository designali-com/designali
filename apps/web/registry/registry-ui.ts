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
        type: "registry:ui",
      },
    ],
  },
  {
    name: "counter-number",
    type: "registry:ui",
    files: [
      {
        path: "ui/counter-number.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dot-pattern",
    type: "registry:ui",
    files: [
      {
        path: "ui/dot-pattern.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "grid-pattern",
    type: "registry:ui",
    files: [
      {
        path: "ui/grid-pattern.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "typewriter",
    type: "registry:ui",
    files: [
      {
        path: "ui/typewriter.tsx",
        type: "registry:ui",
      },
    ],
  },
]
