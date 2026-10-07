"use client"

import React, { useEffect, useLayoutEffect, useRef } from "react"

import { renderGradientCanvas } from "@/src/lib/gradient-render"
import {
  MotionPointer,
  MotionStyle,
  applyTextMask,
  followsPointer,
  loopPointer,
  motionPose,
} from "@/src/lib/gradient-motion"
import {
  NOISE_DATA_URI,
  NOISE_TILE_SIZE,
  Point,
  clamp,
  generateLayers,
} from "@/src/types/gradient"

import { cn } from "@workspace/ui/lib/utils"

interface GradientPreviewProps {
  base: string
  blur: number
  noise: number
  effectId: string
  effectAmount: number
  layers: string[]
  points: Point[]
  selected: number
  motionStyle: MotionStyle
  travel: number
  loopSeconds: number
  playing: boolean
  previewRef: React.RefObject<HTMLDivElement | null>
  onSelectPoint: (id: number) => void
  onUpdatePoint: (id: number, patch: Partial<Point>) => void
}

export function GradientPreview({
  base,
  blur,
  noise,
  effectId,
  effectAmount,
  layers,
  points,
  selected,
  motionStyle,
  travel,
  loopSeconds,
  playing,
  previewRef,
  onSelectPoint,
  onUpdatePoint,
}: GradientPreviewProps) {
  const dragId = useRef<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const meshRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const pointerRef = useRef<MotionPointer | null>(null)
  const paintId = useRef(0)
  const clockRef = useRef(0)
  const latest = useRef({
    base,
    blur,
    noise,
    effectId,
    effectAmount,
    points,
    motionStyle,
    travel,
    loopSeconds,
    playing,
  })
  latest.current = {
    base,
    blur,
    noise,
    effectId,
    effectAmount,
    points,
    motionStyle,
    travel,
    loopSeconds,
    playing,
  }

  const cssMotion =
    playing && motionStyle !== "still" && travel > 0 && effectId === "none"

  const paintCssFrame = () => {
    const node = meshRef.current
    const current = latest.current
    if (!node || current.effectId !== "none") return
    if (clockRef.current === 0) clockRef.current = performance.now()

    const progress =
      ((performance.now() - clockRef.current) / 1000 / current.loopSeconds) % 1
    const pose = motionPose(
      current.points,
      current.blur,
      progress,
      current.motionStyle,
      current.travel,
      pointerRef.current
    )
    const image = generateLayers(pose.points).join(", ")
    const filter = pose.blur > 0 ? `blur(${pose.blur}px)` : "none"
    const host = previewRef.current

    if (current.motionStyle === "text" && textRef.current && host) {
      const rect = host.getBoundingClientRect()
      const size = Math.min(rect.width * 0.16, rect.height * 0.42)
      textRef.current.style.fontSize = `${size}px`
      textRef.current.style.backgroundImage = image
      textRef.current.style.filter = filter
    } else {
      node.style.backgroundImage = image
      node.style.filter = filter
    }

    placeCursor(progress)
  }

  const placeCursor = (progress: number) => {
    const dot = cursorRef.current
    if (!dot) return
    const current = latest.current
    if (!followsPointer(current.motionStyle)) return
    const pointer = pointerRef.current ?? loopPointer(progress)
    dot.style.left = `${pointer.x}%`
    dot.style.top = `${pointer.y}%`
  }

  useLayoutEffect(() => {
    if (!cssMotion) return
    paintCssFrame()
  })

  useEffect(() => {
    if (!cssMotion) return

    let frame = 0
    const tick = () => {
      if (!document.hidden && latest.current.playing) paintCssFrame()
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [cssMotion])

  useEffect(() => {
    if (effectId === "none") return
    if (!playing && motionStyle !== "still" && travel > 0) return

    const host = previewRef.current
    const canvas = canvasRef.current
    if (!host || !canvas) return

    const id = ++paintId.current
    let frame = 0
    let painting = false

    const paint = () => {
      if (paintId.current !== id || painting) return

      const rect = host.getBoundingClientRect()
      if (rect.width < 2 || rect.height < 2) return

      const current = latest.current
      const moving =
        current.playing &&
        current.motionStyle !== "still" &&
        current.travel > 0
      const longEdge = Math.max(rect.width, rect.height)
      const cap = moving ? 480 : 720
      const resolution = Math.min(1, cap / longEdge)
      const width = Math.max(1, Math.round(rect.width * resolution))
      const height = Math.max(1, Math.round(rect.height * resolution))

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }

      const context = canvas.getContext("2d", { willReadFrequently: true })
      if (!context) return

      if (moving && clockRef.current === 0) {
        clockRef.current = performance.now()
      }

      const progress = moving
        ? ((performance.now() - clockRef.current) / 1000 / current.loopSeconds) %
          1
        : 0
      const pose = motionPose(
        current.points,
        current.blur,
        progress,
        current.motionStyle,
        current.travel,
        pointerRef.current
      )
      placeCursor(progress)

      painting = true
      void renderGradientCanvas(
        context,
        {
          base: current.base,
          points: pose.points,
          blur: pose.blur,
          noise: current.noise,
          effectId: current.effectId,
          effectAmount: current.effectAmount,
          width,
          height,
          pixelScale: width / rect.width,
        },
        () => paintId.current === id
      )
        .then(() => {
          if (paintId.current !== id) return
          if (current.motionStyle === "text") {
            applyTextMask(context, width, height, current.base)
          }
        })
        .finally(() => {
          if (paintId.current === id) painting = false
        })
    }

    const loop = () => {
      if (paintId.current !== id) return
      const current = latest.current
      const moving =
        current.playing &&
        current.motionStyle !== "still" &&
        current.travel > 0
      if (moving && document.hidden) {
        frame = requestAnimationFrame(loop)
        return
      }
      paint()
      if (moving) frame = requestAnimationFrame(loop)
    }

    loop()
    const observer = new ResizeObserver(() => {
      if (paintId.current !== id) return
      paint()
    })
    observer.observe(host)

    return () => {
      paintId.current += 1
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [
    base,
    blur,
    effectAmount,
    effectId,
    loopSeconds,
    motionStyle,
    noise,
    playing,
    points,
    previewRef,
    travel,
  ])

  const pointerAt = (clientX: number, clientY: number) => {
    const element = previewRef.current
    if (!element) return null

    const rect = element.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) return null

    return {
      x: clamp(((clientX - rect.left) / rect.width) * 100, 0, 100),
      y: clamp(((clientY - rect.top) / rect.height) * 100, 0, 100),
    }
  }

  const trackPointer = (clientX: number, clientY: number) => {
    const pointer = pointerAt(clientX, clientY)
    if (!pointer) return

    pointerRef.current = pointer
    if (dragId.current === null) return

    onUpdatePoint(dragId.current, {
      x: Math.round(pointer.x * 10) / 10,
      y: Math.round(pointer.y * 10) / 10,
    })
  }

  return (
    <div
      ref={previewRef}
      className="relative isolate h-full min-h-0 w-full overflow-hidden touch-none"
      style={{ backgroundColor: base }}
      onPointerMove={(event) => trackPointer(event.clientX, event.clientY)}
      onPointerLeave={() => {
        if (dragId.current === null) pointerRef.current = null
      }}
      onPointerUp={() => {
        dragId.current = null
      }}
      onPointerCancel={() => {
        dragId.current = null
      }}
    >
      {effectId === "none" ? (
        <>
          <div
            ref={meshRef}
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: cssMotion ? undefined : layers.join(", "),
              filter: cssMotion
                ? undefined
                : blur > 0
                  ? `blur(${blur}px)`
                  : undefined,
              opacity: motionStyle === "text" ? 0 : 1,
            }}
          />

          {motionStyle === "text" && (
            <span
              ref={textRef}
              className="pointer-events-none absolute inset-0 grid place-items-center font-semibold leading-none"
              style={{
                backgroundImage: layers.join(", "),
                backgroundSize: "100% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Gradient
            </span>
          )}

          {noise > 0 && motionStyle !== "text" && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `url("${NOISE_DATA_URI}")`,
                backgroundRepeat: "repeat",
                backgroundSize: `${NOISE_TILE_SIZE}px`,
                opacity: noise / 100,
                mixBlendMode: "overlay",
              }}
            />
          )}
        </>
      ) : (
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      )}

      {points.map((point) => (
        <button
          key={point.id}
          type="button"
          aria-label={`Move point ${point.id}`}
          className={cn(
            "absolute z-10 h-5 w-5 -mt-[10px] -ml-[10px] cursor-grab touch-none border-2 border-white p-0 shadow-[0_0_0_1px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.35)] transition-transform duration-100 ease-out active:cursor-grabbing",
            point.id === selected &&
              "scale-125 shadow-[0_0_0_2px_hsl(var(--primary)),0_2px_10px_rgba(0,0,0,0.4)] ring-2 ring-primary ring-offset-2"
          )}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            backgroundColor: point.color,
          }}
          onPointerDown={(event) => {
            event.preventDefault()
            dragId.current = point.id
            onSelectPoint(point.id)
            event.currentTarget.setPointerCapture(event.pointerId)
          }}
          onPointerMove={(event) => {
            trackPointer(event.clientX, event.clientY)
          }}
        />
      ))}

      {followsPointer(motionStyle) && (
        <div
          ref={cursorRef}
          aria-hidden
          className="pointer-events-none absolute z-20 h-4 w-4 -mt-2 -ml-2 rounded-full border border-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
          style={{ left: "50%", top: "50%" }}
        />
      )}
    </div>
  )
}
