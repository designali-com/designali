import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, r2, svgTile } from "./_factory"

/** Deterministic PRNG so the generated contours never change. */
const mulberry32 = (seed: number) => () => {
  let t = (seed += 0x6d2b79f5)
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const POINTS = 24

const contours = (seed: number, size: number, hills: number, rings: number) => {
  const rand = mulberry32(seed)
  const paths: string[] = []
  for (let h = 0; h < hills; h++) {
    const cx = rand() * size
    const cy = rand() * size
    const maxR = size * (0.22 + rand() * 0.16)
    const harmonics = [2, 3, 5].map((n) => ({
      n,
      amp: 0.06 + rand() * 0.12,
      phase: rand() * Math.PI * 2,
    }))
    for (let k = 1; k <= rings; k++) {
      const base = (maxR * k) / rings
      // Relative integer segments keep the data-URI (and copied code) small.
      const pts: [number, number][] = []
      for (let i = 0; i < POINTS; i++) {
        const t = (i / POINTS) * Math.PI * 2
        const wobble = harmonics.reduce(
          (acc, hm) => acc + hm.amp * Math.sin(hm.n * t + hm.phase + k * 0.35),
          1
        )
        const r = base * wobble
        pts.push([Math.round(Math.cos(t) * r), Math.round(Math.sin(t) * r)])
      }
      const rel = pts
        .slice(1)
        .map(([x, y], i) => `${x - pts[i]![0]} ${y - pts[i]![1]}`)
        .join(" ")
      const d = `M${pts[0]![0]} ${pts[0]![1]}l${rel}z`
      // draw wrapped copies so the tile repeats seamlessly
      for (const ox of [-size, 0, size]) {
        for (const oy of [-size, 0, size]) {
          const x = cx + ox
          const y = cy + oy
          if (x + maxR * 1.6 < 0 || y + maxR * 1.6 < 0) continue
          if (x - maxR * 1.6 > size || y - maxR * 1.6 > size) continue
          paths.push(`<path transform='translate(${r2(x)} ${r2(y)})' d='${d}'/>`)
        }
      }
    }
  }
  return paths.join("")
}

const map = (
  name: string,
  seed: number,
  size: number,
  hills: number,
  rings: number,
  sw: number,
  opacity: number
): Geo => {
  const tile = svgTile(
    size,
    size,
    `<g fill='none' stroke='black' stroke-width='${sw}'>${contours(seed, size, hills, rings)}</g>`
  )
  return { name, style: (c) => maskShape(c, tile, size, size, opacity) }
}

const geos: Geo[] = [
  map("Rolling Hills Contours", 11, 260, 3, 6, 1, 0.4),
  map("Summit Contours", 23, 320, 2, 9, 1, 0.35),
  map("Island Contours", 37, 240, 4, 4, 1, 0.4),
  map("Ridge Contours", 41, 300, 3, 7, 1.2, 0.35),
  map("Valley Contours", 59, 280, 2, 6, 1.5, 0.3),
  map("Archipelago Contours", 67, 360, 5, 4, 1, 0.4),
  map("Dense Survey Contours", 73, 260, 3, 10, 0.8, 0.35),
  map("Highland Contours", 89, 340, 3, 8, 1.2, 0.35),
]

export const topographyPatterns: Pattern[] = matrix("topography", geos, {
  perGeo: 6,
  fadeStep: 5,
})
