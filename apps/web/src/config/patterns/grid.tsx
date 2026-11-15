import type { Pattern } from "@/src/types/pattern"

import { cross, type Geo, matrix, mix } from "./_factory"

const sizes = [
  { name: "Micro", s: 12 },
  { name: "Fine", s: 20 },
  { name: "Medium", s: 32 },
  { name: "Large", s: 48 },
]
const weights = [
  { name: "", w: 1, a: 40 },
  { name: "Bold ", w: 2, a: 28 },
]

const geos: Geo[] = cross(sizes, weights).map(([size, weight]) => ({
  name: `${weight.name}${size.name} Grid`,
  style: (c) => ({
    backgroundImage: `linear-gradient(to right, ${mix(c, weight.a)} ${weight.w}px, transparent ${weight.w}px), linear-gradient(to bottom, ${mix(c, weight.a)} ${weight.w}px, transparent ${weight.w}px)`,
    backgroundSize: `${size.s}px ${size.s}px`,
    backgroundPosition: size.s >= 32 ? "center center" : "0 0",
  }),
}))

export const gridLinePatterns: Pattern[] = matrix("grid", geos, { perGeo: 6 })
