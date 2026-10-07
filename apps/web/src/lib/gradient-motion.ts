import { Point } from "@/src/types/gradient"

export const MOTION_STYLES = [
  { id: "still", label: "Still" },
  { id: "shift", label: "Shift" },
  { id: "flow", label: "Flow" },
  { id: "sweep", label: "Sweep" },
  { id: "rotate", label: "Rotate" },
  { id: "morph", label: "Morph" },
  { id: "mesh", label: "Mesh" },
  { id: "aurora", label: "Aurora" },
  { id: "blob", label: "Blob" },
  { id: "liquid", label: "Liquid" },
  { id: "noise", label: "Noise" },
  { id: "distortion", label: "Distortion" },
  { id: "shimmer", label: "Shimmer" },
  { id: "glow", label: "Glow" },
  { id: "pulse", label: "Pulse" },
  { id: "wave", label: "Wave" },
  { id: "orb", label: "Orb" },
  { id: "cursor", label: "Cursor" },
  { id: "hover", label: "Hover" },
  { id: "text", label: "Text" },
] as const

export type MotionStyle = (typeof MOTION_STYLES)[number]["id"]

export type GradientExportFormat = "gif" | "mp4"

export type GradientExportJob = {
  format: GradientExportFormat
  progress: number
}

export interface MotionPointer {
  x: number
  y: number
}

const MOTION_COPY: Record<MotionStyle, string> = {
  still: "Choose a motion to export GIF or MP4.",
  shift: "Colors slide together, then return.",
  flow: "Each color drifts on its own path.",
  sweep: "A wash travels across the frame.",
  rotate: "Colors turn around the center.",
  morph: "Pins blend into a new layout, then back.",
  mesh: "The field bends like a soft grid.",
  aurora: "Wide ribbons drift sideways.",
  blob: "Colors swell and shrink.",
  liquid: "Colors fold along slow liquid paths.",
  noise: "Irregular motion that still loops.",
  distortion: "Colors pull toward a moving point.",
  shimmer: "A small, quick wobble.",
  glow: "Softness swells, then settles.",
  pulse: "The field beats outward from the center.",
  wave: "Colors rise and fall in a wave.",
  orb: "Each color circles its pin.",
  cursor: "Colors follow the pointer. Export rides a loop.",
  hover: "Nearby colors lean toward the pointer.",
  text: "The moving gradient fills a word.",
}

export const GIF_FPS = 10
export const MP4_FPS = 24
export const GIF_MAX_EDGE = 640
export const MP4_MAX_EDGE = 1280

const PHASE = 2.399963229728653

export function isMotionStyle(value: string): value is MotionStyle {
  return MOTION_STYLES.some((style) => style.id === value)
}

export function motionLabel(style: MotionStyle) {
  return MOTION_STYLES.find((item) => item.id === style)?.label ?? "Still"
}

export function motionDescription(style: MotionStyle) {
  return MOTION_COPY[style]
}

export function followsPointer(style: MotionStyle) {
  return style === "cursor" || style === "hover"
}

/** Closed path used when Cursor or Hover has no live pointer, including export. */
export function loopPointer(progress: number): MotionPointer {
  const turn = progress * Math.PI * 2
  return {
    x: 50 + Math.cos(turn) * 30,
    y: 50 + Math.sin(turn) * 22,
  }
}

/** Even export size, capped so GIF and MP4 stay small enough to encode in the browser. */
export function animationExportSize(
  width: number,
  height: number,
  format: GradientExportFormat
) {
  const maxEdge = format === "gif" ? GIF_MAX_EDGE : MP4_MAX_EDGE
  const longEdge = Math.max(width, height)
  const scale = longEdge > maxEdge ? maxEdge / longEdge : 1
  const even = (value: number) => {
    const rounded = Math.max(2, Math.round(value * scale))
    return rounded % 2 === 0 ? rounded : rounded - 1
  }

  return { width: even(width), height: even(height) }
}

function loopNoise(seed: number, turn: number) {
  return (
    Math.sin(turn + seed) * 0.62 +
    Math.sin(turn * 2 + seed * 1.7) * 0.28 +
    Math.sin(turn * 3 + seed * 2.4) * 0.1
  )
}

/**
 * One frame of a seamless loop. Progress 0 and 1 land on the same pose.
 */
export function motionPose(
  points: Point[],
  blur: number,
  progress: number,
  style: MotionStyle,
  travel: number,
  pointer?: MotionPointer | null
): { points: Point[]; blur: number } {
  if (style === "still" || travel <= 0) return { points, blur }

  const turn = progress * Math.PI * 2
  const reach = (travel / 100) * 20
  const amount = travel / 100
  const focus = followsPointer(style) ? (pointer ?? loopPointer(progress)) : null

  let nextBlur = blur

  const next = points.map((point, index) => {
    const phase = index * PHASE
    let x = point.x
    let y = point.y

    switch (style) {
      case "shift":
      case "text": {
        x += Math.sin(turn) * reach
        y += Math.cos(turn) * reach * 0.38
        break
      }
      case "flow": {
        x += Math.sin(turn + phase) * reach + Math.cos(turn * 2 + phase) * reach * 0.34
        y += Math.cos(turn + phase) * reach * 0.78 + Math.sin(turn * 2 + phase) * reach * 0.28
        break
      }
      case "sweep": {
        x += Math.sin(turn) * reach * 1.7
        y += Math.sin(turn * 2 + point.x * 0.05) * reach * 0.16
        break
      }
      case "rotate": {
        const dx = point.x - 50
        const dy = point.y - 50
        const cos = Math.cos(turn)
        const sin = Math.sin(turn)
        const spunX = 50 + dx * cos - dy * sin
        const spunY = 50 + dx * sin + dy * cos
        x = point.x + (spunX - point.x) * amount
        y = point.y + (spunY - point.y) * amount
        break
      }
      case "morph": {
        const wave = 0.5 - 0.5 * Math.cos(turn)
        const altX = point.y
        const altY = 100 - point.x
        x = point.x + (altX - point.x) * wave * amount
        y = point.y + (altY - point.y) * wave * amount
        break
      }
      case "mesh": {
        x += Math.sin(turn + point.y * 0.08 + phase) * reach
        y += Math.sin(turn + point.x * 0.08 + phase * 0.8) * reach
        break
      }
      case "aurora": {
        x += Math.sin(turn + phase) * reach * 1.45
        y += Math.sin(turn * 2 + phase) * reach * 0.2
        break
      }
      case "blob": {
        const scale = 1 + Math.sin(turn + phase) * (reach / 36)
        x = 50 + (point.x - 50) * scale
        y = 50 + (point.y - 50) * scale
        break
      }
      case "liquid": {
        x +=
          Math.sin(turn + phase) * reach * 1.15 +
          Math.sin(turn * 2 + phase) * reach * 0.42
        y +=
          Math.cos(turn + phase * 0.7) * reach +
          Math.cos(turn * 3 + phase) * reach * 0.22
        break
      }
      case "noise": {
        x += loopNoise(phase, turn) * reach * 1.15
        y += loopNoise(phase + 4.2, turn) * reach * 1.15
        break
      }
      case "distortion": {
        const cx = 50 + Math.cos(turn) * 26
        const cy = 50 + Math.sin(turn) * 18
        const pull = amount * (0.15 + 0.45 * (0.5 - 0.5 * Math.cos(turn)))
        x = point.x + (cx - point.x) * pull
        y = point.y + (cy - point.y) * pull
        break
      }
      case "shimmer": {
        x += Math.sin(turn * 4 + phase) * reach * 0.2
        y += Math.cos(turn * 4 + phase) * reach * 0.2
        break
      }
      case "glow": {
        const wave = 0.5 - 0.5 * Math.cos(turn)
        const scale = 1 + wave * (reach / 30)
        x = 50 + (point.x - 50) * scale
        y = 50 + (point.y - 50) * scale
        break
      }
      case "pulse": {
        const wave = 0.5 - 0.5 * Math.cos(turn * 2)
        const scale = 1 + wave * (reach / 18)
        x = 50 + (point.x - 50) * scale
        y = 50 + (point.y - 50) * scale
        break
      }
      case "wave": {
        y += Math.sin(turn + point.x * 0.09) * reach
        x += Math.sin(turn * 2 + point.y * 0.04) * reach * 0.18
        break
      }
      case "orb": {
        x += Math.cos(turn + phase) * reach * 0.8
        y += Math.sin(turn + phase) * reach * 0.8
        break
      }
      case "cursor": {
        if (!focus) break
        x = point.x + (focus.x - point.x) * amount * 0.62
        y = point.y + (focus.y - point.y) * amount * 0.62
        break
      }
      case "hover": {
        if (!focus) break
        const dx = focus.x - point.x
        const dy = focus.y - point.y
        const influence = Math.exp(-Math.hypot(dx, dy) / 26) * amount
        x = point.x + dx * influence * 0.7
        y = point.y + dy * influence * 0.7
        break
      }
      default:
        break
    }

    return { ...point, x, y }
  })

  if (style === "shimmer") {
    nextBlur = blur * (1 + Math.sin(turn * 4) * 0.12 * amount)
  } else if (style === "glow") {
    const wave = 0.5 - 0.5 * Math.cos(turn)
    nextBlur = blur * (1 + wave * 0.9 * amount)
  } else if (style === "text") {
    nextBlur = blur * 0.35
  }

  return { points: next, blur: nextBlur }
}

/** Keeps the gradient inside the word and fills the rest with the base color. */
export function applyTextMask(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  base: string
) {
  const snapshot = document.createElement("canvas")
  snapshot.width = width
  snapshot.height = height
  const snap = snapshot.getContext("2d")
  if (!snap) return

  snap.drawImage(ctx.canvas, 0, 0)
  snap.globalCompositeOperation = "destination-in"
  const size = Math.round(Math.min(width * 0.16, height * 0.42))
  snap.font = `600 ${size}px ui-sans-serif, system-ui, sans-serif`
  snap.textAlign = "center"
  snap.textBaseline = "middle"
  snap.fillStyle = "#fff"
  snap.fillText("Gradient", width / 2, height / 2)

  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.filter = "none"
  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = "source-over"
  ctx.fillStyle = base
  ctx.fillRect(0, 0, width, height)
  ctx.drawImage(snapshot, 0, 0)
}
