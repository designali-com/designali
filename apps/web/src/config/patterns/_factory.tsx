import type { CSSProperties } from "react"

import type { Pattern } from "@/src/types/pattern"

/**
 * Shared helpers for the parametric pattern generators.
 *
 * Every generated pattern renders a single plain <div> with an inline style
 * object, so the copy button (react-element-to-jsx-string) produces code that
 * can be pasted anywhere. Colours always come from theme CSS variables so the
 * patterns follow light / dark themes.
 */

export type PatternCategory = Pattern["category"]

export interface Tone {
  name: string
  value: string
}

export interface Fade {
  name: string
  mask: string | null
}

export interface Geo {
  name: string
  style: (color: string) => CSSProperties
}

export const tones = {
  primary: { name: "Primary", value: "var(--primary)" },
  ink: { name: "Ink", value: "var(--foreground)" },
  border: { name: "Border", value: "var(--border)" },
  muted: { name: "Muted", value: "var(--muted-foreground)" },
  c1: { name: "Chart 1", value: "var(--chart-1)" },
  c2: { name: "Chart 2", value: "var(--chart-2)" },
  c3: { name: "Chart 3", value: "var(--chart-3)" },
  c4: { name: "Chart 4", value: "var(--chart-4)" },
  c5: { name: "Chart 5", value: "var(--chart-5)" },
} satisfies Record<string, Tone>

export const TONES: Tone[] = [
  tones.primary,
  tones.ink,
  tones.muted,
  tones.c1,
  tones.primary,
  tones.c2,
  tones.border,
  tones.c3,
  tones.c4,
  tones.c5,
]

export const fades = {
  full: { name: "Full Bleed", mask: null },
  top: {
    name: "Top Fade",
    mask: "linear-gradient(to bottom, #000 0%, transparent 85%)",
  },
  bottom: {
    name: "Bottom Fade",
    mask: "linear-gradient(to top, #000 0%, transparent 85%)",
  },
  left: {
    name: "Left Fade",
    mask: "linear-gradient(to right, #000 0%, transparent 85%)",
  },
  right: {
    name: "Right Fade",
    mask: "linear-gradient(to left, #000 0%, transparent 85%)",
  },
  center: {
    name: "Center Glow",
    mask: "radial-gradient(ellipse 65% 60% at 50% 50%, #000 25%, transparent 75%)",
  },
  topArc: {
    name: "Top Arc",
    mask: "radial-gradient(ellipse 80% 65% at 50% 0%, #000 35%, transparent 100%)",
  },
  bottomArc: {
    name: "Bottom Arc",
    mask: "radial-gradient(ellipse 80% 65% at 50% 100%, #000 35%, transparent 100%)",
  },
  tl: {
    name: "Top-Left Corner",
    mask: "radial-gradient(circle at 0% 0%, #000 0%, transparent 70%)",
  },
  tr: {
    name: "Top-Right Corner",
    mask: "radial-gradient(circle at 100% 0%, #000 0%, transparent 70%)",
  },
  bl: {
    name: "Bottom-Left Corner",
    mask: "radial-gradient(circle at 0% 100%, #000 0%, transparent 70%)",
  },
  br: {
    name: "Bottom-Right Corner",
    mask: "radial-gradient(circle at 100% 100%, #000 0%, transparent 70%)",
  },
  frame: {
    name: "Edge Frame",
    mask: "radial-gradient(ellipse 75% 70% at 50% 50%, transparent 35%, #000 100%)",
  },
  diagonal: {
    name: "Diagonal Fade",
    mask: "linear-gradient(135deg, #000 0%, transparent 75%)",
  },
  band: {
    name: "Horizon Band",
    mask: "linear-gradient(to bottom, transparent 10%, #000 50%, transparent 90%)",
  },
  columns: {
    name: "Side Columns",
    mask: "linear-gradient(to right, #000 0%, transparent 32%, transparent 68%, #000 100%)",
  },
} satisfies Record<string, Fade>

export const FADES: Fade[] = [
  fades.top,
  fades.center,
  fades.bottomArc,
  fades.tr,
  fades.full,
  fades.left,
  fades.frame,
  fades.bl,
  fades.topArc,
  fades.right,
  fades.diagonal,
  fades.br,
  fades.bottom,
  fades.band,
  fades.tl,
  fades.columns,
]

/** Mix a colour with transparency (percentage of the colour that remains). */
export const mix = (color: string, pct: number) =>
  `color-mix(in oklab, ${color} ${pct}%, transparent)`

/** Encode an SVG string as a CSS url() data-URI. */
export const svgUrl = (svg: string) =>
  `url("data:image/svg+xml,${svg
    .replace(/\s+/g, " ")
    .trim()
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")}")`

/** Build an SVG tile (black on transparent, used as a mask). */
export const svgTile = (w: number, h: number, body: string) =>
  svgUrl(
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>${body}</svg>`
  )

/**
 * A layer painted in `color` and shaped by a repeating SVG mask tile.
 * This is how SVG geometry gets to use theme CSS variables.
 */
export const maskShape = (
  color: string,
  tile: string,
  w: number,
  h: number,
  opacity = 1
): CSSProperties => ({
  backgroundColor: color,
  maskImage: tile,
  WebkitMaskImage: tile,
  maskSize: `${w}px ${h}px`,
  WebkitMaskSize: `${w}px ${h}px`,
  maskRepeat: "repeat",
  WebkitMaskRepeat: "repeat",
  opacity,
})

const round = (n: number) => Math.round(n * 100) / 100
export const r2 = round

/** Merge a geometry style with a fade mask (compositing with shape masks). */
export function applyFade(style: CSSProperties, fade: Fade): CSSProperties {
  if (!fade.mask) return style
  const shapeMask = style.maskImage as string | undefined
  if (!shapeMask) {
    return {
      ...style,
      maskImage: fade.mask,
      WebkitMaskImage: fade.mask,
    }
  }
  const size = (style.maskSize as string | undefined) ?? "auto"
  return {
    ...style,
    maskImage: `${shapeMask}, ${fade.mask}`,
    WebkitMaskImage: `${shapeMask}, ${fade.mask}`,
    maskSize: `${size}, 100% 100%`,
    WebkitMaskSize: `${size}, 100% 100%`,
    maskRepeat: "repeat, no-repeat",
    WebkitMaskRepeat: "repeat, no-repeat",
    maskComposite: "intersect",
    WebkitMaskComposite: "source-in",
  }
}

const pad = (n: number) => String(n).padStart(2, "0")

export function toPatterns(
  category: PatternCategory,
  items: { name: string; style: CSSProperties; badge?: string }[]
): Pattern[] {
  const seen = new Set<string>()
  return items.map((item, i) => {
    let name = item.name
    let n = 2
    while (seen.has(name)) name = `${item.name} ${n++}`
    seen.add(name)
    const style = item.style
    return {
      id: `${category}-${pad(i + 1)}`,
      name,
      category,
      badge: item.badge ?? (i < 3 ? "New" : undefined),
      render: () => <div className="absolute inset-0 z-0" style={style} />,
    }
  })
}

/**
 * Cross geometries with fades and tones. Each geometry receives `perGeo`
 * distinct fades (rotated per geometry so the mix differs) and a rotating tone.
 */
export function matrix(
  category: PatternCategory,
  geos: Geo[],
  {
    perGeo,
    fadeList = FADES,
    toneList = TONES,
    fadeStep = 5,
    toneStep = 3,
  }: {
    perGeo: number
    fadeList?: Fade[]
    toneList?: Tone[]
    fadeStep?: number
    toneStep?: number
  }
): Pattern[] {
  const items: { name: string; style: CSSProperties }[] = []
  const take = Math.min(perGeo, fadeList.length)
  geos.forEach((geo, gi) => {
    for (let k = 0; k < take; k++) {
      const fade = fadeList[(gi * fadeStep + k) % fadeList.length]!
      const tone = toneList[(gi + k * toneStep) % toneList.length]!
      items.push({
        name: fade.mask ? `${geo.name}, ${fade.name}` : geo.name,
        style: applyFade(geo.style(tone.value), fade),
      })
    }
  })
  return toPatterns(category, items)
}

/** Cartesian product helper. */
export function cross<A, B>(as: A[], bs: B[]): [A, B][] {
  const out: [A, B][] = []
  for (const a of as) for (const b of bs) out.push([a, b])
  return out
}
