import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, svgTile } from "./_factory"

const zig = (w: number, y1: number, y2: number) =>
  `M${-w / 2} ${y2} L0 ${y1} L${w / 2} ${y2} L${w} ${y1} L${w * 1.5} ${y2}`

const strokeZig = (
  name: string,
  w: number,
  h: number,
  sw: number,
  opacity = 0.5
): Geo => {
  const tile = svgTile(
    w,
    h,
    `<path d='${zig(w, h * 0.75, h * 0.25)}' fill='none' stroke='black' stroke-width='${sw}' stroke-linejoin='miter'/>`
  )
  return { name, style: (c) => maskShape(c, tile, w, h, opacity) }
}

const doubleTile = svgTile(
  32,
  24,
  `<path d='${zig(32, 10, 2)}' fill='none' stroke='black' stroke-width='1.2'/><path d='${zig(32, 20, 12)}' fill='none' stroke='black' stroke-width='1.2' opacity='0.5'/>`
)
const filledTile = svgTile(28, 20, `<path d='M0 15 L14 5 L28 15 V20 H0 Z' fill='black'/>`)
const verticalTile = svgTile(
  16,
  24,
  `<path d='M12 0 L4 12 L12 24' fill='none' stroke='black' stroke-width='1.2'/>`
)

const geos: Geo[] = [
  strokeZig("Fine Zigzag", 16, 8, 1),
  strokeZig("Classic Zigzag", 24, 12, 1.4),
  strokeZig("Wide Zigzag", 48, 16, 1.4, 0.45),
  strokeZig("Tall Zigzag", 20, 22, 1.2),
  strokeZig("Bold Zigzag", 32, 18, 3, 0.3),
  { name: "Double Zigzag", style: (c) => maskShape(c, doubleTile, 32, 24, 0.5) },
  { name: "Filled Zigzag", style: (c) => maskShape(c, filledTile, 28, 20, 0.12) },
  { name: "Vertical Zigzag", style: (c) => maskShape(c, verticalTile, 16, 24, 0.45) },
]

export const zigzagPatterns: Pattern[] = matrix("zigzag", geos, {
  perGeo: 6,
  fadeStep: 3,
})
