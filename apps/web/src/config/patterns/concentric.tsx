import type { Pattern } from "@/src/types/pattern"

import { cross, type Geo, matrix, mix } from "./_factory"

const spacings = [
  { name: "Fine", p: 10, w: 1, a: 35 },
  { name: "Medium", p: 18, w: 1.5, a: 30 },
  { name: "Wide", p: 32, w: 2, a: 22 },
]
const origins = [
  { name: "Centered", at: "50% 50%" },
  { name: "Top", at: "50% 0%" },
  { name: "Bottom-Left", at: "0% 100%" },
  { name: "Right", at: "100% 50%" },
]

const geos: Geo[] = cross(spacings, origins).map(([sp, o]) => ({
  name: `${sp.name} ${o.name} Rings`,
  style: (c) => ({
    backgroundImage: `repeating-radial-gradient(circle at ${o.at}, ${mix(c, sp.a)} 0 ${sp.w}px, transparent ${sp.w}px ${sp.p}px)`,
  }),
}))

export const concentricPatterns: Pattern[] = matrix("concentric", geos, {
  perGeo: 4,
  fadeStep: 5,
})
