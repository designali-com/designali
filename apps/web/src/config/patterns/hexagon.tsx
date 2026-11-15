import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, r2, svgTile } from "./_factory"

/** Pointy-top hexagon path centred at (cx, cy) with circumradius r. */
export const hexPath = (cx: number, cy: number, r: number) => {
  const hw = (Math.sqrt(3) / 2) * r
  return `M${r2(cx)} ${r2(cy - r)} L${r2(cx + hw)} ${r2(cy - r / 2)} L${r2(cx + hw)} ${r2(cy + r / 2)} L${r2(cx)} ${r2(cy + r)} L${r2(cx - hw)} ${r2(cy + r / 2)} L${r2(cx - hw)} ${r2(cy - r / 2)} Z`
}

/** Centres of every honeycomb cell that touches one repeat tile. */
export const hexCentres = (r: number) => {
  const w = Math.sqrt(3) * r
  return {
    w,
    h: 3 * r,
    centres: [
      [w / 2, r],
      [0, 2.5 * r],
      [w, 2.5 * r],
      [0, -0.5 * r],
      [w, -0.5 * r],
      [w / 2, 4 * r],
    ] as [number, number][],
  }
}

const honeycomb = (
  name: string,
  r: number,
  mode: { sw?: number; inset?: number },
  opacity: number
): Geo => {
  const { w, h, centres } = hexCentres(r)
  const body = centres
    .map(([x, y]) =>
      mode.inset
        ? `<path d='${hexPath(x, y, r * mode.inset)}' fill='black'/>`
        : `<path d='${hexPath(x, y, r)}' fill='none' stroke='black' stroke-width='${mode.sw}'/>`
    )
    .join("")
  const tile = svgTile(r2(w), r2(h), body)
  return { name, style: (c) => maskShape(c, tile, r2(w), r2(h), opacity) }
}

const geos: Geo[] = [
  honeycomb("Micro Honeycomb", 8, { sw: 1 }, 0.4),
  honeycomb("Fine Honeycomb", 14, { sw: 1 }, 0.45),
  honeycomb("Classic Honeycomb", 22, { sw: 1.2 }, 0.45),
  honeycomb("Large Honeycomb", 36, { sw: 1.2 }, 0.4),
  honeycomb("Bold Honeycomb", 20, { sw: 3 }, 0.25),
  honeycomb("Hex Tiles", 14, { inset: 0.84 }, 0.1),
  honeycomb("Large Hex Tiles", 26, { inset: 0.9 }, 0.08),
  honeycomb("Hex Beads", 10, { inset: 0.45 }, 0.35),
]

export const hexagonPatterns: Pattern[] = matrix("hexagon", geos, {
  perGeo: 6,
  fadeStep: 5,
})
