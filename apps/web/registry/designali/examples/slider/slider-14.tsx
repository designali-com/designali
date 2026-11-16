"use client"

import * as React from "react"
import {
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

export default function ImageZoomSlider() {
  const [zoom, setZoom] = React.useState([1.4])
  const change = (delta: number) =>
    setZoom(([z]) => [
      Math.min(3, Math.max(1, Math.round((z! + delta) * 10) / 10)),
    ])

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4">
      <div className="flex size-40 items-center justify-center overflow-hidden border bg-muted">
        <div
          className="size-24 rounded-full bg-gradient-to-br from-violet-400 to-sky-400 transition-transform"
          style={{ transform: "scale(" + zoom[0] + ")" }}
        />
      </div>
      <div className="flex w-full items-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Zoom out"
          onClick={() => change(-0.1)}
        >
          <ZoomOutIcon />
        </Button>
        <Slider
          aria-label="Zoom"
          value={zoom}
          onValueChange={(value) => setZoom(value as number[])}
          min={1}
          max={3}
          step={0.1}
        />
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Zoom in"
          onClick={() => change(0.1)}
        >
          <ZoomInIcon />
        </Button>
      </div>
    </div>
  )
}
