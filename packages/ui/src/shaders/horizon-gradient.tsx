// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
"use client";

import type { CSSProperties, ReactNode } from "react";
import { ShaderSurface, hexToOklab } from "./ShaderSurface";

// Night falling over a bright horizon: black at one edge (the top by default), deepening through
// indigo and blue to white at the other. On dark pages black and white trade places. The colour follows the distance from a point past that edge, measured on a wide
// ellipse, so every band arches like the edge of a planet: the dark dips lowest in the middle and
// the blue rises up the sides. The point drifts and a slow, broad noise breathes through the
// bands, so it moves without ever looking like it moves. On first showing the dark falls from
// its edge into place over the light, the arch easing up as it comes.
const SHADER = /* glsl */ `
uniform float u_curve;    // how strongly the bands arch
uniform float u_reach;    // how far down the dark reaches
uniform float u_softness; // how gradual the bands are
uniform float u_direction; // edge the dark comes from: 0 top, 1 right, 2 bottom, 3 left
uniform float u_intro;    // seconds the bands take to rise in
uniform float u_bulge;    // how far the bands bow toward the pointer (0 off)

// palette as a smooth curve through the stops (Catmull-Rom, in OKLab). Easing into each stop, as
// the shared ramp does, leaves a plateau at every colour; straight blends leave a crease instead,
// where the rate of change jumps, and the eye reads both as stripes in a gradient this large. A
// curve keeps the rate of change continuous, so the bands melt into each other. The ends repeat,
// so the curve settles gently into the darkest and lightest colours.
vec3 stop(int i) {
  return u_colors[clamp(i, 0, u_count - 1)];
}

float spline(float a, float b, float c, float d, float s) {
  return 0.5 * (2.0 * b + (c - a) * s + (2.0 * a - 5.0 * b + 4.0 * c - d) * s * s + (3.0 * (b - c) + d - a) * s * s * s);
}

vec3 rampSmooth(float x) {
  float f = clamp(x, 0.0, 1.0) * float(u_count - 1);
  int i = min(int(floor(f)), u_count - 2);
  float s = f - float(i);
  vec3 a = stop(i - 1), b = stop(i), c = stop(i + 1), d = stop(i + 2);
  vec3 lab = vec3(spline(a.x, b.x, c.x, d.x, s), spline(a.y, b.y, c.y, d.y, s), spline(a.z, b.z, c.z, d.z, s));
  // chroma follows its own curve, so a blend between two hues stays as vivid as its ends instead
  // of sagging toward grey through the middle
  float chroma = max(spline(length(a.yz), length(b.yz), length(c.yz), length(d.yz), s), 0.0);
  float len = length(lab.yz);
  if (len > 1e-4) lab.yz *= chroma / len;
  lab.x = clamp(lab.x, 0.0, 1.0);
  return lab;
}

float outCubic(float x) {
  x = 1.0 - clamp(x, 0.0, 1.0);
  return 1.0 - x * x * x;
}

vec3 shade(vec2 frag) {
  float t = u_time * 0.1;
  // the intro: 0 all light, 1 the bands in place
  float rise = outCubic(u_age / max(u_intro, 0.01));
  // turn the box so the dark edge is on top; everything below works in that frame
  vec2 f = frag;
  vec2 res = u_res;
  if (u_direction > 2.5) {
    f = vec2(frag.y, u_res.x - frag.x);
    res = u_res.yx;
  } else if (u_direction > 1.5) {
    f = u_res - frag;
  } else if (u_direction > 0.5) {
    f = vec2(u_res.y - frag.y, frag.x);
    res = u_res.yx;
  }
  float aspect = res.x / res.y;
  // x across in units of height, y down from the dark edge
  vec2 p = vec2((f.x / res.x - 0.5) * aspect, 1.0 - f.y / res.y);
  // a narrow box keeps some arch instead of flattening it out
  float k = 1.66 * max(aspect / 1.6, 0.6) / max(u_curve * mix(0.6, 1.0, rise), 0.05);
  vec2 c = vec2(0.05 * sin(t * 0.7), -0.55 + 0.018 * sin(t * 1.1));
  float d = length(vec2((p.x - c.x) / k, p.y - c.y));
  // the arch is strongest near the dark and eases off toward the light, so the lowest bands lie
  // nearly level, as a horizon does
  d = mix(d, p.y - c.y, 0.55 * smoothstep(0.8, 1.35, d));
  d += 0.022 * snoise(vec3(p * 1.1, t * 0.6));
  d -= (u_reach - 1.0) * 0.25 - (1.0 - rise) * 1.1;
  // the pointer draws the dark toward it: a soft swell around it (a short comet while it moves)
  // that eases away when it leaves
  if (u_bulge > 0.0) {
    float pd = pointerDist(frag, 0.5) / (0.32 * u_res.y);
    d -= u_bulge * u_pointerAmt * exp(-pd * pd);
  }
  // eased at both ends, so the black and the white are met without a visible edge; only half a
  // smoothstep, since the curve itself already settles into its ends
  float x = clamp((d - 0.66) / (0.7 * u_softness), 0.0, 1.0);
  x = mix(x, x * x * (3.0 - 2.0 * x), 0.5);
  // on dark pages the ramp runs the other way: the arched edge glows light and the far side
  // settles into black, so content over it sits on the page's own dark. Blended by u_dark, which
  // eases during a theme change, so the swap fades instead of jumping.
  vec3 lab = mix(rampSmooth(x), rampSmooth(1.0 - x), u_dark);
  // a short fade in from the shade at the content side at the very start
  vec3 start = mix(u_colors[u_count - 1], u_colors[0], u_dark);
  return mix(oklabToLinear(start), oklabToLinear(lab), smoothstep(0.0, 0.6, u_age));
}
`;

const COLOR = "#2b35d6";

// Shades of the colour, darkest first: black, a deep night, the colour at its most vivid, then a
// lighter blue, a pale haze and near-white. Hue leans slightly violet in the dark and toward the
// sky in the light, as a real dusk does.
const STEPS: [l: number, chroma: number, hue: number][] = [
  [0.02, 0.05, 0.08],
  [0.22, 0.75, 0.05],
  [0.42, 1, 0],
  [0.62, 0.75, -0.04],
  [0.86, 0.3, -0.06],
  [0.995, 0.02, -0.08],
];

const encode = (c: number) => {
  const v = c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
  return Math.round(Math.min(1, Math.max(0, v)) * 255)
    .toString(16)
    .padStart(2, "0");
};

// OKLCH -> hex, cutting chroma until the colour fits in sRGB so no shade clips to a harsher hue
function lchToHex(l: number, c: number, h: number) {
  for (let i = 0; i < 24; i++, c *= 0.9) {
    const a = c * Math.cos(h);
    const b = c * Math.sin(h);
    const L = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
    const M = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
    const S = (l - 0.0894841775 * a - 1.291485548 * b) ** 3;
    const rgb = [
      4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
      -1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
      -0.0041960863 * L - 0.7034186147 * M + 1.707614701 * S,
    ];
    if (rgb.every((v) => v >= -0.001 && v <= 1.001) || i === 23) return `#${rgb.map(encode).join("")}`;
  }
  return "#000000";
}

/** Six shades of one colour, darkest first. */
export function horizonShades(hex: string) {
  const [, a, b] = hexToOklab(hex);
  const c = Math.hypot(a, b);
  const h = Math.atan2(b, a);
  return STEPS.map(([l, k, dh]) => lchToHex(l, c * k, h + dh));
}

export type HorizonDirection = "top" | "right" | "bottom" | "left";

const DIRECTIONS: HorizonDirection[] = ["top", "right", "bottom", "left"];

// where the CSS stand-in's ellipse sits, and its size, for each direction
const FALLBACK = {
  top: "ellipse 140% 95% at 50% -40%",
  right: "ellipse 95% 140% at 140% 50%",
  bottom: "ellipse 140% 95% at 50% 140%",
  left: "ellipse 95% 140% at -40% 50%",
} as const;

export type HorizonGradientProps = {
  /** Colour of the sky between the dark and the light; drawn in shades of it. */
  color?: string;
  /** Hex colours, 2 to 6, from the dark edge to the light one (reversed on dark pages). Overrides `color`. */
  colors?: string[];
  /** Edge the dark comes from; the light gathers at the opposite one. */
  direction?: HorizonDirection;
  /** How strongly the bands arch; 0 is nearly level. */
  curve?: number;
  /** How far down the dark reaches; 1 is the designed height. */
  reach?: number;
  /** How gradual the bands are; higher spreads them over more of the frame. */
  softness?: number;
  /** Animation speed; 1 is the designed pace. */
  speed?: number;
  /** Film grain strength. */
  grain?: number;
  /** Seconds the bands take to rise in when the surface first shows. */
  intro?: number;
  /** How far the bands bow toward the pointer; 0 leaves them alone. */
  bulge?: number;
  /** Highest pixel ratio drawn; 1 keeps large surfaces cheap, up to 2 for sharper grain on retina. */
  maxDpr?: number;
  className?: string;
  style?: CSSProperties;
  /** Content shown on top of the background. */
  children?: ReactNode;
};

export function HorizonGradient({
  color = COLOR,
  colors,
  direction = "top",
  curve = 1,
  reach = 1,
  softness = 1.1,
  speed = 1,
  grain = 0.1,
  intro = 2.4,
  bulge = 0,
  maxDpr = 1,
  ...rest
}: HorizonGradientProps) {
  const list = colors?.filter(Boolean).slice(0, 6);
  const palette = list && list.length >= 2 ? list : horizonShades(color || COLOR);

  return (
    <ShaderSurface
      shader={SHADER}
      uniforms={{
        u_direction: Math.max(0, DIRECTIONS.indexOf(direction)),
        u_curve: curve,
        u_reach: reach,
        u_softness: softness,
        u_intro: intro,
        u_bulge: bulge,
      }}
      colors={palette}
      speed={speed}
      animate
      interactive={bulge > 0}
      grain={grain}
      maxDpr={maxDpr}
      fallback={(dark) =>
        `radial-gradient(${FALLBACK[direction] ?? FALLBACK.top}, ${(dark ? [...palette].reverse() : palette)
          .map((c, i) => `${c} ${Math.round(58 + (i / (palette.length - 1)) * 42)}%`)
          .join(", ")})`
      }
      {...rest}
    />
  );
}
