import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, r2, svgTile } from "./_factory"

const N = 12

/** Triangle wave in [0, 1] so ramps tile seamlessly. */
const tri = (t: number) => 1 - Math.abs(((t % 1) + 1) % 1 * 2 - 1)

const fields: { name: string; f: (u: number, v: number) => number }[] = [
  { name: "Horizontal Ramp Halftone", f: (u) => tri(u) },
  { name: "Vertical Ramp Halftone", f: (_u, v) => tri(v) },
  { name: "Diagonal Ramp Halftone", f: (u, v) => tri((u + v) / 2) },
  {
    name: "Radial Burst Halftone",
    f: (u, v) => 1 - Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 1.9),
  },
  {
    name: "Hollow Ring Halftone",
    f: (u, v) => Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 1.9),
  },
  {
    name: "Wave Halftone",
    f: (u, v) => 0.5 + 0.5 * Math.sin((u + 0.25 * Math.sin(v * Math.PI * 2)) * Math.PI * 2),
  },
  {
    name: "Pulse Grid Halftone",
    f: (u, v) =>
      0.5 + 0.5 * Math.sin(u * Math.PI * 2) * Math.sin(v * Math.PI * 2),
  },
  {
    name: "Corner Bloom Halftone",
    f: (u, v) => Math.max(0, 1 - Math.hypot(u, v) * 1.1) + Math.max(0, 1 - Math.hypot(1 - u, 1 - v) * 1.1),
  },
]

const geos: Geo[] = fields.map((field, i) => {
  const cell = i % 2 === 0 ? 8 : 11
  const size = cell * N
  const body = Array.from({ length: N * N }, (_, k) => {
    const x = k % N
    const y = Math.floor(k / N)
    const val = Math.min(1, Math.max(0, field.f((x + 0.5) / N, (y + 0.5) / N)))
    const r = r2(0.15 * cell + val * 0.42 * cell)
    return `<circle cx='${r2((x + 0.5) * cell)}' cy='${r2((y + 0.5) * cell)}' r='${r}'/>`
  }).join("")
  const tile = svgTile(size, size, body)
  return { name: field.name, style: (c) => maskShape(c, tile, size, size, 0.35) }
})

export const halftonePatterns: Pattern[] = matrix("halftone", geos, {
  perGeo: 6,
  fadeStep: 5,
})
