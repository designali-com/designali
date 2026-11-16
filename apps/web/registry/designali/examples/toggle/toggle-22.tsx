"use client"

import * as React from "react"
import {
  Grid3x3 as Grid3x3Icon,
  Magnet as MagnetIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function CanvasGridSnapToggles() {
  const [grid, setGrid] = React.useState(true)
  const [snap, setSnap] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center gap-1 border-b p-1">
        <Toggle size="sm" pressed={grid} onPressedChange={setGrid}>
          <Grid3x3Icon />
          Grid
        </Toggle>
        <Toggle
          size="sm"
          pressed={snap}
          onPressedChange={setSnap}
          disabled={!grid}
        >
          <MagnetIcon />
          Snap
        </Toggle>
      </div>
      <div
        className="relative h-40 bg-background"
        style={
          grid
            ? {
                backgroundImage:
                  "radial-gradient(var(--color-border) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }
            : undefined
        }
      >
        <div
          className={cn(
            "absolute size-12 bg-primary/80",
            snap ? "top-8 left-16" : "top-[37px] left-[69px]"
          )}
        />
        <div
          className={cn(
            "absolute h-8 w-20 border-2 border-primary",
            snap ? "top-24 left-40" : "top-[101px] left-[163px]"
          )}
        />
      </div>
    </div>
  )
}
