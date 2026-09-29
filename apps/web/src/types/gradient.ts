export interface Point {
  id: number
  x: number
  y: number
  color: string
}

export interface SizeOption {
  label: string
  w: number
  h: number
}

/** Fade distance as a percent of the farthest corner. Softness comes from blur. */
export const GRADIENT_RADIUS = 62

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "")
  const bigint = parseInt(cleanHex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function randHex() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`
}

export function generateLayers(points: Point[]): string[] {
  return points.map(
    (point) =>
      `radial-gradient(circle at ${point.x}% ${point.y}%, ${point.color} 0%, transparent ${GRADIENT_RADIUS}%)`
  )
}
