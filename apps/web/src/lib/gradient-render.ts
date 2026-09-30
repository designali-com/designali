import { applyGradientEffect } from "@/src/lib/gradient-effects"
import {
  GRADIENT_RADIUS,
  NOISE_DATA_URI,
  NOISE_TILE_SIZE,
  Point,
  hexToRgba,
} from "@/src/types/gradient"

const MAX_EFFECT_EDGE = 1920

export interface GradientRenderOptions {
  base: string
  points: Point[]
  blur: number
  noise: number
  effectId: string
  effectAmount: number
  width: number
  height: number
  pixelScale: number
}

let noiseImage: HTMLImageElement | null = null
let noiseImageBlank = false
let noiseImagePromise: Promise<HTMLImageElement | null> | null = null
let proceduralTile: HTMLCanvasElement | null = null

function loadNoiseImage() {
  if (noiseImage) return Promise.resolve(noiseImage)
  if (!noiseImagePromise) {
    noiseImagePromise = new Promise((resolve) => {
      const image = new Image()
      image.onload = () => {
        noiseImage = image
        resolve(image)
      }
      image.onerror = () => resolve(null)
      image.src = NOISE_DATA_URI
    })
  }
  return noiseImagePromise
}

function proceduralNoiseTile(size: number) {
  if (proceduralTile?.width === size) return proceduralTile
  const tile = document.createElement("canvas")
  tile.width = size
  tile.height = size
  const tileCtx = tile.getContext("2d")
  if (!tileCtx) return null
  const image = tileCtx.createImageData(size, size)
  const data = image.data
  for (let i = 0; i < data.length; i += 4) {
    const value = (Math.random() * 255) | 0
    data[i] = value
    data[i + 1] = value
    data[i + 2] = value
    data[i + 3] = 255
  }
  tileCtx.putImageData(image, 0, 0)
  proceduralTile = tile
  return tile
}

function paintNoise(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  amount: number,
  tileSize: number
) {
  if (amount <= 0) return

  const size = Math.max(32, Math.round(tileSize))
  const tile = document.createElement("canvas")
  tile.width = size
  tile.height = size
  const tileCtx = tile.getContext("2d")
  if (!tileCtx) return

  if (noiseImage && !noiseImageBlank) {
    tileCtx.drawImage(noiseImage, 0, 0, size, size)
    const probe = tileCtx.getImageData(0, 0, 1, 1).data[3] ?? 0
    if (probe === 0) noiseImageBlank = true
  }

  if (!noiseImage || noiseImageBlank) {
    const fallback = proceduralNoiseTile(size)
    if (!fallback) return
    tileCtx.clearRect(0, 0, size, size)
    tileCtx.drawImage(fallback, 0, 0, size, size)
  }

  const pattern = ctx.createPattern(tile, "repeat")
  if (!pattern) return

  ctx.save()
  ctx.filter = "none"
  ctx.globalAlpha = amount / 100
  ctx.globalCompositeOperation = "overlay"
  ctx.fillStyle = pattern
  ctx.fillRect(0, 0, width, height)
  ctx.restore()
}

function paintGradients(
  ctx: CanvasRenderingContext2D,
  points: Point[],
  width: number,
  height: number
) {
  for (let index = points.length - 1; index >= 0; index--) {
    const point = points[index]!
    const cx = (point.x / 100) * width
    const cy = (point.y / 100) * height
    const farthest = Math.max(
      Math.hypot(cx, cy),
      Math.hypot(width - cx, cy),
      Math.hypot(cx, height - cy),
      Math.hypot(width - cx, height - cy)
    )
    const radius = Math.max((farthest * GRADIENT_RADIUS) / 100, 1)
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
    gradient.addColorStop(0, hexToRgba(point.color, 1))
    gradient.addColorStop(1, hexToRgba(point.color, 0))
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }
}

function fitEffectSize(width: number, height: number, effectId: string) {
  if (effectId === "none") return { width, height }
  const longEdge = Math.max(width, height)
  if (longEdge <= MAX_EFFECT_EDGE) return { width, height }
  const scale = MAX_EFFECT_EDGE / longEdge
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  }
}

function paintMesh(
  ctx: CanvasRenderingContext2D,
  options: GradientRenderOptions,
  width: number,
  height: number,
  pixelScale: number
) {
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.filter = "none"
  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = "source-over"
  ctx.fillStyle = options.base
  ctx.fillRect(0, 0, width, height)

  const layer = document.createElement("canvas")
  layer.width = width
  layer.height = height
  const layerCtx = layer.getContext("2d")
  if (!layerCtx) return

  paintGradients(layerCtx, options.points, width, height)

  const exportBlur = options.blur > 0 ? options.blur * pixelScale : 0
  if (exportBlur > 0) ctx.filter = `blur(${exportBlur}px)`
  ctx.drawImage(layer, 0, 0)
  ctx.filter = "none"

  if (options.effectId !== "none" && options.effectAmount > 0) {
    const image = ctx.getImageData(0, 0, width, height)
    applyGradientEffect(image, options.effectId, options.effectAmount)
    ctx.putImageData(image, 0, 0)
  }
}

export async function renderGradientCanvas(
  ctx: CanvasRenderingContext2D,
  options: GradientRenderOptions,
  isCurrent: () => boolean = () => true
) {
  const { width, height } = options
  if (width < 1 || height < 1) return

  const fitted = fitEffectSize(width, height, options.effectId)
  const direct = fitted.width === width && fitted.height === height
  const buffer = direct ? ctx : createBuffer(fitted.width, fitted.height)
  const fittedScale = options.pixelScale * (fitted.width / width)

  paintMesh(buffer, options, fitted.width, fitted.height, fittedScale)
  if (!isCurrent()) return

  if (!direct) {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.filter = "none"
    ctx.globalAlpha = 1
    ctx.globalCompositeOperation = "source-over"
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"
    ctx.drawImage(buffer.canvas, 0, 0, width, height)
  }

  if (!isCurrent()) return

  if (options.noise > 0 && !noiseImage) {
    await loadNoiseImage()
    if (!isCurrent()) return
  }

  paintNoise(
    ctx,
    width,
    height,
    options.noise,
    NOISE_TILE_SIZE * options.pixelScale
  )
}

function createBuffer(width: number, height: number) {
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext("2d", { willReadFrequently: true })
  if (!context) {
    throw new Error("Could not create a gradient buffer")
  }
  return context
}
