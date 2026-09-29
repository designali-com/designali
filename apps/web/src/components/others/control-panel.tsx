"use client"

import React, { useState } from "react"

import { Point, SizeOption } from "@/src/types/gradient"
import { PointEditor } from "./point-editor"
import { GradientColorField } from "./gradient-color-field"

import { Label } from "@workspace/ui/components/label"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"
import { Slider } from "@workspace/ui/components/slider"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

import { Plus, Shuffle, Copy, Check, Download } from "lucide-react"

interface ControlPanelProps {
  base: string
  setBase: (value: string) => void

  blur: number
  setBlur: (value: number) => void

  sizes: SizeOption[]
  sizeIdx: number
  setSizeIdx: (index: number) => void

  points: Point[]
  selected: number
  setSelected: (id: number) => void

  cssCode: string

  onRandomize: () => void
  onAddPoint: () => void
  onRemovePoint: (id: number) => void
  onUpdatePoint: (id: number, patch: Partial<Point>) => void
  onDownloadJpg: () => void
}

function sliderValue(value: number | readonly number[], fallback: number) {
  if (typeof value === "number") return value
  return value[0] ?? fallback
}

export function ControlPanel({
  base,
  setBase,
  blur,
  setBlur,
  sizes,
  sizeIdx,
  setSizeIdx,
  points,
  selected,
  setSelected,
  cssCode,
  onRandomize,
  onAddPoint,
  onRemovePoint,
  onUpdatePoint,
  onDownloadJpg,
}: ControlPanelProps) {
  const [copied, setCopied] = useState(false)

  const active = points.find((point) => point.id === selected) ?? points[0]
  const currentSize = sizes[sizeIdx]

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(cssCode)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = cssCode
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      document.execCommand("copy")
      textarea.remove()
    }

    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <aside className="flex h-auto w-full shrink-0 flex-col gap-4 overflow-y-auto border-t bg-background p-4 lg:h-full lg:w-[320px] lg:border-t-0 lg:border-l">
      <div className="flex items-center justify-between gap-3">
        <Label className="text-sm font-semibold">Background</Label>
        <div className="flex items-center gap-2">
          <GradientColorField
            label="Background color"
            value={base}
            onChange={setBase}
          />
          <code className="font-mono text-xs text-muted-foreground">{base}</code>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">Blur</Label>
          <span className="font-mono text-xs text-muted-foreground">
            {blur}px
          </span>
        </div>
        <Slider
          min={0}
          max={160}
          step={1}
          value={[blur]}
          onValueChange={(value) => setBlur(sliderValue(value, blur))}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-sm font-semibold">Export size</Label>
        <Select
          value={currentSize?.label}
          onValueChange={(value) => {
            const index = sizes.findIndex((size) => size.label === value)
            if (index >= 0) setSizeIdx(index)
          }}
        >
          <SelectTrigger className="h-8 w-full text-xs">
            <SelectValue placeholder="Select export size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem
                key={size.label}
                value={size.label}
                className="text-xs"
              >
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <Label className="text-sm font-semibold">
            Points ({points.length}/8)
          </Label>
          <div className="flex gap-1.5">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={onRandomize}
              className="h-7 px-2.5 text-xs"
            >
              <Shuffle className="mr-1 h-3.5 w-3.5" />
              Random
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={onAddPoint}
              disabled={points.length >= 8}
              className="h-7 px-2.5 text-xs"
            >
              <Plus className="mr-1 h-3.5 w-3.5" />
              Add
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {points.map((point, index) => {
            const isSelected = point.id === selected

            return (
              <button
                key={point.id}
                type="button"
                onClick={() => setSelected(point.id)}
                className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-all ${
                  isSelected
                    ? "border-primary bg-accent/50 font-medium ring-1 ring-primary"
                    : "border-border bg-background hover:bg-muted"
                }`}
              >
                <span
                  className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/10"
                  style={{ backgroundColor: point.color }}
                />
                {index + 1}
              </button>
            )
          })}
        </div>

        {active && (
          <PointEditor
            active={active}
            pointsCount={points.length}
            onUpdatePoint={onUpdatePoint}
            onRemovePoint={onRemovePoint}
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">CSS</Label>
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={copyCss}
            className="h-7 text-xs"
          >
            {copied ? (
              <Check className="mr-1 h-3.5 w-3.5 text-green-600" />
            ) : (
              <Copy className="mr-1 h-3.5 w-3.5" />
            )}
            {copied ? "Copied" : "Copy CSS"}
          </Button>
        </div>
        <Textarea
          value={cssCode}
          readOnly
          rows={4}
          className="w-full resize-none bg-muted/50 font-mono text-[11px]"
        />
      </div>

      <Button type="button" onClick={onDownloadJpg} className="w-full">
        <Download className="mr-2 h-4 w-4" />
        Download JPG
        {currentSize ? ` (${currentSize.w}×${currentSize.h})` : ""}
      </Button>
    </aside>
  )
}
