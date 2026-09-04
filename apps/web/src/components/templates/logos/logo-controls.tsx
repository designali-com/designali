"use client"

import { RotateCw } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"

interface LogoControlsPanelProps {
  size: number
  color: string
  maxSize?: number
  resetSize?: number
  onSizeChange: (value: number) => void
  onColorChange: (value: string) => void
}

export function LogoControlsPanel({
  size,
  color,
  maxSize = 200,
  resetSize = 64,
  onSizeChange,
  onColorChange,
}: LogoControlsPanelProps) {
  const pickerColor = color === "currentColor" ? "#000000" : color

  return (
    <div className="space-y-6">
      {/* Size */}
      <div className="space-y-2">
        <Label>Size: {size}px</Label>

        <Slider
          min={16}
          max={maxSize}
          step={4}
          value={[size]}
          onValueChange={(value) => {
            if (typeof value === "number") {
              onSizeChange(value)
            } else {
              onSizeChange(value[0] ?? size)
            }
          }}
        />
      </div>

      {/* Color */}
      <div className="flex items-center gap-2">
        <label
          htmlFor="logo-color"
          className="relative h-8 w-8 shrink-0 cursor-pointer overflow-hidden rounded-md border"
          style={{ backgroundColor: pickerColor }}
        >
          <input
            id="logo-color"
            type="color"
            value={pickerColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </label>

        <Input
          type="text"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          placeholder="currentColor"
          className="flex-1"
        />

        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={() => {
            onSizeChange(resetSize)
            onColorChange("currentColor")
          }}
          aria-label="Reset"
        >
          <RotateCw className="size-4" />
        </Button>
      </div>
    </div>
  )
}
