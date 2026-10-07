"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { GradientTemplate } from "@/src/config/gradient/templates"
import { toast } from "sonner"


import { renderGradientCanvas } from "@/src/lib/gradient-render"
import {
  GradientExportJob,
  MotionStyle,
  animationExportSize,
} from "@/src/lib/gradient-motion"
import {
  Point,
  SizeOption,
  generateLayers,
  randHex,
} from "@/src/types/gradient"

import { GradientPreview } from "@/src/components/others/gradient-preview"
import { ControlPanel } from "@/src/components/others/control-panel"

const DEFAULT_SIZE: SizeOption = {
  label: "Full HD 1920×1080",
  w: 1920,
  h: 1080,
}

const SIZES: SizeOption[] = [
  DEFAULT_SIZE,
  { label: "HD 1280×720", w: 1280, h: 720 },
  { label: "QHD 2560×1440", w: 2560, h: 1440 },
  { label: "4K 3840×2160", w: 3840, h: 2160 },
  { label: "5K 5120×2880", w: 5120, h: 2880 },
  { label: "8K 7680×4320", w: 7680, h: 4320 },
  { label: "Square 1080×1080", w: 1080, h: 1080 },
  { label: "Square 2048×2048", w: 2048, h: 2048 },
  { label: "Post 1080×1350", w: 1080, h: 1350 },
  { label: "Portrait 1080×1920", w: 1080, h: 1920 },
  { label: "Phone 1170×2532", w: 1170, h: 2532 },
  { label: "Ultrawide 2560×1080", w: 2560, h: 1080 },
  { label: "Ultrawide 3440×1440", w: 3440, h: 1440 },
  { label: "Open Graph 1200×630", w: 1200, h: 630 },
  { label: "Banner 1920×640", w: 1920, h: 640 },
  { label: "LinkedIn 1584×396", w: 1584, h: 396 },
]

const INITIAL: Point[] = [
  { id: 1, x: 12, y: 18, color: "#ff7a59" },
  { id: 2, x: 82, y: 14, color: "#7c5cff" },
  { id: 3, x: 70, y: 82, color: "#22d3ee" },
  { id: 4, x: 18, y: 80, color: "#f9d423" },
]

export default function MeshGradientGenerator() {
  const [base, setBase] = useState("#ffffff")
  const [blur, setBlur] = useState(48)
  const [noise, setNoise] = useState(40)
  const [effectId, setEffectId] = useState("none")
  const [effectAmount, setEffectAmount] = useState(70)
  const [motionStyle, setMotionStyle] = useState<MotionStyle>("flow")
  const [travel, setTravel] = useState(48)
  const [loopSeconds, setLoopSeconds] = useState(6)
  const [exporting, setExporting] = useState<GradientExportJob | null>(null)
  const [points, setPoints] = useState<Point[]>(INITIAL)
  const [selected, setSelected] = useState<number>(INITIAL[0]!.id)
  const [sizeIdx, setSizeIdx] = useState(0)

  const nextId = useRef(100)
  const previewRef = useRef<HTMLDivElement>(null)
  const exportGeneration = useRef(0)

  const size = SIZES[sizeIdx] ?? DEFAULT_SIZE
  const gifSize = animationExportSize(size.w, size.h, "gif")
  const mp4Size = animationExportSize(size.w, size.h, "mp4")

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMotionStyle("still")
    }
  }, [])

  useEffect(() => {
    return () => {
      exportGeneration.current += 1
    }
  }, [])

  const layers = useMemo(() => generateLayers(points), [points])

  const cssCode = useMemo(() => {
    const background = `background-color: ${base};
background-image:
  ${layers.join(",\n  ")};`

    if (blur <= 0) return background

    return `${background}
filter: blur(${blur}px);`
  }, [base, blur, layers])

  const updatePoint = (id: number, patch: Partial<Point>) => {
    setPoints((currentPoints) =>
      currentPoints.map((point) =>
        point.id === id ? { ...point, ...patch } : point
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
    }

    setPoints((currentPoints) => [...currentPoints, newPoint])
    setSelected(id)
  }

  const removePoint = (id: number) => {
    if (points.length <= 1) return

    const remaining = points.filter((point) => point.id !== id)
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
      }))
    )
    setBlur(Math.round(20 + Math.random() * 80))
    setNoise(Math.round(Math.random() * 70))
  }

  const downloadJpg = async () => {
    const { w, h } = size
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    const previewWidth = previewRef.current?.clientWidth ?? w
    const pixelScale = previewWidth > 0 ? w / previewWidth : 1

    await renderGradientCanvas(ctx, {
      base,
      points,
      blur,
      noise,
      effectId,
      effectAmount,
      width: w,
      height: h,
      pixelScale,
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

  const downloadAnimation = async (format: "gif" | "mp4") => {
    if (exporting || motionStyle === "still" || travel <= 0) return

    const generation = ++exportGeneration.current
    const output = format === "gif" ? gifSize : mp4Size
    const previewWidth = previewRef.current?.clientWidth ?? output.width
    const pixelScale = previewWidth > 0 ? output.width / previewWidth : 1

    setExporting({ format, progress: 0 })

    try {
      const { exportGradientAnimation } = await import(
        "@/src/lib/gradient-export"
      )
      await exportGradientAnimation({
        format,
        base,
        points,
        blur,
        noise,
        effectId,
        effectAmount,
        width: output.width,
        height: output.height,
        pixelScale,
        motionStyle,
        travel,
        loopSeconds,
        onProgress: (progress) => {
          if (exportGeneration.current !== generation) return
          setExporting({ format, progress })
        },
        shouldContinue: () => exportGeneration.current === generation,
      })
    } catch (error) {
      if (exportGeneration.current === generation) {
        toast.error(error instanceof Error ? error.message : "Export failed")
      }
    } finally {
      if (exportGeneration.current === generation) {
        setExporting(null)
      }
    }
  }

  const applyTemplate = (template: GradientTemplate) => {
    const newPoints: Point[] = template.points.map((point) => ({
      ...point,
      id: nextId.current++,
    }))
  
    setBase(template.base)
    setBlur(template.blur)
    setPoints(newPoints)
    setSelected(newPoints[0]!.id)
  }

  return (
    <main className="flex h-auto min-h-full flex-col pt-10 lg:h-full lg:min-h-0 lg:flex-row lg:overflow-hidden">
      <div className="h-[calc(100dvh-30rem)] w-full shrink-0 lg:h-auto lg:min-h-0 lg:flex-1">
        <GradientPreview
          base={base}
          blur={blur}
          noise={noise}
          effectId={effectId}
          effectAmount={effectAmount}
          layers={layers}
          onSelectPoint={setSelected}
          onUpdatePoint={updatePoint}
          points={points}
          motionStyle={motionStyle}
          travel={travel}
          loopSeconds={loopSeconds}
          playing={!exporting}
          previewRef={previewRef}
          selected={selected}
        />
      </div>

      <ControlPanel
        onApplyTemplate={applyTemplate}
        base={base}
        blur={blur}
        noise={noise}
        effectId={effectId}
        effectAmount={effectAmount}
        cssCode={cssCode}
        onAddPoint={addPoint}
        motionStyle={motionStyle}
        setMotionStyle={setMotionStyle}
        travel={travel}
        setTravel={setTravel}
        loopSeconds={loopSeconds}
        setLoopSeconds={setLoopSeconds}
        exporting={exporting}
        gifSize={gifSize}
        mp4Size={mp4Size}
        onDownloadJpg={downloadJpg}
        onDownloadGif={() => void downloadAnimation("gif")}
        onDownloadMp4={() => void downloadAnimation("mp4")}
        onRandomize={randomize}
        onRemovePoint={removePoint}
        onUpdatePoint={updatePoint}
        points={points}
        selected={selected}
        setBase={setBase}
        setBlur={setBlur}
        setNoise={setNoise}
        setEffectId={setEffectId}
        setEffectAmount={setEffectAmount}
        setSelected={setSelected}
        setSizeIdx={setSizeIdx}
        sizeIdx={sizeIdx}
        sizes={SIZES}
      />
    </main>
  )
}
