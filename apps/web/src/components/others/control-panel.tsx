 
"use client"

import React, { useState } from "react"

import { Point, SizeOption } from "@/src/types/gradient"
import { PointEditor } from "./point-editor"

import { Label } from "@workspace/ui/components/label"
import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

import {
  Plus,
  Shuffle,
  Copy,
  Check,
  Download,
} from "lucide-react"

interface ControlPanelProps {
  base: string
  setBase: (value: string) => void

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

  onUpdatePoint: (
    id: number,
    patch: Partial<Point>
  ) => void

  onDownloadJpg: () => void
}

export function ControlPanel({
  base,
  setBase,
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

  const active =
    points.find((point) => point.id === selected) ?? points[0]

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
    <aside className="flex mt-10 flex-col w-full items-start gap-3 overflow-x-auto border p-3">

      {/* Background */}
      <div className="flex min-w-fit items-center gap-3">
        <Label className="text-sm font-semibold">
          Background
        </Label>

        <Input
          type="color"
          value={base}
          onChange={(event) =>
            setBase(event.target.value)
          }
          className="h-7 w-9 cursor-pointer rounded-md border p-0"
        />

        <code className="text-xs font-mono text-muted-foreground">
          {base}
        </code>
      </div>

      {/* Size */}
      <div className="flex min-w-fit items-center gap-3">
        <Label className="text-sm font-semibold">
          Size
        </Label>

        <Select
          value={String(sizeIdx)}
          onValueChange={(value) =>
            setSizeIdx(Number(value))
          }
        >
          <SelectTrigger className="h-8 w-[180px] text-xs">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>

          <SelectContent>
            {sizes.map((size, index) => (
              <SelectItem
                key={size.label}
                value={String(index)}
                className="text-xs"
              >
                {size.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Points */}
      <div className="flex min-w-fit flex-col gap-2">
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
            const isSelected =
              point.id === selected

            return (
              <button
                key={point.id}
                type="button"
                onClick={() =>
                  setSelected(point.id)
                }
                className={`
                  flex items-center gap-1.5
                  rounded-full border
                  px-2.5 py-1
                  text-xs transition-all
                  ${
                    isSelected
                      ? "border-primary bg-accent/50 font-medium ring-1 ring-primary"
                      : "border-border bg-background hover:bg-muted"
                  }
                `}
              >
                <span
                  className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/10"
                  style={{
                    backgroundColor:
                      point.color,
                  }}
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

      {/* CSS */}
      <div className="flex min-w-[280px] flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">
            CSS
          </Label>

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
          rows={3}
          className="resize-none bg-muted/50 font-mono text-[11px]"
        />
      </div>

      {/* Download */}
      <Button
        type="button"
        onClick={onDownloadJpg}
        className="mt-0 min-w-fit self-start"
      >
        <Download className="mr-2 h-4 w-4" />

        Download JPG

        {currentSize && (
          <>
            {" "}
            ({currentSize.w}×{currentSize.h})
          </>
        )}
      </Button>
    </aside>
  )
} 