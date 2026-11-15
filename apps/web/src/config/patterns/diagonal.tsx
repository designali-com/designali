import type { Pattern } from "@/src/types/pattern"

import { type Geo, matrix, mix } from "./_factory"

const diag = (
  name: string,
  deg: number,
  w: number,
  p: number,
  a: number
): Geo => ({
  name,
  style: (c) => ({
    backgroundImage: `repeating-linear-gradient(${deg}deg, ${mix(c, a)} 0 ${w}px, transparent ${w}px ${p}px)`,
  }),
})

const geos: Geo[] = [
  diag("Fine 45deg Lines", 45, 1, 10, 40),
  diag("Wide 45deg Bands", 45, 6, 18, 14),
  diag("Fine 135deg Lines", 135, 1, 8, 35),
  diag("Wide 135deg Bands", 135, 10, 26, 10),
  diag("Shallow 30deg Lines", 30, 2, 14, 25),
  diag("Steep 60deg Lines", 60, 2, 14, 25),
  {
    name: "Two-Tone Ribbon",
    style: (c) => ({
      backgroundImage: `repeating-linear-gradient(45deg, ${mix(c, 16)} 0 8px, transparent 8px 16px, ${mix("var(--foreground)", 6)} 16px 24px, transparent 24px 32px)`,
    }),
  },
  {
    name: "Hazard Bands",
    style: (c) => ({
      backgroundImage: `repeating-linear-gradient(-45deg, ${mix(c, 18)} 0 14px, transparent 14px 28px), linear-gradient(to bottom, ${mix(c, 6)}, transparent)`,
    }),
  },
]

export const diagonalPatterns: Pattern[] = matrix("diagonal", geos, {
  perGeo: 6,
  fadeStep: 3,
})
