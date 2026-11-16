"use client"

import * as React from "react"
import {
  MapPin as MapPinIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

export default function MapZoomVerticalSlider() {
  const [zoom, setZoom] = React.useState([12])
  const set = (z: number) => setZoom([Math.min(18, Math.max(3, z))])

  return (
    <div className="relative h-64 w-full max-w-sm overflow-hidden border bg-muted/40">
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <MapPinIcon className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-full text-primary" />
      <div className="absolute top-3 right-3 flex flex-col items-center gap-2 border bg-background p-1">
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label="Zoom in"
          onClick={() => set(zoom[0]! + 1)}
        >
          <PlusIcon />
        </Button>
        <div className="h-40">
          <Slider
            orientation="vertical"
            aria-label="Map zoom"
            value={zoom}
            onValueChange={(value) => setZoom(value as number[])}
            min={3}
            max={18}
          />
        </div>
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label="Zoom out"
          onClick={() => set(zoom[0]! - 1)}
        >
          <MinusIcon />
        </Button>
      </div>
      <span className="absolute bottom-2 left-2 bg-background px-1.5 text-[10px] tabular-nums">
        Zoom {zoom[0]}
      </span>
    </div>
  )
}
