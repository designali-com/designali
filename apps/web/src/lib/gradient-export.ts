import { renderGradientCanvas } from "@/src/lib/gradient-render"
import {
  GIF_FPS,
  MP4_FPS,
  MotionStyle,
  GradientExportFormat,
  applyTextMask,
  followsPointer,
  loopPointer,
  motionPose,
} from "@/src/lib/gradient-motion"
import { Point } from "@/src/types/gradient"

const BAYER_4 = [
  0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5,
]

export interface GradientAnimationExport {
  format: GradientExportFormat
  base: string
  points: Point[]
  blur: number
  noise: number
  effectId: string
  effectAmount: number
  width: number
  height: number
  pixelScale: number
  motionStyle: MotionStyle
  travel: number
  loopSeconds: number
  onProgress: (progress: number) => void
  shouldContinue?: () => boolean
}

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

function frameCount(loopSeconds: number, fps: number) {
  return Math.max(fps, Math.round(loopSeconds * fps))
}

/** Stable ordered dither so GIF gradients don't posterize or flicker. */
function orderedDither(
  data: Uint8ClampedArray,
  width: number,
  height: number
) {
  const strength = 28
  for (let y = 0; y < height; y++) {
    const row = (y & 3) * 4
    for (let x = 0; x < width; x++) {
      const offset = (BAYER_4[row + (x & 3)]! / 16 - 0.5) * strength
      const index = (y * width + x) * 4
      data[index] = data[index]! + offset
      data[index + 1] = data[index + 1]! + offset
      data[index + 2] = data[index + 2]! + offset
    }
  }
}

async function paintFrame(
  ctx: CanvasRenderingContext2D,
  options: GradientAnimationExport,
  progress: number
) {
  const pose = motionPose(
    options.points,
    options.blur,
    progress,
    options.motionStyle,
    options.travel,
    followsPointer(options.motionStyle) ? loopPointer(progress) : null
  )

  await renderGradientCanvas(ctx, {
    base: options.base,
    points: pose.points,
    blur: pose.blur,
    noise: options.noise,
    effectId: options.effectId,
    effectAmount: options.effectAmount,
    width: options.width,
    height: options.height,
    pixelScale: options.pixelScale,
  })

  if (options.motionStyle === "text") {
    applyTextMask(ctx, options.width, options.height, options.base)
  }
}

async function exportGif(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  options: GradientAnimationExport
) {
  const { GIFEncoder, quantize, applyPalette } = await import("gifenc")
  const gif = GIFEncoder()
  const frames = frameCount(options.loopSeconds, GIF_FPS)
  const delayMs = Math.round(1000 / GIF_FPS / 10) * 10
  let palette: number[][] | null = null

  for (let index = 0; index < frames; index++) {
    if (options.shouldContinue && !options.shouldContinue()) return

    await paintFrame(ctx, options, index / frames)
    const image = ctx.getImageData(0, 0, canvas.width, canvas.height)
    orderedDither(image.data, canvas.width, canvas.height)

    if (!palette) {
      palette = quantize(image.data, 256)
      if (palette.length < 2) {
        throw new Error("Couldn't build a GIF palette for this gradient.")
      }
    }

    const indexed = applyPalette(image.data, palette)
    gif.writeFrame(indexed, canvas.width, canvas.height, {
      delay: delayMs,
      ...(index === 0 ? { palette, repeat: 0 } : {}),
    })

    options.onProgress((index + 1) / frames)
    await delay(0)
  }

  if (options.shouldContinue && !options.shouldContinue()) return

  gif.finish()
  const bytes = gif.bytes()
  downloadBlob(
    new Blob([bytes], { type: "image/gif" }),
    `mesh-gradient-${canvas.width}x${canvas.height}.gif`
  )
}

async function exportMp4(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  options: GradientAnimationExport
) {
  const {
    BufferTarget,
    CanvasSource,
    Mp4OutputFormat,
    Output,
    Quality,
    getFirstEncodableVideoCodec,
  } = await import("mediabunny")

  const bitrate = Math.min(
    8_000_000,
    Math.max(1_200_000, Math.round(canvas.width * canvas.height * 5))
  )
  const codec = await getFirstEncodableVideoCodec(["avc", "hevc", "av1"], {
    width: canvas.width,
    height: canvas.height,
    frameRate: MP4_FPS,
    bitrate,
  })

  if (!codec) {
    throw new Error("This browser can't encode MP4. Try GIF instead.")
  }

  const output = new Output({
    format: new Mp4OutputFormat({ fastStart: "in-memory" }),
    target: new BufferTarget(),
  })
  const source = new CanvasSource(canvas, {
    codec,
    quality: new Quality({ bitrate }),
    latencyMode: "quality",
    hardwareAcceleration: "no-preference",
    keyFrameInterval: 1,
  })

  output.addVideoTrack(source, { frameRate: MP4_FPS })
  await output.start()

  const frames = frameCount(options.loopSeconds, MP4_FPS)
  const frameDuration = 1 / MP4_FPS

  try {
    for (let index = 0; index < frames; index++) {
      if (options.shouldContinue && !options.shouldContinue()) {
        await output.cancel()
        return
      }

      await paintFrame(ctx, options, index / frames)
      await source.add(index * frameDuration, frameDuration, {
        keyFrame: index % MP4_FPS === 0,
      })
      options.onProgress((index + 1) / frames)
      await delay(0)
    }

    await output.finalize()
  } catch (error) {
    if (output.state !== "finalized" && output.state !== "canceled") {
      await output.cancel()
    }
    throw error
  }

  const buffer = output.target.buffer
  if (!buffer) {
    throw new Error("MP4 export produced an empty file.")
  }

  downloadBlob(
    new Blob([buffer], { type: "video/mp4" }),
    `mesh-gradient-${canvas.width}x${canvas.height}.mp4`
  )
}

export async function exportGradientAnimation(options: GradientAnimationExport) {
  if (options.width < 2 || options.height < 2) {
    throw new Error("Export size is too small.")
  }

  const canvas = document.createElement("canvas")
  canvas.width = options.width
  canvas.height = options.height
  const ctx = canvas.getContext("2d", { willReadFrequently: true })
  if (!ctx) {
    throw new Error("Couldn't start the export.")
  }

  if (options.format === "gif") {
    await exportGif(ctx, canvas, options)
    return
  }

  await exportMp4(ctx, canvas, options)
}
