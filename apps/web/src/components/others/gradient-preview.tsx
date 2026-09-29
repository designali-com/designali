"use client"

import React, { useRef } from "react"

import { Point, clamp } from "@/src/types/gradient"

import { cn } from "@workspace/ui/lib/utils"

interface GradientPreviewProps {
  base: string
  blur: number
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
  layers,
  points,
  selected,
  previewRef,
  onSelectPoint,
  onUpdatePoint,
}: GradientPreviewProps) {
  const dragId = useRef<number | null>(null)

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
      className="relative h-full min-h-0 w-full overflow-hidden touch-none"
      style={{ backgroundColor: base }}
      onPointerMove={(event) => moveTo(event.clientX, event.clientY)}
      onPointerUp={() => {
        dragId.current = null
      }}
      onPointerCancel={() => {
        dragId.current = null
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: layers.join(", "),
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
        }}
      />

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
