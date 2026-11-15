import type { Pattern } from "@/src/types/pattern"

import { type Geo, matrix, mix, tones } from "./_factory"

const line = (a: number) => mix("var(--background)", a)

const base = (c: string) => mix(c, 88)

const geos: Geo[] = [
  {
    name: "Classic Blueprint",
    style: (c) => ({
      backgroundColor: base(c),
      backgroundImage: `linear-gradient(to right, ${line(45)} 1px, transparent 1px), linear-gradient(to bottom, ${line(45)} 1px, transparent 1px), linear-gradient(to right, ${line(18)} 1px, transparent 1px), linear-gradient(to bottom, ${line(18)} 1px, transparent 1px)`,
      backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
    }),
  },
  {
    name: "Fine Blueprint",
    style: (c) => ({
      backgroundColor: base(c),
      backgroundImage: `linear-gradient(to right, ${line(25)} 1px, transparent 1px), linear-gradient(to bottom, ${line(25)} 1px, transparent 1px)`,
      backgroundSize: "12px 12px",
    }),
  },
  {
    name: "Wide Blueprint",
    style: (c) => ({
      backgroundColor: base(c),
      backgroundImage: `linear-gradient(to right, ${line(35)} 2px, transparent 2px), linear-gradient(to bottom, ${line(35)} 2px, transparent 2px)`,
      backgroundSize: "64px 64px",
      backgroundPosition: "center",
    }),
  },
  {
    name: "Dotted Blueprint",
    style: (c) => ({
      backgroundColor: base(c),
      backgroundImage: `radial-gradient(circle, ${line(60)} 1.2px, transparent 1.6px)`,
      backgroundSize: "18px 18px",
    }),
  },
  {
    name: "Crosshair Blueprint",
    style: (c) => ({
      backgroundColor: base(c),
      backgroundImage: `linear-gradient(to right, transparent 15px, ${line(55)} 15px 17px, transparent 17px), linear-gradient(to bottom, transparent 15px, ${line(55)} 15px 17px, transparent 17px), linear-gradient(to right, ${line(14)} 1px, transparent 1px), linear-gradient(to bottom, ${line(14)} 1px, transparent 1px)`,
      backgroundSize: "32px 32px, 32px 32px, 16px 16px, 16px 16px",
    }),
  },
  {
    name: "Diagonal Blueprint",
    style: (c) => ({
      backgroundColor: base(c),
      backgroundImage: `repeating-linear-gradient(45deg, ${line(16)} 0 1px, transparent 1px 16px), linear-gradient(to right, ${line(35)} 1px, transparent 1px), linear-gradient(to bottom, ${line(35)} 1px, transparent 1px)`,
      backgroundSize: "auto, 48px 48px, 48px 48px",
    }),
  },
  {
    name: "Compass Blueprint",
    style: (c) => ({
      backgroundColor: base(c),
      backgroundImage: `repeating-radial-gradient(circle at 50% 50%, ${line(28)} 0 1px, transparent 1px 40px), linear-gradient(to right, ${line(14)} 1px, transparent 1px), linear-gradient(to bottom, ${line(14)} 1px, transparent 1px)`,
      backgroundSize: "auto, 20px 20px, 20px 20px",
    }),
  },
  {
    name: "Isometric Blueprint",
    style: (c) => ({
      backgroundColor: base(c),
      backgroundImage: `repeating-linear-gradient(30deg, ${line(22)} 0 1px, transparent 1px 22px), repeating-linear-gradient(150deg, ${line(22)} 0 1px, transparent 1px 22px), repeating-linear-gradient(90deg, ${line(22)} 0 1px, transparent 1px 25.4px)`,
    }),
  },
]

export const blueprintPatterns: Pattern[] = matrix("blueprint", geos, {
  perGeo: 6,
  toneList: [tones.primary, tones.c1, tones.ink, tones.c2, tones.c3, tones.c4, tones.c5],
  toneStep: 2,
})
