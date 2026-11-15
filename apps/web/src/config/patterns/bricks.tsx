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

const lines = (d: string, sw = 1) =>
  `<path d='${d}' fill='none' stroke='black' stroke-width='${sw}'/>`

/** Running bond: two courses per tile. */
const running = (w: number, course: number, sw = 1) => {
  const h = course * 2
  return {
    w,
    h,
    body: lines(
      `M0 0 H${w} M0 ${course} H${w} M0 0 V${course} M${w / 2} ${course} V${h}`,
      sw
    ),
  }
}

const rb1 = running(24, 10)
const rb2 = running(48, 16)
const rb3 = running(80, 24, 1.4)

const verticalBond = {
  w: 32,
  h: 48,
  body: lines("M0 0 V48 M16 0 V48 M0 0 H16 M16 24 H32"),
}

const stack = {
  w: 40,
  h: 20,
  body: lines("M0 0 H40 M0 0 V20"),
}

const basket = {
  w: 32,
  h: 32,
  body: lines(
    "M0 0 H32 M0 16 H32 M16 0 V32 M0 5.3 H16 M0 10.6 H16 M16 21.3 H32 M16 26.6 H32 M21.3 0 V16 M26.6 0 V16 M5.3 16 V32 M10.6 16 V32"
  ),
}

const flemish = {
  w: 48,
  h: 24,
  body: lines("M0 0 H48 M0 12 H48 M0 0 V12 M20 0 V12 M32 0 V12 M10 12 V24 M26 12 V24 M38 12 V24"),
}

const filled = {
  w: 40,
  h: 24,
  body: `<rect x='1' y='1' width='38' height='10' rx='1.5' fill='black'/><rect x='-19' y='13' width='38' height='10' rx='1.5' fill='black'/><rect x='21' y='13' width='38' height='10' rx='1.5' fill='black'/>`,
}

const geos: Geo[] = [
  tile("Small Running Bond", rb1.w, rb1.h, rb1.body, 0.35),
  tile("Running Bond Bricks", rb2.w, rb2.h, rb2.body, 0.4),
  tile("Large Running Bond", rb3.w, rb3.h, rb3.body, 0.35),
  tile("Vertical Bond Bricks", verticalBond.w, verticalBond.h, verticalBond.body, 0.35),
  tile("Stack Bond Bricks", stack.w, stack.h, stack.body, 0.35),
  tile("Basketweave Bricks", basket.w, basket.h, basket.body, 0.3),
  tile("Flemish Bond Bricks", flemish.w, flemish.h, flemish.body, 0.35),
  tile("Solid Bricks", filled.w, filled.h, filled.body, 0.08),
]

export const bricksPatterns: Pattern[] = matrix("bricks", geos, {
  perGeo: 6,
  fadeStep: 6,
})
