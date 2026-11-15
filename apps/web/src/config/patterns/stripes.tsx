import type { Pattern } from "@/src/types/pattern"

import { cross, type Geo, matrix, mix } from "./_factory"

const dirs = [
  { name: "Vertical", deg: 90 },
  { name: "Horizontal", deg: 0 },
]
const widths = [
  { name: "Pinstripe", w: 1, p: 6, a: 30 },
  { name: "Thin Stripe", w: 1, p: 14, a: 45 },
  { name: "Medium Stripe", w: 4, p: 18, a: 18 },
  { name: "Awning Stripe", w: 16, p: 32, a: 10 },
]

const geos: Geo[] = cross(dirs, widths).map(([dir, w]) => ({
  name: `${dir.name} ${w.name}`,
  style: (c) => ({
    backgroundImage: `repeating-linear-gradient(${dir.deg}deg, ${mix(c, w.a)} 0 ${w.w}px, transparent ${w.w}px ${w.p}px)`,
  }),
}))

export const stripesPatterns: Pattern[] = matrix("stripes", geos, {
  perGeo: 6,
  fadeStep: 2,
})
