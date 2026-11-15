import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, svgTile } from "./_factory"

const rhombus = (cx: number, cy: number, rx: number, ry: number) =>
  `M${cx} ${cy - ry} L${cx + rx} ${cy} L${cx} ${cy + ry} L${cx - rx} ${cy} Z`

const shape = (
  name: string,
  w: number,
  h: number,
  body: string,
  opacity: number
): Geo => {
  const tile = svgTile(w, h, body)
  return { name, style: (c) => maskShape(c, tile, w, h, opacity) }
}

const geos: Geo[] = [
  shape("Diamond Studs", 20, 20, `<path d='${rhombus(10, 10, 3, 3)}' fill='black'/>`, 0.4),
  shape("Diamond Tiles", 32, 32, `<path d='${rhombus(16, 16, 14, 14)}' fill='black'/>`, 0.08),
  shape(
    "Offset Diamonds",
    28,
    28,
    `<path d='${rhombus(7, 7, 4, 4)} ${rhombus(21, 21, 4, 4)}' fill='black'/>`,
    0.3
  ),
  shape(
    "Nested Diamonds",
    40,
    40,
    `<path d='${rhombus(20, 20, 16, 16)} ${rhombus(20, 20, 9, 9)}' fill='none' stroke='black' stroke-width='1'/><path d='${rhombus(20, 20, 2.5, 2.5)}' fill='black'/>`,
    0.45
  ),
  shape(
    "Argyle",
    40,
    56,
    `<path d='${rhombus(20, 28, 20, 28)}' fill='black' opacity='0.35'/><path d='M0 0 L40 56 M40 0 L0 56' stroke='black' stroke-width='1' stroke-dasharray='3 3'/>`,
    0.3
  ),
  shape(
    "Tall Harlequin",
    24,
    48,
    `<path d='${rhombus(12, 24, 12, 24)}' fill='black'/>`,
    0.08
  ),
  shape(
    "Diamond Outlines",
    36,
    36,
    `<path d='${rhombus(18, 18, 12, 12)}' fill='none' stroke='black' stroke-width='1.2'/>`,
    0.45
  ),
  shape(
    "Diamond Lattice",
    24,
    24,
    `<path d='M0 12 L12 0 L24 12 L12 24 Z' fill='none' stroke='black' stroke-width='1'/>`,
    0.4
  ),
]

export const diamondPatterns: Pattern[] = matrix("diamond", geos, {
  perGeo: 6,
  fadeStep: 11,
})
