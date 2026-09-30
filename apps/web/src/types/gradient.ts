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

/** Seamless fractal-noise tile used for the grain overlay. */
export const NOISE_TILE_SIZE = 180

const NOISE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="${NOISE_TILE_SIZE}" height="${NOISE_TILE_SIZE}"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`

export const NOISE_DATA_URI = `data:image/svg+xml,${encodeURIComponent(NOISE_SVG)}`

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
