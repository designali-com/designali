import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, svgTile } from "./_factory"

const tile = (
  name: string,
  w: number,
  h: number,
  body: string,
  opacity: number
): Geo => {
  const t = svgTile(w, h, body)
  return { name, style: (c) => maskShape(c, t, w, h, opacity) }
}

const ring = (cx: number, cy: number, r: number, sw = 1) =>
  `<circle cx='${cx}' cy='${cy}' r='${r}' fill='none' stroke='black' stroke-width='${sw}'/>`

const corners = (s: number, r: number, sw = 1) =>
  [
    [0, 0],
    [s, 0],
    [0, s],
    [s, s],
  ]
    .map(([x, y]) => ring(x!, y!, r, sw))
    .join("")

const geos: Geo[] = [
  tile("Ring Grid", 20, 20, ring(10, 10, 5), 0.45),
  tile("Large Rings", 44, 44, ring(22, 22, 15, 1.2), 0.4),
  tile("Overlapping Circles", 32, 32, corners(32, 16) + ring(16, 16, 16), 0.35),
  tile("Interlocking Rings", 28, 28, corners(28, 19.8), 0.35),
  tile(
    "Offset Discs",
    28,
    28,
    `<circle cx='7' cy='7' r='5'/><circle cx='21' cy='21' r='5'/>`,
    0.1
  ),
  tile("Double Rings", 36, 36, ring(18, 18, 12) + ring(18, 18, 7), 0.4),
  tile(
    "Half Circles",
    32,
    16,
    `<path d='M2 16 A14 14 0 0 1 30 16 Z' fill='black'/>`,
    0.1
  ),
  tile("Ring Chain", 24, 20, ring(0, 10, 7) + ring(12, 10, 7) + ring(24, 10, 7), 0.4),
]

export const circlesPatterns: Pattern[] = matrix("circles", geos, {
  perGeo: 6,
  fadeStep: 13,
})
