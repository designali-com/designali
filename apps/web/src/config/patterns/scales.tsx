import type { Pattern } from "@/src/types/pattern"

import { type Geo, maskShape, matrix, svgTile } from "./_factory"

const tile = (
  name: string,
  w: number,
  h: number,
  body: string,
  opacity: number
): Geo => {
  const t = svgTile(w, h, body)
  return { name, style: (c) => maskShape(c, t, w, h, opacity) }
}

/** Overlapping downward scales: arcs at two offset rows. */
const fishScales = (r: number, sw: number) => {
  const w = 2 * r
  const h = r
  const arc = (x0: number, y: number) =>
    `M${x0} ${y} A${r} ${r} 0 0 0 ${x0 + 2 * r} ${y}`
  return {
    w,
    h,
    body: `<path d='${arc(0, 0)} ${arc(-r, h / 2)} ${arc(r, h / 2)} ${arc(0, h)}' fill='none' stroke='black' stroke-width='${sw}'/>`,
  }
}

/** Upward scallops (cups) */
const scallop = (r: number, sw: number) => {
  const w = 2 * r
  const h = r
  return {
    w,
    h,
    body: `<path d='M0 ${h} A${r} ${r} 0 0 1 ${w} ${h} M${-r} ${h / 2} A${r} ${r} 0 0 1 ${r} ${h / 2} M${r} ${h / 2} A${r} ${r} 0 0 1 ${3 * r} ${h / 2}' fill='none' stroke='black' stroke-width='${sw}'/>`,
  }
}

/** Seigaiha style concentric waves */
const seigaiha = (r: number) => {
  const w = 2 * r
  const h = r
  const rings = (cx: number, cy: number) =>
    [1, 0.72, 0.44]
      .map(
        (k) =>
          `<circle cx='${cx}' cy='${cy}' r='${r * k}' fill='none' stroke='black' stroke-width='1'/>`
      )
      .join("")
  return {
    w,
    h,
    body: rings(r, h) + rings(0, h / 2) + rings(w, h / 2) + rings(r, 0),
  }
}

const fs1 = fishScales(10, 1)
const fs2 = fishScales(18, 1.2)
const fs3 = fishScales(28, 1.5)
const sc1 = scallop(12, 1)
const sc2 = scallop(22, 1.2)
const sg1 = seigaiha(16)
const sg2 = seigaiha(28)

const dragon = (() => {
  const r = 14
  return {
    w: 2 * r,
    h: r,
    body: `<path d='M0 0 A${r} ${r} 0 0 0 ${2 * r} 0 Z' fill='black' opacity='0.6'/><path d='M${-r} ${r / 2} A${r} ${r} 0 0 0 ${r} ${r / 2} M${r} ${r / 2} A${r} ${r} 0 0 0 ${3 * r} ${r / 2}' fill='none' stroke='black' stroke-width='1.2'/>`,
  }
})()

const geos: Geo[] = [
  tile("Fine Fish Scales", fs1.w, fs1.h, fs1.body, 0.4),
  tile("Fish Scales", fs2.w, fs2.h, fs2.body, 0.4),
  tile("Large Fish Scales", fs3.w, fs3.h, fs3.body, 0.35),
  tile("Scallop Cups", sc1.w, sc1.h, sc1.body, 0.4),
  tile("Large Scallop Cups", sc2.w, sc2.h, sc2.body, 0.35),
  tile("Seigaiha Waves", sg1.w, sg1.h, sg1.body, 0.35),
  tile("Large Seigaiha Waves", sg2.w, sg2.h, sg2.body, 0.3),
  tile("Dragon Scales", dragon.w, dragon.h, dragon.body, 0.25),
]

export const scalesPatterns: Pattern[] = matrix("scales", geos, {
  perGeo: 6,
  fadeStep: 4,
})
