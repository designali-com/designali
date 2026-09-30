export type EffectCategory =
  | "distortion"
  | "glitch"
  | "light"
  | "motion"
  | "organic"
  | "texture"

export interface GradientEffect {
  id: string
  name: string
  category: EffectCategory
}

type Pixel = { r: number; g: number; b: number }

type EffectApply = (
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) => void

export const EFFECT_CATEGORIES: { id: EffectCategory; label: string }[] = [
  { id: "distortion", label: "Distortion" },
  { id: "glitch", label: "Glitch" },
  { id: "light", label: "Light" },
  { id: "motion", label: "Motion" },
  { id: "organic", label: "Organic" },
  { id: "texture", label: "Texture" },
]

function scaleOf(w: number, h: number) {
  return Math.min(w, h) / 800
}

function hash2(x: number, y: number) {
  let n = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263)
  n = Math.imul(n ^ (n >>> 13), 1274126177)
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296
}

function fade(value: number) {
  return value * value * (3 - 2 * value)
}

function noise2(x: number, y: number) {
  const x0 = Math.floor(x)
  const y0 = Math.floor(y)
  const fx = fade(x - x0)
  const fy = fade(y - y0)
  const a = hash2(x0, y0)
  const b = hash2(x0 + 1, y0)
  const c = hash2(x0, y0 + 1)
  const d = hash2(x0 + 1, y0 + 1)
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy
}

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function screen(a: number, b: number) {
  return 255 - ((255 - a) * (255 - b)) / 255
}

function luma(r: number, g: number, b: number) {
  return r * 0.2126 + g * 0.7152 + b * 0.0722
}

function sample(
  src: Uint8ClampedArray,
  w: number,
  h: number,
  x: number,
  y: number,
  out: Pixel
) {
  const cx = x < 0 ? 0 : x > w - 1 ? w - 1 : x
  const cy = y < 0 ? 0 : y > h - 1 ? h - 1 : y
  const x0 = cx | 0
  const y0 = cy | 0
  const x1 = x0 + 1 < w ? x0 + 1 : x0
  const y1 = y0 + 1 < h ? y0 + 1 : y0
  const tx = cx - x0
  const ty = cy - y0
  const i00 = (y0 * w + x0) * 4
  const i10 = (y0 * w + x1) * 4
  const i01 = (y1 * w + x0) * 4
  const i11 = (y1 * w + x1) * 4
  const r0 = src[i00]! + (src[i10]! - src[i00]!) * tx
  const g0 = src[i00 + 1]! + (src[i10 + 1]! - src[i00 + 1]!) * tx
  const b0 = src[i00 + 2]! + (src[i10 + 2]! - src[i00 + 2]!) * tx
  const r1 = src[i01]! + (src[i11]! - src[i01]!) * tx
  const g1 = src[i01 + 1]! + (src[i11 + 1]! - src[i01 + 1]!) * tx
  const b1 = src[i01 + 2]! + (src[i11 + 2]! - src[i01 + 2]!) * tx
  out.r = r0 + (r1 - r0) * ty
  out.g = g0 + (g1 - g0) * ty
  out.b = b0 + (b1 - b0) * ty
}

function write(
  dst: Uint8ClampedArray,
  index: number,
  r: number,
  g: number,
  b: number
) {
  dst[index] = r
  dst[index + 1] = g
  dst[index + 2] = b
  dst[index + 3] = 255
}

function centerOf(x: number, y: number, w: number, h: number) {
  const nx = (x + 0.5) / w - 0.5
  const ny = (y + 0.5) / h - 0.5
  const aspect = w / Math.max(1, h)
  const ax = nx * aspect * 2
  const ay = ny * 2
  const r = Math.hypot(ax, ay)
  const maxR = Math.hypot(aspect, 1)
  return { ax, ay, r, maxR, aspect }
}

function fromPolar(
  ax: number,
  ay: number,
  w: number,
  h: number,
  aspect: number
): [number, number] {
  const nx = ax / aspect
  return [((nx * 0.5) + 0.5) * w - 0.5, ((ay * 0.5) + 0.5) * h - 0.5]
}

function eachPixel(
  w: number,
  h: number,
  visit: (x: number, y: number, index: number) => void
) {
  for (let y = 0; y < h; y++) {
    const row = y * w
    for (let x = 0; x < w; x++) {
      visit(x, y, (row + x) * 4)
    }
  }
}

function remap(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  map: (x: number, y: number) => [number, number]
) {
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const [sx, sy] = map(x, y)
    sample(src, w, h, sx, sy, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function noiseShift(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number,
  frequency: number,
  amplitude: number,
  yScale = 1,
  xScale = 1
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const n1 = noise2(x / (frequency * s), y / (frequency * s))
    const n2 = noise2(x / (frequency * s) + 9.2, y / (frequency * s) + 3.7)
    const sx = x + (n1 - 0.5) * amplitude * t * s * xScale
    const sy = y + (n2 - 0.5) * amplitude * t * s * yScale
    sample(src, w, h, sx, sy, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function radialSample(
  src: Uint8ClampedArray,
  w: number,
  h: number,
  x: number,
  y: number,
  t: number,
  power: number,
  pixel: Pixel
) {
  const { ax, ay, r, maxR, aspect } = centerOf(x, y, w, h)
  if (r < 0.0001) {
    sample(src, w, h, x, y, pixel)
    return
  }
  const rn = Math.min(r / maxR, 1)
  const shaped = Math.pow(rn, power) * maxR
  const mixed = r * (1 - t) + shaped * t
  const k = mixed / r
  const [sx, sy] = fromPolar(ax * k, ay * k, w, h, aspect)
  sample(src, w, h, sx, sy, pixel)
}

function channelSplit(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  shiftFor: (x: number, y: number) => number
) {
  const red: Pixel = { r: 0, g: 0, b: 0 }
  const green: Pixel = { r: 0, g: 0, b: 0 }
  const blue: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const shift = shiftFor(x, y)
    sample(src, w, h, x - shift, y, red)
    sample(src, w, h, x, y, green)
    sample(src, w, h, x + shift, y, blue)
    write(dst, index, red.r, green.g, blue.b)
  })
}

function directionalBlur(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number,
  angle: number,
  distance: number,
  samples: number,
  backwardOnly: boolean
) {
  const s = scaleOf(w, h)
  const dx = Math.cos(angle) * distance * t * s
  const dy = Math.sin(angle) * distance * t * s
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    let r = 0
    let g = 0
    let b = 0
    let weight = 0
    for (let i = 0; i < samples; i++) {
      const k = backwardOnly
        ? i / (samples - 1)
        : i / (samples - 1) - 0.5
      const fadeAmount = 1 - Math.abs(k)
      sample(src, w, h, x + dx * k * 2, y + dy * k * 2, pixel)
      r += pixel.r * fadeAmount
      g += pixel.g * fadeAmount
      b += pixel.b * fadeAmount
      weight += fadeAmount
    }
    write(dst, index, r / weight, g / weight, b / weight)
  })
}

function softImage(
  src: Uint8ClampedArray,
  w: number,
  h: number,
  radius: number,
  highlightsOnly = false
) {
  const factor = 4
  const sw = Math.max(1, Math.round(w / factor))
  const sh = Math.max(1, Math.round(h / factor))
  const small = new Uint8ClampedArray(sw * sh * 4)

  for (let y = 0; y < sh; y++) {
    for (let x = 0; x < sw; x++) {
      const sx = Math.min(w - 1, ((x + 0.5) * w) / sw | 0)
      const sy = Math.min(h - 1, ((y + 0.5) * h) / sh | 0)
      const from = (sy * w + sx) * 4
      const to = (y * sw + x) * 4
      const red = src[from]!
      const green = src[from + 1]!
      const blue = src[from + 2]!
      const bright = luma(red, green, blue)
      const peak = Math.max(red, green, blue)
      const saturation = peak === 0 ? 0 : (peak - Math.min(red, green, blue)) / peak
      if (highlightsOnly && (bright < 140 || saturation < 0.22)) {
        small[to + 3] = 255
        continue
      }
      small[to] = src[from]!
      small[to + 1] = src[from + 1]!
      small[to + 2] = src[from + 2]!
      small[to + 3] = 255
    }
  }

  const blurred = boxBlur(small, sw, sh, Math.max(1, Math.round(radius / factor)))
  const full = new Uint8ClampedArray(w * h * 4)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const sx = ((x + 0.5) * sw) / w - 0.5
    const sy = ((y + 0.5) * sh) / h - 0.5
    sample(blurred, sw, sh, sx, sy, pixel)
    write(full, index, pixel.r, pixel.g, pixel.b)
  })
  return full
}

function boxBlur(
  src: Uint8ClampedArray,
  w: number,
  h: number,
  radius: number
) {
  const r = Math.max(1, radius)
  const horizontal = new Uint8ClampedArray(src.length)
  const vertical = new Uint8ClampedArray(src.length)

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let rs = 0
      let gs = 0
      let bs = 0
      let count = 0
      const x0 = Math.max(0, x - r)
      const x1 = Math.min(w - 1, x + r)
      for (let i = x0; i <= x1; i++) {
        const p = (y * w + i) * 4
        rs += src[p]!
        gs += src[p + 1]!
        bs += src[p + 2]!
        count++
      }
      const o = (y * w + x) * 4
      horizontal[o] = rs / count
      horizontal[o + 1] = gs / count
      horizontal[o + 2] = bs / count
      horizontal[o + 3] = 255
    }
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let rs = 0
      let gs = 0
      let bs = 0
      let count = 0
      const y0 = Math.max(0, y - r)
      const y1 = Math.min(h - 1, y + r)
      for (let i = y0; i <= y1; i++) {
        const p = (i * w + x) * 4
        rs += horizontal[p]!
        gs += horizontal[p + 1]!
        bs += horizontal[p + 2]!
        count++
      }
      const o = (y * w + x) * 4
      vertical[o] = rs / count
      vertical[o + 1] = gs / count
      vertical[o + 2] = bs / count
      vertical[o + 3] = 255
    }
  }

  return vertical
}

function distortion(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const { ax, ay, r, maxR, aspect } = centerOf(x, y, w, h)
    const k = 1 - t * 0.55 * (r / maxR) ** 2
    const [sx, sy] = fromPolar(ax * k, ay * k, w, h, aspect)
    sample(src, w, h, sx, sy, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function warp(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  remap(src, dst, w, h, (x, y) => [
    x + Math.sin(y * 0.018) * t * w * 0.045,
    y + Math.sin(x * 0.018) * t * h * 0.045,
  ])
}

function distort(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  remap(src, dst, w, h, (x, y) => [
    x + Math.sin(y * 0.05 + Math.sin(x * 0.02)) * t * 22 * s,
    y + Math.cos(x * 0.045) * t * 16 * s,
  ])
}

function wave(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  remap(src, dst, w, h, (x, y) => [
    x + Math.sin(y / (16 * s)) * t * 28 * s,
    y,
  ])
}

function ripple(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const cx = w / 2
  const cy = h / 2
  remap(src, dst, w, h, (x, y) => {
    const dx = x - cx
    const dy = y - cy
    const dist = Math.hypot(dx, dy) || 1
    const waveOffset = Math.sin(dist / (9 * s)) * t * 12 * s
    return [x + (dx / dist) * waveOffset, y + (dy / dist) * waveOffset]
  })
}

function fisheye(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const { ax, ay, r, maxR, aspect } = centerOf(x, y, w, h)
    const rn = Math.min(r / maxR, 1)
    const curve = 1 + t * 2.6
    const nr = (Math.atan(rn * curve) / Math.atan(curve)) * maxR
    const mixed = r * (1 - t) + nr * t
    const k = r < 0.0001 ? 1 : mixed / r
    const [sx, sy] = fromPolar(ax * k, ay * k, w, h, aspect)
    sample(src, w, h, sx, sy, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function spherize(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const { ax, ay, r, maxR, aspect } = centerOf(x, y, w, h)
    const rn = Math.min(r / maxR, 0.999)
    const nr = (Math.asin(rn) / (Math.PI / 2)) * maxR
    const mixed = r * (1 - t) + nr * t
    const k = r < 0.0001 ? 1 : mixed / r
    const [sx, sy] = fromPolar(ax * k, ay * k, w, h, aspect)
    sample(src, w, h, sx, sy, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function pinch(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    radialSample(src, w, h, x, y, t, 1 - t * 0.72, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function bulge(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    radialSample(src, w, h, x, y, t, 1 + t * 1.5, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function spin(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number,
  turns: number
) {
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const { ax, ay, r, maxR, aspect } = centerOf(x, y, w, h)
    const falloff = 1 - Math.min(1, r / maxR)
    const angle = falloff * falloff * t * Math.PI * turns
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const [sx, sy] = fromPolar(
      ax * cos - ay * sin,
      ax * sin + ay * cos,
      w,
      h,
      aspect
    )
    sample(src, w, h, sx, sy, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function bend(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  remap(src, dst, w, h, (x, y) => [
    x + Math.sin((y / h) * Math.PI) * t * w * 0.16,
    y,
  ])
}

function shear(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  remap(src, dst, w, h, (x, y) => [x + (y / h - 0.5) * t * w * 0.42, y])
}

function lensDistortion(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const red: Pixel = { r: 0, g: 0, b: 0 }
  const green: Pixel = { r: 0, g: 0, b: 0 }
  const blue: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const { ax, ay, r, maxR, aspect } = centerOf(x, y, w, h)
    const base = (r / maxR) ** 2
    const mapChannel = (strength: number) => {
      const k = 1 - t * strength * base
      return fromPolar(ax * k, ay * k, w, h, aspect)
    }
    const [rx, ry] = mapChannel(0.35)
    const [gx, gy] = mapChannel(0.5)
    const [bx, by] = mapChannel(0.68)
    sample(src, w, h, rx, ry, red)
    sample(src, w, h, gx, gy, green)
    sample(src, w, h, bx, by, blue)
    write(dst, index, red.r, green.g, blue.b)
  })
}

function glitch(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const band = Math.floor(y / Math.max(2, 7 * s))
    const active = hash2(band, 11) > 0.62
    const shift = active ? (hash2(band, 29) - 0.5) * t * 140 * s : 0
    sample(src, w, h, x + shift, y, pixel)
    let r = pixel.r
    let g = pixel.g
    let b = pixel.b
    if (active && hash2(band, 4) > 0.82) {
      r = mix(r, 255, 0.35 * t)
      b = mix(b, 40, 0.45 * t)
    }
    write(dst, index, r, g, b)
  })
}

function chromaticAberration(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  channelSplit(src, dst, w, h, (x, y) => {
    const dx = x / w - 0.5
    const dy = y / h - 0.5
    return Math.hypot(dx, dy) * t * 28 * s
  })
}

function scanlines(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = Math.max(1, Math.round(scaleOf(w, h)))
  eachPixel(w, h, (x, y, index) => {
    const line = Math.floor(y / s)
    const shade = line % 2 === 0 ? 1 - t * 0.62 : 1
    write(
      dst,
      index,
      src[index]! * shade,
      src[index + 1]! * shade,
      src[index + 2]! * shade
    )
  })
}

function pixelSort(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const span = Math.max(4, Math.round((8 + t * 42) * s))
  const order = new Array<number>(span)
  for (let y = 0; y < h; y++) {
    const row = y * w
    for (let start = 0; start < w; start += span) {
      const len = Math.min(span, w - start)
      for (let i = 0; i < len; i++) order[i] = i
      for (let i = 1; i < len; i++) {
        const current = order[i]!
        const currentLuma = lumaAt(src, row + start + current)
        let j = i - 1
        while (j >= 0 && lumaAt(src, row + start + order[j]!) > currentLuma) {
          order[j + 1] = order[j]!
          j--
        }
        order[j + 1] = current
      }
      for (let i = 0; i < len; i++) {
        const from = (row + start + order[i]!) * 4
        const to = (row + start + i) * 4
        dst[to] = src[from]!
        dst[to + 1] = src[from + 1]!
        dst[to + 2] = src[from + 2]!
        dst[to + 3] = 255
      }
    }
  }
}

function lumaAt(src: Uint8ClampedArray, pixelIndex: number) {
  const i = pixelIndex * 4
  return luma(src[i]!, src[i + 1]!, src[i + 2]!)
}

function pixelate(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const block = Math.max(2, Math.round((2 + t * 24) * Math.max(s, 0.35)))
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const sx = Math.floor(x / block) * block + block / 2
    const sy = Math.floor(y / block) * block + block / 2
    sample(src, w, h, sx, sy, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function datamosh(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const block = Math.max(6, Math.round(18 * Math.max(s, 0.45)))
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const bx = Math.floor(x / block)
    const by = Math.floor(y / block)
    const shift = hash2(bx, by) > 0.7
      ? (hash2(bx, by + 5) - 0.5) * t * block * 7
      : 0
    sample(src, w, h, x + shift, y + (hash2(bx + 2, by) - 0.5) * shift * 0.25, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function colorNoise(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const step = Math.max(1, Math.round(scaleOf(w, h)))
  eachPixel(w, h, (x, y, index) => {
    const cellX = Math.floor(x / step)
    const cellY = Math.floor(y / step)
    write(
      dst,
      index,
      mix(src[index]!, hash2(cellX, cellY) * 255, t * 0.75),
      mix(src[index + 1]!, hash2(cellX + 3, cellY) * 255, t * 0.75),
      mix(src[index + 2]!, hash2(cellX, cellY + 5) * 255, t * 0.75)
    )
  })
}

function staticNoise(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const step = Math.max(1, Math.round(scaleOf(w, h)))
  eachPixel(w, h, (x, y, index) => {
    const value = hash2(Math.floor(x / step), Math.floor(y / step)) * 255
    write(
      dst,
      index,
      mix(src[index]!, value, t * 0.8),
      mix(src[index + 1]!, value, t * 0.8),
      mix(src[index + 2]!, value, t * 0.8)
    )
  })
}

function digitalJitter(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const j = t * 7 * Math.max(s, 0.5)
    const sx = x + (hash2(x, y) - 0.5) * 2 * j
    const sy = y + (hash2(x + 4, y + 9) - 0.5) * 2 * j
    sample(src, w, h, sx, sy, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function vhs(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  const red: Pixel = { r: 0, g: 0, b: 0 }
  const blue: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const tracking = y > h * 0.42 && y < h * 0.5
    const roll = tracking ? t * 36 * s : Math.sin(y / (14 * s)) * t * 3 * s
    const split = t * 5 * s
    sample(src, w, h, x + roll - split, y, red)
    sample(src, w, h, x + roll, y, pixel)
    sample(src, w, h, x + roll + split, y, blue)
    const line = Math.floor(y / Math.max(1, s)) % 2 === 0 ? 1 - t * 0.35 : 1
    const grain = (hash2(x, y) - 0.5) * t * 30
    write(
      dst,
      index,
      red.r * line + grain,
      pixel.g * line + grain,
      blue.b * line + grain
    )
  })
}

function signalInterference(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const wobble = Math.sin(y / (5 * s)) * t * 22 * s
    sample(src, w, h, x + wobble, y, pixel)
    const bar = Math.sin(y / (7 * s))
    const flash = bar > 0.86 ? (bar - 0.86) * t * 900 : 0
    write(
      dst,
      index,
      pixel.r + flash,
      pixel.g + flash * 0.9,
      pixel.b + flash * 0.4
    )
  })
}

function bloom(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const glow = softImage(src, w, h, 6 + t * 16, true)
  eachPixel(w, h, (_x, _y, index) => {
    write(
      dst,
      index,
      src[index]! + glow[index]! * t * 1.4,
      src[index + 1]! + glow[index + 1]! * t * 1.4,
      src[index + 2]! + glow[index + 2]! * t * 1.4
    )
  })
}

function glow(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const blurred = softImage(src, w, h, 8 + t * 18)
  eachPixel(w, h, (_x, _y, index) => {
    write(
      dst,
      index,
      mix(src[index]!, screen(src[index]!, blurred[index]!), t * 0.85),
      mix(src[index + 1]!, screen(src[index + 1]!, blurred[index + 1]!), t * 0.85),
      mix(src[index + 2]!, screen(src[index + 2]!, blurred[index + 2]!), t * 0.85)
    )
  })
}

function lightLeak(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const leaks = [
    { x: w * 0.08, y: h * 0.18, rx: w * 0.42, ry: h * 0.55, r: 255, g: 120, b: 40 },
    { x: w * 0.92, y: h * 0.78, rx: w * 0.38, ry: h * 0.48, r: 255, g: 48, b: 140 },
    { x: w * 0.5, y: h * 0.08, rx: w * 0.7, ry: h * 0.28, r: 255, g: 210, b: 120 },
  ]
  eachPixel(w, h, (x, y, index) => {
    let r = src[index]!
    let g = src[index + 1]!
    let b = src[index + 2]!
    for (const leak of leaks) {
      const dx = (x - leak.x) / leak.rx
      const dy = (y - leak.y) / leak.ry
      const falloff = Math.exp(-(dx * dx + dy * dy) * 2.2) * t
      r = screen(r, leak.r * falloff)
      g = screen(g, leak.g * falloff)
      b = screen(b, leak.b * falloff)
    }
    write(dst, index, r, g, b)
  })
}

function lensFlare(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const lx = w * 0.76
  const ly = h * 0.22
  const orbs = [
    { p: 0, radius: 0.09, r: 255, g: 248, b: 220, gain: 0.95 },
    { p: 0.38, radius: 0.14, r: 110, g: 170, b: 255, gain: 0.4 },
    { p: 0.62, radius: 0.05, r: 255, g: 150, b: 70, gain: 0.5 },
    { p: -0.28, radius: 0.07, r: 190, g: 110, b: 255, gain: 0.38 },
    { p: 0.9, radius: 0.04, r: 255, g: 255, b: 255, gain: 0.45 },
  ]
  const size = Math.min(w, h)
  eachPixel(w, h, (x, y, index) => {
    let r = src[index]!
    let g = src[index + 1]!
    let b = src[index + 2]!
    for (const orb of orbs) {
      const ox = lx + (w / 2 - lx) * orb.p * 2
      const oy = ly + (h / 2 - ly) * orb.p * 2
      const dist = Math.hypot(x - ox, y - oy)
      const radius = orb.radius * size
      if (dist >= radius) continue
      const falloff = (1 - dist / radius) ** 2 * orb.gain * t
      r += orb.r * falloff
      g += orb.g * falloff
      b += orb.b * falloff
    }
    write(dst, index, r, g, b)
  })
}

function prism(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const shift = t * 10 * s
  const red: Pixel = { r: 0, g: 0, b: 0 }
  const green: Pixel = { r: 0, g: 0, b: 0 }
  const blue: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    sample(src, w, h, x - shift, y - shift * 0.6, red)
    sample(src, w, h, x, y, green)
    sample(src, w, h, x + shift, y + shift * 0.6, blue)
    write(dst, index, red.r, green.g, blue.b)
  })
}

function refraction(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const red: Pixel = { r: 0, g: 0, b: 0 }
  const green: Pixel = { r: 0, g: 0, b: 0 }
  const blue: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const dx = (noise2(x / (18 * s), y / (18 * s)) - 0.5) * t * 26 * s
    const dy = (noise2(x / (18 * s) + 4, y / (18 * s) + 2) - 0.5) * t * 26 * s
    const split = t * 3.5 * s
    sample(src, w, h, x + dx - split, y + dy, red)
    sample(src, w, h, x + dx, y + dy, green)
    sample(src, w, h, x + dx + split, y + dy, blue)
    write(dst, index, red.r, green.g, blue.b)
  })
}

function caustics(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const frequency = 0.045 / Math.max(s, 0.25)
  eachPixel(w, h, (x, y, index) => {
    const band = Math.sin(x * frequency) * Math.sin(y * frequency * 1.35)
    const band2 = Math.sin((x * 0.65 + y) * frequency * 1.5)
    const light = (band * band * 0.75 + band2 * band2 * 0.45) * t * 170
    write(
      dst,
      index,
      src[index]! + light,
      src[index + 1]! + light * 1.05,
      src[index + 2]! + light * 1.15
    )
  })
}

function rays(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number,
  originX: number,
  originY: number,
  alongX: boolean
) {
  const samples = 8
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    let r = src[index]!
    let g = src[index + 1]!
    let b = src[index + 2]!
    for (let i = 1; i <= samples; i++) {
      const k = (i / samples) * t
      const sx = alongX ? x - (x - originX) * k * 0.85 : x + (originX - x) * k * 0.55
      const sy = alongX ? y : y + (originY - y) * k * 0.55
      sample(src, w, h, sx, sy, pixel)
      const fadeAmount = (1 - i / samples) * 0.22 * t
      r += pixel.r * fadeAmount
      g += pixel.g * fadeAmount
      b += pixel.b * fadeAmount
    }
    write(dst, index, r, g, b)
  })
}

function chromaticDispersion(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const red: Pixel = { r: 0, g: 0, b: 0 }
  const green: Pixel = { r: 0, g: 0, b: 0 }
  const blue: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const { ax, ay, r, maxR, aspect } = centerOf(x, y, w, h)
    const shift = (r / maxR) * t * 0.18
    const [rx, ry] = fromPolar(ax * (1 - shift), ay * (1 - shift), w, h, aspect)
    const [bx, by] = fromPolar(ax * (1 + shift), ay * (1 + shift), w, h, aspect)
    sample(src, w, h, rx, ry, red)
    sample(src, w, h, x, y, green)
    sample(src, w, h, bx, by, blue)
    write(dst, index, red.r, green.g, blue.b)
  })
}

function zoomBlur(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const samples = 8
  const cx = w / 2
  const cy = h / 2
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    let r = 0
    let g = 0
    let b = 0
    for (let i = 0; i < samples; i++) {
      const k = 1 - (i / (samples - 1)) * t * 0.42
      sample(src, w, h, cx + (x - cx) * k, cy + (y - cy) * k, pixel)
      r += pixel.r
      g += pixel.g
      b += pixel.b
    }
    write(dst, index, r / samples, g / samples, b / samples)
  })
}

function radialBlur(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const samples = 7
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const { ax, ay, aspect } = centerOf(x, y, w, h)
    let r = 0
    let g = 0
    let b = 0
    for (let i = 0; i < samples; i++) {
      const angle = (i / (samples - 1) - 0.5) * t * 0.45
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const [sx, sy] = fromPolar(
        ax * cos - ay * sin,
        ax * sin + ay * cos,
        w,
        h,
        aspect
      )
      sample(src, w, h, sx, sy, pixel)
      r += pixel.r
      g += pixel.g
      b += pixel.b
    }
    write(dst, index, r / samples, g / samples, b / samples)
  })
}

function echo(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  const gap = t * 22 * s
  eachPixel(w, h, (x, y, index) => {
    let r = src[index]! * 0.55
    let g = src[index + 1]! * 0.55
    let b = src[index + 2]! * 0.55
    const weights = [0.25, 0.13, 0.07]
    for (let i = 0; i < weights.length; i++) {
      sample(src, w, h, x - gap * (i + 1), y - gap * 0.35 * (i + 1), pixel)
      r += pixel.r * weights[i]!
      g += pixel.g * weights[i]!
      b += pixel.b * weights[i]!
    }
    write(dst, index, r, g, b)
  })
}

function trails(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  const gap = t * 16 * s
  eachPixel(w, h, (x, y, index) => {
    let r = 0
    let g = 0
    let b = 0
    let weight = 0
    for (let i = 0; i < 6; i++) {
      const fadeAmount = 1 - i / 6
      sample(src, w, h, x - gap * i, y + gap * 0.45 * i, pixel)
      r += pixel.r * fadeAmount
      g += pixel.g * fadeAmount
      b += pixel.b * fadeAmount
      weight += fadeAmount
    }
    write(dst, index, r / weight, g / weight, b / weight)
  })
}

function stretch(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const cx = w / 2
  remap(src, dst, w, h, (x, y) => [cx + (x - cx) / (1 + t * 0.9), y])
}

function motionWarp(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  noiseShift(src, dst, w, h, t, 28, 70, 0.2, 1)
}

function waterRipple(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const centers = [
    [w * 0.35, h * 0.4],
    [w * 0.68, h * 0.58],
    [w * 0.52, h * 0.22],
  ]
  remap(src, dst, w, h, (x, y) => {
    let sx = x
    let sy = y
    for (const center of centers) {
      const dx = x - center[0]!
      const dy = y - center[1]!
      const dist = Math.hypot(dx, dy) || 1
      const waveOffset =
        Math.sin(dist / (8 * s)) * Math.exp(-dist / (140 * s)) * t * 16 * s
      sx += (dx / dist) * waveOffset
      sy += (dy / dist) * waveOffset
    }
    return [sx, sy]
  })
}

function fluidDistortion(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  remap(src, dst, w, h, (x, y) => {
    const warp = noise2(x / (36 * s), y / (36 * s))
    const dx = (noise2(x / (12 * s) + warp * 3, y / (12 * s)) - 0.5) * t * 48 * s
    const dy = (noise2(x / (12 * s), y / (12 * s) + warp * 3) - 0.5) * t * 48 * s
    return [x + dx, y + dy]
  })
}

function fluidFlow(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  remap(src, dst, w, h, (x, y) => {
    const angle = noise2(x / (70 * s), y / (70 * s)) * Math.PI * 2
    return [
      x + Math.cos(angle) * t * 36 * s,
      y + Math.sin(angle) * t * 24 * s,
    ]
  })
}

function inkSpread(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  const neighbor: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const dx = (noise2(x / (20 * s), y / (20 * s)) - 0.5) * t * 16 * s
    const dy = (noise2(x / (20 * s) + 2, y / (20 * s)) - 0.5) * t * 16 * s
    sample(src, w, h, x + dx, y + dy, pixel)
    sample(src, w, h, x + 3, y, neighbor)
    const edge = Math.abs(luma(pixel.r, pixel.g, pixel.b) - luma(neighbor.r, neighbor.g, neighbor.b)) / 255
    const dark = t * (0.18 + edge * 0.8)
    write(dst, index, pixel.r * (1 - dark), pixel.g * (1 - dark), pixel.b * (1 - dark * 0.7))
  })
}

function smoke(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  eachPixel(w, h, (x, y, index) => {
    const n = noise2(x / (26 * s), y / (14 * s))
    const veil = n ** 1.35 * t * 0.72
    write(
      dst,
      index,
      src[index]! * (1 - veil),
      src[index + 1]! * (1 - veil * 0.92),
      src[index + 2]! * (1 - veil * 0.75)
    )
  })
}

function fog(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  eachPixel(w, h, (x, y, index) => {
    const n = noise2(x / (48 * s), y / (32 * s))
    const veil = n * t * 0.62
    write(
      dst,
      index,
      screen(src[index]!, 235 * veil),
      screen(src[index + 1]!, 238 * veil),
      screen(src[index + 2]!, 242 * veil)
    )
  })
}

function melt(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  remap(src, dst, w, h, (x, y) => {
    const drip = (y / h) ** 1.15 * noise2(x / (18 * s), 2.2) * t * h * 0.38
    return [x + (noise2(x / (30 * s), y / h) - 0.5) * t * 8 * s, y - drip]
  })
}

function goo(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const blurred = softImage(src, w, h, 3 + t * 8)
  eachPixel(w, h, (_x, _y, index) => {
    const contrast = 1 + t * 2.1
    const channel = (value: number, soft: number) => {
      const mixed = mix(value, soft, 0.72)
      return (mixed - 128) * contrast + 128
    }
    write(
      dst,
      index,
      channel(src[index]!, blurred[index]!),
      channel(src[index + 1]!, blurred[index + 1]!),
      channel(src[index + 2]!, blurred[index + 2]!)
    )
  })
}

function droplet(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const cx = w * 0.46
  const cy = h * 0.42
  const radius = Math.min(w, h) * 0.28
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const dx = x - cx
    const dy = y - cy
    const dist = Math.hypot(dx, dy)
    if (dist >= radius || dist < 0.001) {
      write(dst, index, src[index]!, src[index + 1]!, src[index + 2]!)
      return
    }
    const rn = dist / radius
    const nr = Math.pow(rn, 1 + t * 1.3) * radius
    sample(src, w, h, cx + (dx / dist) * nr, cy + (dy / dist) * nr, pixel)
    write(dst, index, pixel.r, pixel.g, pixel.b)
  })
}

function drip(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  remap(src, dst, w, h, (x, y) => {
    const column = Math.floor(x / Math.max(4, 11 * s))
    const n = hash2(column, 17)
    if (n < 0.72) return [x, y]
    const length = ((n - 0.72) / 0.28) * t * (y / h) * h * 0.62
    return [x, y - length]
  })
}

function lavaFlow(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const n = noise2(x / (34 * s), y / (12 * s))
    sample(src, w, h, x + (n - 0.5) * t * 18 * s, y - n * t * 36 * s, pixel)
    const heat = n * t * 0.55
    write(
      dst,
      index,
      mix(pixel.r, 255, heat),
      mix(pixel.g, 64 + n * 90, heat),
      mix(pixel.b, 18, heat)
    )
  })
}

function grain(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const step = Math.max(1, Math.round(scaleOf(w, h)))
  eachPixel(w, h, (x, y, index) => {
    const n = (hash2(Math.floor(x / step), Math.floor(y / step)) - 0.5) * t * 110
    write(dst, index, src[index]! + n, src[index + 1]! + n, src[index + 2]! + n)
  })
}

function paperTexture(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = scaleOf(w, h)
  eachPixel(w, h, (x, y, index) => {
    const fiber =
      noise2(x / (2.2 * s), y / (9 * s)) * 0.65 +
      noise2(x / (14 * s), y / (3 * s)) * 0.35
    const shade = 1 - t * (0.18 - fiber * 0.28)
    write(
      dst,
      index,
      src[index]! * shade + 18 * t * fiber,
      src[index + 1]! * shade + 12 * t * fiber,
      src[index + 2]! * shade + 4 * t * fiber
    )
  })
}

function filmBurn(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  eachPixel(w, h, (x, y, index) => {
    const nx = x / w
    const ny = y / h
    const edge = Math.min(nx, 1 - nx, ny, 1 - ny) * 2
    const burn = (1 - edge ** 0.55) * t
    const spot = Math.exp(-Math.hypot(nx - 0.12, ny - 0.2) * 5.5) * t
    let r = screen(src[index]!, 255 * burn + 255 * spot)
    let g = screen(src[index + 1]!, 96 * burn + 170 * spot)
    let b = src[index + 2]! * (1 - burn * 0.45) + 40 * spot
    const corner = Math.hypot(nx - 0.5, ny - 0.5)
    const vignette = Math.min(1, Math.max(0, (corner - 0.35) * t))
    r *= 1 - vignette * 0.45
    g *= 1 - vignette * 0.45
    b *= 1 - vignette * 0.45
    write(dst, index, r, g, b)
  })
}

function scratches(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const step = Math.max(1, Math.round(scaleOf(w, h)))
  eachPixel(w, h, (x, y, index) => {
    const column = Math.floor(x / step)
    let r = src[index]!
    let g = src[index + 1]!
    let b = src[index + 2]!
    if (hash2(column, 91) > 0.972) {
      const gap = hash2(column, Math.floor(y / step))
      if (gap > 0.35) {
        const mark = 40 + gap * 215
        const amount = t * (gap > 0.7 ? 0.85 : 0.45)
        r = mix(r, mark, amount)
        g = mix(g, mark, amount)
        b = mix(b, mark, amount)
      }
    }
    write(dst, index, r, g, b)
  })
}

function dust(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const cell = Math.max(3, Math.round(5 * scaleOf(w, h)))
  eachPixel(w, h, (x, y, index) => {
    const cx = Math.floor(x / cell)
    const cy = Math.floor(y / cell)
    let r = src[index]!
    let g = src[index + 1]!
    let b = src[index + 2]!
    if (hash2(cx, cy) > 0.93) {
      const origin = (cell - 1) / 2
      const px = x - cx * cell - origin
      const py = y - cy * cell - origin
      const radius = Math.max(1.1, cell * 0.42)
      if (px * px + py * py <= radius * radius) {
        const speck = hash2(cx, cy + 2) > 0.5 ? 245 : 30
        r = mix(r, speck, t)
        g = mix(g, speck, t)
        b = mix(b, speck, t)
      }
    }
    write(dst, index, r, g, b)
  })
}

function halftone(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const s = Math.max(scaleOf(w, h), 0.45)
  const cell = Math.max(4, Math.round((5 + t * 9) * s))
  const pixel: Pixel = { r: 0, g: 0, b: 0 }
  eachPixel(w, h, (x, y, index) => {
    const cx = (Math.floor(x / cell) + 0.5) * cell
    const cy = (Math.floor(y / cell) + 0.5) * cell
    sample(src, w, h, cx, cy, pixel)
    const tone = luma(pixel.r, pixel.g, pixel.b) / 255
    const radius = (1 - tone) * cell * 0.52 * (0.35 + t)
    const dist = Math.hypot(x - cx, y - cy)
    if (dist < radius) {
      write(dst, index, pixel.r, pixel.g, pixel.b)
      return
    }
    write(
      dst,
      index,
      mix(pixel.r, 245, 0.82),
      mix(pixel.g, 245, 0.82),
      mix(pixel.b, 245, 0.82)
    )
  })
}

function dither(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const bayer = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ]
  const levels = Math.max(2, Math.round(7 - t * 5))
  const step = 255 / (levels - 1)
  const cell = Math.max(1, Math.round(scaleOf(w, h)))
  eachPixel(w, h, (x, y, index) => {
    const threshold =
      ((bayer[Math.floor(y / cell) % 4]![Math.floor(x / cell) % 4]! / 16) - 0.5) *
      step
    const quantize = (value: number) => Math.round((value + threshold) / step) * step
    write(
      dst,
      index,
      quantize(src[index]!),
      quantize(src[index + 1]!),
      quantize(src[index + 2]!)
    )
  })
}

function emboss(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  eachPixel(w, h, (x, y, index) => {
    const x0 = Math.max(0, x - 1)
    const y0 = Math.max(0, y - 1)
    const x1 = Math.min(w - 1, x + 1)
    const y1 = Math.min(h - 1, y + 1)
    const a = (y0 * w + x0) * 4
    const b = (y1 * w + x1) * 4
    const relief =
      (luma(src[a]!, src[a + 1]!, src[a + 2]!) -
        luma(src[b]!, src[b + 1]!, src[b + 2]!)) *
      t *
      1.6
    write(
      dst,
      index,
      src[index]! * (1 - t * 0.45) + 128 * t * 0.45 + relief,
      src[index + 1]! * (1 - t * 0.45) + 128 * t * 0.45 + relief,
      src[index + 2]! * (1 - t * 0.45) + 128 * t * 0.45 + relief
    )
  })
}

function posterize(
  src: Uint8ClampedArray,
  dst: Uint8ClampedArray,
  w: number,
  h: number,
  t: number
) {
  const levels = Math.max(2, Math.round(8 - t * 6))
  const step = 255 / (levels - 1)
  eachPixel(w, h, (_x, _y, index) => {
    const quantize = (value: number) => Math.round(value / step) * step
    write(
      dst,
      index,
      quantize(src[index]!),
      quantize(src[index + 1]!),
      quantize(src[index + 2]!)
    )
  })
}

function defineEffect(
  category: EffectCategory,
  name: string,
  apply: EffectApply,
  id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
): GradientEffect & { apply: EffectApply } {
  return { id, name, category, apply }
}

const EFFECT_LIST = [
  defineEffect("distortion", "Distortion", distortion),
  defineEffect("distortion", "Warp", warp),
  defineEffect("distortion", "Turbulence", (src, dst, w, h, t) => noiseShift(src, dst, w, h, t, 22, 64)),
  defineEffect("distortion", "Displacement", (src, dst, w, h, t) => noiseShift(src, dst, w, h, t, 54, 110)),
  defineEffect("distortion", "Distort", distort),
  defineEffect("distortion", "Wave", wave),
  defineEffect("distortion", "Ripple", ripple),
  defineEffect("distortion", "Fisheye", fisheye),
  defineEffect("distortion", "Spherize", spherize),
  defineEffect("distortion", "Pinch", pinch),
  defineEffect("distortion", "Bulge", bulge),
  defineEffect("distortion", "Twist", (src, dst, w, h, t) => spin(src, dst, w, h, t, 2.4)),
  defineEffect("distortion", "Bend", bend),
  defineEffect("distortion", "Shear", shear),
  defineEffect("distortion", "Swirl", (src, dst, w, h, t) => spin(src, dst, w, h, t, 5.2)),
  defineEffect("distortion", "Lens Distortion", lensDistortion),
  defineEffect("distortion", "Glass Distortion", (src, dst, w, h, t) => noiseShift(src, dst, w, h, t, 7, 18)),
  defineEffect("distortion", "Heat Haze", (src, dst, w, h, t) => noiseShift(src, dst, w, h, t, 16, 34, 1.6, 0.25)),
  defineEffect("distortion", "Liquid Warp", (src, dst, w, h, t) => noiseShift(src, dst, w, h, t, 90, 80)),
  defineEffect("distortion", "Fluid Distortion", fluidDistortion),
  defineEffect("glitch", "Glitch", glitch),
  defineEffect("glitch", "RGB Split", (src, dst, w, h, t) => {
    const s = scaleOf(w, h)
    channelSplit(src, dst, w, h, () => t * 16 * Math.max(s, 0.45))
  }),
  defineEffect("glitch", "Chromatic Aberration", chromaticAberration),
  defineEffect("glitch", "Scanlines", scanlines),
  defineEffect("glitch", "Pixel Sort", pixelSort),
  defineEffect("glitch", "Pixelate", pixelate),
  defineEffect("glitch", "Datamosh", datamosh),
  defineEffect("glitch", "Noise", colorNoise),
  defineEffect("glitch", "Static", staticNoise),
  defineEffect("glitch", "Digital Jitter", digitalJitter),
  defineEffect("glitch", "VHS", vhs),
  defineEffect("glitch", "Signal Interference", signalInterference),
  defineEffect("light", "Bloom", bloom),
  defineEffect("light", "Glow", glow),
  defineEffect("light", "Light Leak", lightLeak),
  defineEffect("light", "Lens Flare", lensFlare),
  defineEffect("light", "Prism", prism),
  defineEffect("light", "Refraction", refraction),
  defineEffect("light", "Caustics", caustics),
  defineEffect("light", "God Rays", (src, dst, w, h, t) => rays(src, dst, w, h, t, w * 0.5, h * 0.08, false)),
  defineEffect("light", "Light Rays", (src, dst, w, h, t) => rays(src, dst, w, h, t, 0, h * 0.5, true)),
  defineEffect("light", "Chromatic Dispersion", chromaticDispersion),
  defineEffect("motion", "Motion Blur", (src, dst, w, h, t) => directionalBlur(src, dst, w, h, t, 0, 34, 7, false)),
  defineEffect("motion", "Directional Blur", (src, dst, w, h, t) => directionalBlur(src, dst, w, h, t, 0.55, 30, 7, false)),
  defineEffect("motion", "Radial Blur", radialBlur),
  defineEffect("motion", "Zoom Blur", zoomBlur),
  defineEffect("motion", "Echo", echo),
  defineEffect("motion", "Trails", trails),
  defineEffect("motion", "Smear", (src, dst, w, h, t) => directionalBlur(src, dst, w, h, t, 0.15, 48, 8, true)),
  defineEffect("motion", "Stretch", stretch),
  defineEffect("motion", "Motion Warp", motionWarp),
  defineEffect("organic", "Liquid", (src, dst, w, h, t) => noiseShift(src, dst, w, h, t, 48, 56, 1.35, 1)),
  defineEffect("organic", "Water Ripple", waterRipple),
  defineEffect("organic", "Fluid Flow", fluidFlow),
  defineEffect("organic", "Ink Spread", inkSpread),
  defineEffect("organic", "Smoke", smoke),
  defineEffect("organic", "Fog", fog),
  defineEffect("organic", "Melt", melt),
  defineEffect("organic", "Goo", goo),
  defineEffect("organic", "Droplet", droplet),
  defineEffect("organic", "Drip", drip),
  defineEffect("organic", "Lava Flow", lavaFlow),
  defineEffect("texture", "Grain", grain),
  defineEffect("texture", "Noise", colorNoise, "surface-noise"),
  defineEffect("texture", "Grain Distortion", (src, dst, w, h, t) => noiseShift(src, dst, w, h, t, 5, 10)),
  defineEffect("texture", "Paper Texture", paperTexture),
  defineEffect("texture", "Film Burn", filmBurn),
  defineEffect("texture", "Scratches", scratches),
  defineEffect("texture", "Dust", dust),
  defineEffect("texture", "Halftone", halftone),
  defineEffect("texture", "Dither", dither),
  defineEffect("texture", "Emboss", emboss),
  defineEffect("texture", "Posterize", posterize),
]

const EFFECTS_BY_ID = new Map(EFFECT_LIST.map((effect) => [effect.id, effect]))

export const GRADIENT_EFFECTS: GradientEffect[] = EFFECT_LIST.map(
  ({ id, name, category }) => ({ id, name, category })
)

export function applyGradientEffect(
  image: { data: Uint8ClampedArray; width: number; height: number },
  effectId: string,
  amount: number
) {
  const effect = EFFECTS_BY_ID.get(effectId)
  if (!effect || amount <= 0 || image.width < 1 || image.height < 1) return

  const src = new Uint8ClampedArray(image.data)
  effect.apply(
    src,
    image.data,
    image.width,
    image.height,
    Math.min(1, amount / 100)
  )
}

export function effectExportNote(effectId: string, amount: number) {
  const effect = EFFECTS_BY_ID.get(effectId)
  if (!effect || amount <= 0) return ""
  return `/* ${effect.name} ${Math.round(amount)}% is included in the JPG export */\n`
}
