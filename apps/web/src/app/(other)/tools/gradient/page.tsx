"use client"

import React, { useMemo, useRef, useState } from "react"

import { Point, SizeOption } from "@/src/types/gradient"
import {
  generateLayers,
  hexToRgba,
  randHex,
} from "@/src/types/gradient"

import { GradientPreview } from "@/src/components/others/gradient-preview"
import { ControlPanel } from "@/src/components/others/control-panel"

const DEFAULT_SIZE: SizeOption = {
  label: "Landscape 1920×1080",
  w: 1920,
  h: 1080,
}

const SIZES: SizeOption[] = [
  DEFAULT_SIZE,
  { label: "Square 1080×1080", w: 1080, h: 1080 },
  { label: "Portrait 1080×1920", w: 1080, h: 1920 },
  { label: "4K 3840×2160", w: 3840, h: 2160 },
]

const INITIAL_POINT: Point = {
  id: 1,
  x: 12,
  y: 18,
  color: "#ff7a59",
  spread: 55,
}

const INITIAL: Point[] = [
  INITIAL_POINT,
  { id: 2, x: 82, y: 14, color: "#7c5cff", spread: 55 },
  { id: 3, x: 70, y: 82, color: "#22d3ee", spread: 55 },
  { id: 4, x: 18, y: 80, color: "#f9d423", spread: 50 },
]

export default function MeshGradientGenerator() {
  const [base, setBase] = useState("#0f172a")
  const [points, setPoints] = useState<Point[]>(INITIAL)
  const [selected, setSelected] = useState<number>(INITIAL_POINT.id)
  const [sizeIdx, setSizeIdx] = useState(0)

  const nextId = useRef(100)

  const size = SIZES[sizeIdx] ?? DEFAULT_SIZE

  const layers = useMemo(
    () => generateLayers(points),
    [points]
  )

  const cssCode = useMemo(
    () =>
      `background-color: ${base};
background-image:
  ${layers.join(",\n  ")};`,
    [base, layers]
  )

  const updatePoint = (
    id: number,
    patch: Partial<Point>
  ) => {
    setPoints((currentPoints) =>
      currentPoints.map((point) =>
        point.id === id
          ? { ...point, ...patch }
          : point
      )
    )
  }

  const addPoint = () => {
    if (points.length >= 8) return

    const id = nextId.current++

    const newPoint: Point = {
      id,
      x: Math.round(20 + Math.random() * 60),
      y: Math.round(20 + Math.random() * 60),
      color: randHex(),
      spread: 50,
    }

    setPoints((currentPoints) => [
      ...currentPoints,
      newPoint,
    ])

    setSelected(id)
  }

  const removePoint = (id: number) => {
    if (points.length <= 1) return

    const remaining = points.filter(
      (point) => point.id !== id
    )

    setPoints(remaining)

    const nextSelected = remaining[0]

    if (selected === id && nextSelected) {
      setSelected(nextSelected.id)
    }
  }

  const randomize = () => {
    setPoints((currentPoints) =>
      currentPoints.map((point) => ({
        ...point,
        x: Math.round(Math.random() * 100),
        y: Math.round(Math.random() * 100),
        color: randHex(),
        spread: Math.round(
          40 + Math.random() * 30
        ),
      }))
    )
  }

  const downloadJpg = () => {
    const { w, h } = size

    const canvas = document.createElement("canvas")

    canvas.width = w
    canvas.height = h

    const ctx = canvas.getContext("2d")

    if (!ctx) return

    ctx.fillStyle = base
    ctx.fillRect(0, 0, w, h)

    ;[...points].reverse().forEach((point) => {
      const cx = (point.x / 100) * w
      const cy = (point.y / 100) * h

      const farthest = Math.max(
        Math.hypot(cx, cy),
        Math.hypot(w - cx, cy),
        Math.hypot(cx, h - cy),
        Math.hypot(w - cx, h - cy)
      )

      const radius =
        (farthest * point.spread) / 100

      const gradient = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.max(radius, 1)
      )

      gradient.addColorStop(
        0,
        hexToRgba(point.color, 1)
      )

      gradient.addColorStop(
        1,
        hexToRgba(point.color, 0)
      )

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)
    })

    canvas.toBlob(
      (blob) => {
        if (!blob) return

        const url = URL.createObjectURL(blob)
        const anchor = document.createElement("a")

        anchor.href = url
        anchor.download = `mesh-gradient-${w}x${h}.jpg`

        document.body.appendChild(anchor)
        anchor.click()
        anchor.remove()

        URL.revokeObjectURL(url)
      },
      "image/jpeg",
      0.95
    )
  }

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_380px] gap-3 p-3">
      <GradientPreview
        base={base}
        layers={layers}
        onSelectPoint={setSelected}
        onUpdatePoint={updatePoint}
        points={points}
        selected={selected}
        size={size}
      />

      <ControlPanel
        base={base}
        cssCode={cssCode}
        onAddPoint={addPoint}
        onDownloadJpg={downloadJpg}
        onRandomize={randomize}
        onRemovePoint={removePoint}
        onUpdatePoint={updatePoint}
        points={points}
        selected={selected}
        setBase={setBase}
        setSelected={setSelected}
        setSizeIdx={setSizeIdx}
        sizeIdx={sizeIdx}
        sizes={SIZES}
      />
    </main>
  )
}