import type { Pattern } from "@/src/types/pattern"

import { cross, type Geo, matrix, mix } from "./_factory"

const sizes = [
  { name: "Petite", r: 2, s: 14, a: 40 },
  { name: "Classic", r: 3.5, s: 24, a: 30 },
  { name: "Large", r: 6, s: 38, a: 20 },
  { name: "Jumbo", r: 11, s: 60, a: 14 },
]
const layouts = [
  { name: "Grid", offset: false },
  { name: "Staggered", offset: true },
]

const geos: Geo[] = cross(sizes, layouts).map(([size, layout]) => {
  const dot = `radial-gradient(circle, ${"COLOR"} ${size.r}px, transparent ${size.r + 0.6}px)`
  return {
    name: `${size.name} Polka ${layout.name}`,
    style: (c) => {
      const d = dot.replace("COLOR", mix(c, size.a))
      return layout.offset
        ? {
            backgroundImage: `${d}, ${d}`,
            backgroundSize: `${size.s}px ${size.s}px`,
            backgroundPosition: `0 0, ${size.s / 2}px ${size.s / 2}px`,
          }
        : {
            backgroundImage: d,
            backgroundSize: `${size.s}px ${size.s}px`,
          }
    },
  }
})

export const polkaPatterns: Pattern[] = matrix("polka", geos, {
  perGeo: 6,
  fadeStep: 3,
})
