import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, r2, svgTile } from "./_factory"
import { hexCentres } from "./hexagon"

const isoGrid = (
  name: string,
  w: number,
  verticals: boolean,
  sw: number,
  opacity: number
): Geo => {
  const h = r2(w / Math.sqrt(3))
  const v = verticals ? ` M0 0 V${h} M${w / 2} 0 V${h}` : ""
  const tile = svgTile(
    w,
    h,
    `<path d='M0 ${h} L${w} 0 M0 0 L${w} ${h}${v}' fill='none' stroke='black' stroke-width='${sw}'/>`
  )
  return { name, style: (c) => maskShape(c, tile, w, h, opacity) }
}

const isoDots = (name: string, w: number): Geo => {
  const h = r2(w / Math.sqrt(3))
  const tile = svgTile(
    w,
    h,
    `<circle cx='0' cy='0' r='1.4'/><circle cx='${w}' cy='0' r='1.4'/><circle cx='0' cy='${h}' r='1.4'/><circle cx='${w}' cy='${h}' r='1.4'/><circle cx='${w / 2}' cy='${h / 2}' r='1.4'/>`
  )
  return { name, style: (c) => maskShape(c, tile, w, h, 0.55) }
}

const cubes = (name: string, r: number, outline: boolean): Geo => {
  const { w, h, centres } = hexCentres(r)
  const hw = w / 2
  const body = centres
    .map(([cx, cy]) => {
      const top = `M${r2(cx)} ${r2(cy - r)} L${r2(cx + hw)} ${r2(cy - r / 2)} L${r2(cx)} ${r2(cy)} L${r2(cx - hw)} ${r2(cy - r / 2)} Z`
      const left = `M${r2(cx - hw)} ${r2(cy - r / 2)} L${r2(cx)} ${r2(cy)} L${r2(cx)} ${r2(cy + r)} L${r2(cx - hw)} ${r2(cy + r / 2)} Z`
      const right = `M${r2(cx + hw)} ${r2(cy - r / 2)} L${r2(cx)} ${r2(cy)} L${r2(cx)} ${r2(cy + r)} L${r2(cx + hw)} ${r2(cy + r / 2)} Z`
      return outline
        ? `<path d='${top} ${left} ${right}' fill='none' stroke='black' stroke-width='1'/>`
        : `<path d='${top}' fill='black' opacity='0.9'/><path d='${left}' fill='black' opacity='0.5'/><path d='${right}' fill='black' opacity='0.2'/>`
    })
    .join("")
  const tile = svgTile(r2(w), r2(h), body)
  return {
    name,
    style: (c) => maskShape(c, tile, r2(w), r2(h), outline ? 0.45 : 0.14),
  }
}

const geos: Geo[] = [
  isoGrid("Fine Isometric Grid", 24, true, 1, 0.35),
  isoGrid("Isometric Grid", 40, true, 1, 0.4),
  isoGrid("Large Isometric Grid", 64, true, 1.2, 0.35),
  isoGrid("Isometric Rhombus Lattice", 36, false, 1, 0.4),
  isoDots("Isometric Dot Grid", 28),
  cubes("Shaded Cubes", 14, false),
  cubes("Large Shaded Cubes", 26, false),
  cubes("Cube Outlines", 18, true),
]

export const isometricPatterns: Pattern[] = matrix("isometric", geos, {
  perGeo: 6,
  fadeStep: 7,
})
