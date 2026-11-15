import type { Pattern } from "@/src/types/pattern"

import { type Geo, matrix, mix } from "./_factory"

const hatch = (
  name: string,
  angles: number[],
  p: number,
  w: number,
  a: number
): Geo => ({
  name,
  style: (c) => ({
    backgroundImage: angles
      .map(
        (deg) =>
          `repeating-linear-gradient(${deg}deg, ${mix(c, a)} 0 ${w}px, transparent ${w}px ${p}px)`
      )
      .join(", "),
  }),
})

const geos: Geo[] = [
  hatch("Dense Crosshatch", [45, -45], 8, 1, 28),
  hatch("Classic Crosshatch", [45, -45], 14, 1, 35),
  hatch("Bold Crosshatch", [45, -45], 24, 2, 22),
  hatch("Shallow Crosshatch", [30, 150], 12, 1, 30),
  hatch("Steep Crosshatch", [60, 120], 12, 1, 30),
  hatch("Screen Mesh", [0, 90], 5, 1, 18),
  hatch("Skewed Crosshatch", [15, 105], 16, 1, 32),
  hatch("Triple Hatch", [0, 60, 120], 18, 1, 22),
]

export const crosshatchPatterns: Pattern[] = matrix("crosshatch", geos, {
  perGeo: 6,
  fadeStep: 4,
})
