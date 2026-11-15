import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, svgTile } from "./_factory"

const plusPath = (cx: number, cy: number, l: number) =>
  `M${cx - l} ${cy} H${cx + l} M${cx} ${cy - l} V${cy + l}`

const tile = (
  name: string,
  s: number,
  body: string,
  opacity: number
): Geo => {
  const t = svgTile(s, s, body)
  return { name, style: (c) => maskShape(c, t, s, s, opacity) }
}

const stroke = (d: string, sw: number) =>
  `<path d='${d}' fill='none' stroke='black' stroke-width='${sw}' stroke-linecap='square'/>`

const geos: Geo[] = [
  tile("Tiny Plus Grid", 16, stroke(plusPath(8, 8, 2.5), 1), 0.45),
  tile("Plus Grid", 24, stroke(plusPath(12, 12, 4.5), 1.4), 0.45),
  tile("Bold Plus Grid", 36, stroke(plusPath(18, 18, 7), 3), 0.25),
  tile("Sparse Plus Grid", 56, stroke(plusPath(28, 28, 5), 1.2), 0.55),
  tile(
    "Staggered Plus",
    40,
    stroke(`${plusPath(10, 10, 4)} ${plusPath(30, 30, 4)}`, 1.3),
    0.45
  ),
  tile(
    "Cross Marks",
    24,
    stroke("M8.5 8.5 L15.5 15.5 M15.5 8.5 L8.5 15.5", 1.3),
    0.4
  ),
  tile(
    "Plus And Dot",
    32,
    `${stroke(plusPath(8, 8, 4), 1.2)}<circle cx='24' cy='24' r='1.6'/>`,
    0.5
  ),
  tile(
    "Crop Marks",
    48,
    stroke("M0 6 V0 H6 M42 0 H48 V6 M48 42 V48 H42 M6 48 H0 V42", 1.2),
    0.5
  ),
]

export const plusPatterns: Pattern[] = matrix("plus", geos, {
  perGeo: 6,
  fadeStep: 2,
})
