import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, svgTile } from "./_factory"

const wavePath = (w: number, y: number, a: number) =>
  `M0 ${y} Q ${w / 4} ${y - a} ${w / 2} ${y} T ${w} ${y}`

const strokeWave = (
  name: string,
  w: number,
  h: number,
  a: number,
  sw: number,
  opacity = 0.5
): Geo => {
  const tile = svgTile(
    w,
    h,
    `<path d='${wavePath(w, h / 2, a)}' fill='none' stroke='black' stroke-width='${sw}'/>`
  )
  return { name, style: (c) => maskShape(c, tile, w, h, opacity) }
}

const doubleTile = svgTile(
  60,
  28,
  `<path d='${wavePath(60, 9, 6)}' fill='none' stroke='black' stroke-width='1.2'/><path d='${wavePath(60, 19, 6)}' fill='none' stroke='black' stroke-width='1.2' opacity='0.5'/>`
)
const filledTile = svgTile(
  48,
  24,
  `<path d='${wavePath(48, 12, 6)} V 24 H 0 Z' fill='black'/>`
)
const verticalTile = svgTile(
  20,
  64,
  `<path d='M10 0 Q 4 16 10 32 T 10 64' fill='none' stroke='black' stroke-width='1.4'/>`
)

const geos: Geo[] = [
  strokeWave("Gentle Waves", 80, 20, 6, 1.5),
  strokeWave("Ripple Waves", 40, 12, 4, 1),
  strokeWave("Ocean Swell", 120, 36, 12, 2, 0.4),
  strokeWave("Tight Waves", 24, 10, 3, 1, 0.55),
  { name: "Double Waves", style: (c) => maskShape(c, doubleTile, 60, 28, 0.55) },
  { name: "Filled Waves", style: (c) => maskShape(c, filledTile, 48, 24, 0.12) },
  { name: "Vertical Waves", style: (c) => maskShape(c, verticalTile, 20, 64, 0.45) },
  strokeWave("Bold Waves", 64, 24, 8, 3, 0.3),
]

export const wavesPatterns: Pattern[] = matrix("waves", geos, { perGeo: 6 })
