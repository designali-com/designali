"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"

export default function LayerOpacitySlider() {
  const [opacity, setOpacity] = React.useState([80])

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-3">
      <div
        className="size-8 shrink-0 border"
        style={{
          backgroundImage:
            "linear-gradient(45deg, var(--muted) 25%, transparent 25%, transparent 75%, var(--muted) 75%), linear-gradient(45deg, var(--muted) 25%, transparent 25%, transparent 75%, var(--muted) 75%)",
          backgroundSize: "8px 8px",
          backgroundPosition: "0 0, 4px 4px",
        }}
      >
        <div
          className="size-full bg-primary"
          style={{ opacity: opacity[0]! / 100 }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex justify-between text-xs">
          <span>Opacity</span>
          <span className="text-muted-foreground tabular-nums">
            {opacity[0]}%
          </span>
        </div>
        <Slider
          aria-label="Layer opacity"
          value={opacity}
          onValueChange={(value) => setOpacity(value as number[])}
        />
      </div>
    </div>
  )
}
