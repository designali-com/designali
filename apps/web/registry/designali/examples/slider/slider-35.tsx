"use client"

import * as React from "react"
import {
  Aperture as ApertureIcon,
  RotateCcw as RotateCcwIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

export default function ExposureCompensationSlider() {
  const [ev, setEv] = React.useState([0.5])
  const v = ev[0]!

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <ApertureIcon className="size-4" />
          Exposure
        </div>
        <div className="flex items-center gap-1">
          <span className="font-sans text-xs tabular-nums">
            {v > 0 ? "+" : ""}
            {v.toFixed(1)} EV
          </span>
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label="Reset exposure"
            onClick={() => setEv([0])}
          >
            <RotateCcwIcon />
          </Button>
        </div>
      </div>
      <Slider
        aria-label="Exposure"
        value={ev}
        onValueChange={(value) => setEv(value as number[])}
        min={-3}
        max={3}
        step={0.5}
      />
      <div className="flex justify-between font-sans text-[10px] text-muted-foreground">
        <span>-3</span>
        <span>0</span>
        <span>+3</span>
      </div>
    </div>
  )
}
