import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, r2, svgTile } from "./_factory"

const lattice = (name: string, s: number, sw: number, opacity: number): Geo => {
  const h = r2(s * Math.sqrt(3))
  const tile = svgTile(
    s,
    h,
    `<path d='M0 0 H${s} M0 ${h / 2} H${s} M0 ${h} H${s} M0 ${h} L${s} 0 M0 0 L${s} ${h}' fill='none' stroke='black' stroke-width='${sw}'/>`
  )
  return { name, style: (c) => maskShape(c, tile, s, h, opacity) }
}

const filled = (name: string, s: number, opacity: number, shade = false): Geo => {
  const h = r2(s * Math.sqrt(3))
  const half = h / 2
  const body = shade
    ? `<path d='M0 ${half} L${s / 2} 0 L${s / 2} ${half} Z M${s / 2} ${half} L${s} ${h} L${s / 2} ${h} Z' fill='black'/>`
    : `<path d='M0 0 L${s} 0 L${s / 2} ${half} Z M${s / 2} ${half} L${s} ${h} L0 ${h} Z' fill='black'/>`
  const tile = svgTile(s, h, body)
  return { name, style: (c) => maskShape(c, tile, s, h, opacity) }
}

const marks = (name: string, s: number, opacity: number): Geo => {
  const tile = svgTile(
    s,
    s,
    `<path d='M${s / 2} ${s * 0.32} L${s * 0.66} ${s * 0.62} L${s * 0.34} ${s * 0.62} Z' fill='none' stroke='black' stroke-width='1.2' stroke-linejoin='round'/>`
  )
  return { name, style: (c) => maskShape(c, tile, s, s, opacity) }
}

const sawTile = svgTile(24, 16, `<path d='M0 16 L24 4 V16 Z' fill='black'/>`)

const geos: Geo[] = [
  lattice("Fine Triangle Lattice", 16, 1, 0.4),
  lattice("Classic Triangle Lattice", 28, 1, 0.45),
  lattice("Large Triangle Lattice", 44, 1.2, 0.4),
  filled("Alternating Triangles", 24, 0.1),
  filled("Shaded Pyramids", 32, 0.12, true),
  marks("Triangle Marks", 28, 0.5),
  { name: "Sawtooth Triangles", style: (c) => maskShape(c, sawTile, 24, 16, 0.1) },
  lattice("Bold Triangle Lattice", 36, 2.5, 0.25),
]

export const trianglesPatterns: Pattern[] = matrix("triangles", geos, {
  perGeo: 6,
  fadeStep: 9,
})
