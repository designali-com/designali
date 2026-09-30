"use client"

import React, { useEffect, useRef } from "react"

import { renderGradientCanvas } from "@/src/lib/gradient-render"
import {
  NOISE_DATA_URI,
  NOISE_TILE_SIZE,
  Point,
  clamp,
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
  previewRef,
  onSelectPoint,
  onUpdatePoint,
}: GradientPreviewProps) {
  const dragId = useRef<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const paintId = useRef(0)

  useEffect(() => {
    if (effectId === "none") return

    const host = previewRef.current
    const canvas = canvasRef.current
    if (!host || !canvas) return

    const id = ++paintId.current
    let frame = 0

    const paint = () => {
      const rect = host.getBoundingClientRect()
      if (rect.width < 2 || rect.height < 2) return

      const longEdge = Math.max(rect.width, rect.height)
      const resolution = Math.min(1, 720 / longEdge)
      const width = Math.max(1, Math.round(rect.width * resolution))
      const height = Math.max(1, Math.round(rect.height * resolution))

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }

      const context = canvas.getContext("2d", { willReadFrequently: true })
      if (!context) return

      void renderGradientCanvas(
        context,
        {
          base,
          points,
          blur,
          noise,
          effectId,
          effectAmount,
          width,
          height,
          pixelScale: width / rect.width,
        },
        () => paintId.current === id
      )
    }

    frame = requestAnimationFrame(paint)
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(paint)
    })
    observer.observe(host)

    return () => {
      paintId.current += 1
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [base, blur, effectAmount, effectId, noise, points, previewRef])

  const moveTo = (clientX: number, clientY: number) => {
    const element = previewRef.current

    if (!element || dragId.current === null) return

    const rect = element.getBoundingClientRect()
    const x = clamp(((clientX - rect.left) / rect.width) * 100, 0, 100)
    const y = clamp(((clientY - rect.top) / rect.height) * 100, 0, 100)

    onUpdatePoint(dragId.current, {
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
    })
  }

  return (
    <div
      ref={previewRef}
      className="relative isolate h-full min-h-0 w-full overflow-hidden touch-none"
      style={{ backgroundColor: base }}
      onPointerMove={(event) => moveTo(event.clientX, event.clientY)}
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
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: layers.join(", "),
              filter: blur > 0 ? `blur(${blur}px)` : undefined,
            }}
          />

          {noise > 0 && (
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
            if (dragId.current === point.id) {
              moveTo(event.clientX, event.clientY)
            }
          }}
        />
      ))}
    </div>
  )
}
