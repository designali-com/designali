import type { Pattern } from "@/src/types/pattern"

import { type Geo, matrix, mix } from "./_factory"

const checker = (name: string, s: number, a: number): Geo => ({
  name,
  style: (c) => ({
    backgroundImage: `conic-gradient(${mix(c, a)} 0 25%, transparent 0 50%, ${mix(c, a)} 0 75%, transparent 0)`,
    backgroundSize: `${s}px ${s}px`,
  }),
})

const geos: Geo[] = [
  checker("Tiny Checker", 8, 14),
  checker("Classic Checker", 16, 12),
  checker("Medium Checker", 28, 10),
  checker("Large Checker", 48, 9),
  {
    name: "Harlequin Checker",
    style: (c) => ({
      backgroundImage: `linear-gradient(45deg, ${mix(c, 14)} 25%, transparent 25%, transparent 75%, ${mix(c, 14)} 75%), linear-gradient(45deg, ${mix(c, 14)} 25%, transparent 25%, transparent 75%, ${mix(c, 14)} 75%)`,
      backgroundSize: "24px 24px",
      backgroundPosition: "0 0, 12px 12px",
    }),
  },
  {
    name: "Gingham Check",
    style: (c) => ({
      backgroundImage: `linear-gradient(90deg, ${mix(c, 12)} 50%, transparent 50%), linear-gradient(${mix(c, 12)} 50%, transparent 50%)`,
      backgroundSize: "20px 20px",
    }),
  },
  {
    name: "Domino Checker",
    style: (c) => ({
      backgroundImage: `conic-gradient(${mix(c, 11)} 0 25%, transparent 0 50%, ${mix(c, 11)} 0 75%, transparent 0)`,
      backgroundSize: "48px 24px",
    }),
  },
  {
    name: "Buffalo Check",
    style: (c) => ({
      backgroundImage: `linear-gradient(90deg, ${mix(c, 16)} 50%, transparent 50%), linear-gradient(${mix(c, 16)} 50%, transparent 50%), repeating-linear-gradient(45deg, ${mix(c, 6)} 0 1px, transparent 1px 4px)`,
      backgroundSize: "56px 56px, 56px 56px, auto",
    }),
  },
]

export const checkerboardPatterns: Pattern[] = matrix("checkerboard", geos, {
  perGeo: 6,
  fadeStep: 7,
})
