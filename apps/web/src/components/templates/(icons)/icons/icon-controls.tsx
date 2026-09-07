"use client"

import { RotateCw } from "lucide-react"
import {
  Square,
  Circle,
  Minus,
  CornerDownRight,
  SquareDot,
  FoldVertical
} from "lucide-react";

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

import { useIconFilter } from "./icon-filter-context"

interface LogoControlsPanelProps {
  size: number
  color: string
  strokeWidth: number
  strokeLinejoin?: "round" | "miter" | "bevel"
  strokeLinecap?: "round" | "butt" | "square"
  onSizeChange: (value: number) => void
  onColorChange: (value: string) => void
  onstrokeWidthChange: (value: number) => void
  onStrokeLinejoinChange?: (value: "round" | "miter" | "bevel") => void
  onStrokeLinecapChange?: (value: "round" | "butt" | "square") => void
  activeVariant?: string
}

export function IconControlsPanel({
  size,
  color,
  strokeWidth,
  onstrokeWidthChange,
  onSizeChange,
  onColorChange,
  activeVariant,
}: LogoControlsPanelProps) {
  const variantName = activeVariant?.toLowerCase() || ""

  const isFilled =
    variantName.includes("filled") || variantName.includes("doodle")

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Size: {size}px</Label>
        <Slider
          min={16}
          max={300}
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

      {!isFilled && (
        <div className="space-y-2">
          <Label>strokeWidth: {strokeWidth}</Label>
          <Slider
            min={0.1}
            max={4}
            step={0.1}
            value={[strokeWidth]}
            onValueChange={(value) => {
              if (typeof value === "number") {
                onstrokeWidthChange(value)
              } else {
                onstrokeWidthChange(value[0] ?? size)
              }
            }}
          />
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <input
          id="color"
          type="color"
          value={color === "currentColor" ? "#000000" : color}
          onChange={(e) => onColorChange(e.target.value)}
          className="absolute h-8 w-8 border p-3"
        />
        <div
          className="h-8 w-8 border"
          style={{
            backgroundColor: color === "currentColor" ? "#000000" : color,
          }}
        />
        <Input
          type="text"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="flex-1"
          placeholder="currentColor"
        />
        <Button
          variant="secondary"
          size="icon"
          onClick={() => {
            onSizeChange(120)
            onColorChange("currentColor")
            onstrokeWidthChange(0.5)
          }}
        >
          <RotateCw />
        </Button>
      </div>
    </div>
  )
}

export function IconViewControlsPanel({
  size,
  color,
  strokeWidth,
  strokeLinejoin,
  strokeLinecap,
  onStrokeLinecapChange,
  onStrokeLinejoinChange,
  onstrokeWidthChange,
  onSizeChange,
  onColorChange,
  activeVariant,
}: LogoControlsPanelProps) {
  const { variantTab } = useIconFilter()
  const isFilled =
    activeVariant === "filled" ||
    activeVariant === "rounded" ||
    activeVariant === "doodle" ||
    variantTab === "filled" ||
    variantTab === "doodle"

  return (
    <div className="space-y-6">
      <div className="flex gap-3 w-full">
        <div className="space-y-2 w-full">
          <Label>Size: {size}px</Label>
          <Slider
            min={16}
            max={600}
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

        {!isFilled && (
          <div className="space-y-2 w-full">
            <Label>strokeWidth: {strokeWidth}</Label>
            <Slider
              min={0.1}
              max={4}
              step={0.1}
              value={[strokeWidth]}
              onValueChange={(value) => {
                if (typeof value === "number") {
                  onstrokeWidthChange(value)
                } else {
                  onstrokeWidthChange(value[0] ?? size)
                }
              }}
            />
          </div>
        )}
      </div>



      <div className="grid grid-cols-2 w-full items-center justify-between gap-2">
        <div className="flex items-center justify-between gap-2">
          <input
            id="color"
            type="color"
            value={color === "currentColor" ? "#000000" : color}
            onChange={(e) => onColorChange(e.target.value)}
            className="absolute h-8 w-8 border p-3"
          />
          <div
            className="h-8 w-10 border"
            style={{
              backgroundColor: color === "currentColor" ? "#000000" : color,
            }}
          />
          <Input
            type="text"
            value={color}
            onChange={(e) => onColorChange(e.target.value)}
            className=""
            placeholder="currentColor"
          />
        </div>
        <div className="flex w-full items-center gap-2">
          {!isFilled && (onStrokeLinecapChange || onStrokeLinejoinChange) && (
            <div className="flex w-full gap-2">
              {onStrokeLinecapChange && (
                <div className="min-w-0 flex-1 space-y-2">
                  <ToggleGroup
                    size="sm"
                    variant="outline"
                    onValueChange={(val) =>
                      val &&
                      onStrokeLinecapChange(
                        val as unknown as "round" | "butt" | "square"
                      )
                    }
                    className="flex w-full"
                  >
                    <ToggleGroupItem
                      value="round"
                      className="flex-1"
                      aria-label="Round cap"
                    >
                      <Circle className="size-4" />
                    </ToggleGroupItem>

                    <ToggleGroupItem
                      value="butt"
                      className="flex-1"
                      aria-label="Butt cap"
                    >
                      <Minus className="size-4" />
                    </ToggleGroupItem>

                    <ToggleGroupItem
                      value="square"
                      className="flex-1"
                      aria-label="Square cap"
                    >
                      <Square className="size-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              )}

              {activeVariant !== "filled" &&
                activeVariant !== "pixel" &&
                onStrokeLinejoinChange && (
                  <div className="min-w-0 flex-1 space-y-2">
                    <ToggleGroup
                      size="sm"
                      variant="outline"
                      onValueChange={(val) =>
                        val &&
                        onStrokeLinejoinChange(
                          val as unknown as "round" | "miter" | "bevel"
                        )
                      }
                      className="flex w-full"
                    >
                      <ToggleGroupItem
                        value="round"
                        className="flex-1"
                        aria-label="Round join"
                      >
                        <Circle className="size-4" />
                      </ToggleGroupItem>

                      <ToggleGroupItem
                        value="miter"
                        className="flex-1"
                        aria-label="Miter join"
                      >
                        <CornerDownRight className="size-4" />
                      </ToggleGroupItem>

                      <ToggleGroupItem
                        value="bevel"
                        className="flex-1"
                        aria-label="Bevel join"
                      >
                        <Square className="size-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                )}
            </div>
          )}
          <Button
            variant="secondary"
            size="icon"
            onClick={() => {
              onSizeChange(200)
              onColorChange("currentColor")
              onstrokeWidthChange(1)
            }}
          >
            <RotateCw />
          </Button>
        </div>

      </div>


    </div >
  )
}
