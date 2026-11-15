"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"

export default function FontSizePreviewSlider() {
  const [size, setSize] = React.useState([16])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="text-xs">A</span>
        <Slider
          aria-label="Font size"
          value={size}
          onValueChange={(value) => setSize(value as number[])}
          min={12}
          max={24}
        />
        <span className="text-lg">A</span>
      </div>
      <p
        className="border bg-muted/40 p-4 leading-relaxed"
        style={{ fontSize: size[0] }}
      >
        The ferry left the harbor just after dawn, carrying the morning mail.
      </p>
      <span className="text-xs text-muted-foreground tabular-nums">
        {size[0]}px
      </span>
    </div>
  )
}
