import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, svgTile } from "./_factory"

const band = (name: string, w: number, opacity: number): Geo => {
  const h = w / 2
  const tile = svgTile(
    w,
    h,
    `<path d='M0 0 L${w / 2} ${h / 2} L${w} 0 L${w} ${h / 2} L${w / 2} ${h} L0 ${h / 2} Z' fill='black'/>`
  )
  return { name, style: (c) => maskShape(c, tile, w, h, opacity) }
}

const mark = (name: string, d: string, s: number, opacity = 0.55): Geo => {
  const tile = svgTile(
    s,
    s,
    `<path d='${d}' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/>`
  )
  return { name, style: (c) => maskShape(c, tile, s, s, opacity) }
}

const geos: Geo[] = [
  band("Narrow Chevron Bands", 24, 0.12),
  band("Classic Chevron Bands", 40, 0.1),
  band("Grand Chevron Bands", 72, 0.08),
  mark("Up Chevron Marks", "M8 15 L12 10 L16 15", 24),
  mark("Down Chevron Marks", "M8 10 L12 15 L16 10", 24),
  mark("Right Chevron Marks", "M12 10 L17 16 L12 22", 32, 0.5),
  mark("Left Chevron Marks", "M20 10 L15 16 L20 22", 32, 0.5),
  mark("Double Chevron Marks", "M10 12 L15 18 L10 24 M17 12 L22 18 L17 24", 36, 0.45),
]

export const chevronPatterns: Pattern[] = matrix("chevron", geos, {
  perGeo: 6,
  fadeStep: 6,
})
