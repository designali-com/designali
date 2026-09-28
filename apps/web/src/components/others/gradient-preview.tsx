"use client"

import React, { useRef } from "react"

import {
  Point,
  SizeOption,
  clamp,
} from "@/src/types/gradient"

import { cn } from "@workspace/ui/lib/utils"

interface GradientPreviewProps {
  base: string
  layers: string[]
  size: SizeOption
  points: Point[]
  selected: number

  onSelectPoint: (id: number) => void

  onUpdatePoint: (
    id: number,
    patch: Partial<Point>
  ) => void
}

export function GradientPreview({
  base,
  layers,
  size,
  points,
  selected,
  onSelectPoint,
  onUpdatePoint,
}: GradientPreviewProps) {
  const previewRef =
    useRef<HTMLDivElement>(null)

  const dragId =
    useRef<number | null>(null)

  const moveTo = (
    clientX: number,
    clientY: number
  ) => {
    const element = previewRef.current

    if (
      !element ||
      dragId.current === null
    ) {
      return
    }

    const rect =
      element.getBoundingClientRect()

    const x = clamp(
      ((clientX - rect.left) / rect.width) *
        100,
      0,
      100
    )

    const y = clamp(
      ((clientY - rect.top) / rect.height) *
        100,
      0,
      100
    )

    onUpdatePoint(dragId.current, {
      x: Math.round(x * 10) / 10,
      y: Math.round(y * 10) / 10,
    })
  }

  const previewStyle: React.CSSProperties = {
    backgroundColor: base,
    backgroundImage: layers.join(", "),
    aspectRatio: `${size.w} / ${size.h}`,
  }

  return (
    <div className="flex mt-10 max-h-[calc(100vh-96px)] min-w-0 w-full flex-col items-center justify-center">
      <div
        ref={previewRef}
        className={cn(
          "relative w-full max-h-[calc(100vh-96px)] max-w-full",
          "overflow-hidden touch-none", 
        )}
        style={previewStyle}
        onPointerMove={(event) =>
          moveTo(
            event.clientX,
            event.clientY
          )
        }
        onPointerUp={() => {
          dragId.current = null
        }}
        onPointerCancel={() => {
          dragId.current = null
        }}
      >
        {points.map((point) => (
          <button
            key={point.id}
            type="button"
            aria-label={`Move point ${point.id}`}
            className={cn(
              "absolute h-5 w-5 -ml-[10px] -mt-[10px] p-0",
              "rounded-full border-2 border-white",
              "cursor-grab touch-none",
              "shadow-[0_0_0_1px_rgba(0,0,0,0.35),0_2px_8px_rgba(0,0,0,0.35)]",
              "transition-transform duration-100 ease-out",
              "active:cursor-grabbing",
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

              event.currentTarget.setPointerCapture(
                event.pointerId
              )

              dragId.current = point.id
              onSelectPoint(point.id)
            }}
          />
        ))}
      </div> 
    </div>
  )
}