import type { Pattern } from "@/src/types/pattern"

import { cross, type Geo, matrix, mix } from "./_factory"

const minors = [
  { name: "Engineering", s: 8 },
  { name: "Metric", s: 10 },
  { name: "Drafting", s: 12 },
  { name: "Sketch", s: 16 },
]
const majors = [
  { name: "4x", f: 4 },
  { name: "5x", f: 5 },
]

const geos: Geo[] = cross(minors, majors).map(([minor, major]) => {
  const big = minor.s * major.f
  return {
    name: `${minor.name} Graph Paper ${major.name}`,
    style: (c) => ({
      backgroundImage: [
        `linear-gradient(to right, ${mix(c, 45)} 1px, transparent 1px)`,
        `linear-gradient(to bottom, ${mix(c, 45)} 1px, transparent 1px)`,
        `linear-gradient(to right, ${mix(c, 16)} 1px, transparent 1px)`,
        `linear-gradient(to bottom, ${mix(c, 16)} 1px, transparent 1px)`,
      ].join(", "),
      backgroundSize: `${big}px ${big}px, ${big}px ${big}px, ${minor.s}px ${minor.s}px, ${minor.s}px ${minor.s}px`,
    }),
  }
})

export const graphPaperPatterns: Pattern[] = matrix("graph-paper", geos, {
  perGeo: 6,
  fadeStep: 3,
})
