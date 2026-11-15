import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, svgTile } from "./_factory"

const grain = (
  name: string,
  opts: {
    freq: string
    octaves: number
    type?: "fractalNoise" | "turbulence"
    k: number
    b: number
    size?: number
    opacity: number
  }
): Geo => {
  const s = opts.size ?? 180
  const tile = svgTile(
    s,
    s,
    `<filter id='n' x='0' y='0' width='100%' height='100%'><feTurbulence type='${opts.type ?? "fractalNoise"}' baseFrequency='${opts.freq}' numOctaves='${opts.octaves}' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${opts.k} 0 0 0 ${opts.b}'/></filter><rect width='100%' height='100%' filter='url(#n)'/>`
  )
  return { name, style: (c) => maskShape(c, tile, s, s, opts.opacity) }
}

const geos: Geo[] = [
  grain("Fine Grain", { freq: "0.9", octaves: 3, k: 2.4, b: -0.9, opacity: 0.35 }),
  grain("Film Grain", { freq: "0.65", octaves: 3, k: 3, b: -1.2, opacity: 0.4 }),
  grain("Coarse Grain", { freq: "0.38", octaves: 2, k: 3, b: -1.25, opacity: 0.35 }),
  grain("Static Noise", { freq: "1.2", octaves: 1, type: "turbulence", k: 3, b: -0.6, opacity: 0.3 }),
  grain("Paper Fiber", { freq: "0.03 0.7", octaves: 3, k: 3, b: -1.2, opacity: 0.3 }),
  grain("Brushed Grain", { freq: "0.8 0.02", octaves: 2, k: 3, b: -1.2, opacity: 0.3 }),
  grain("Cloud Noise", { freq: "0.012", octaves: 4, k: 2.2, b: -0.8, size: 320, opacity: 0.35 }),
  grain("Sand Grain", { freq: "1.6", octaves: 2, k: 4, b: -1.9, opacity: 0.45 }),
]

export const noiseGrainPatterns: Pattern[] = matrix("noise-grain", geos, {
  perGeo: 6,
  fadeStep: 8,
})
