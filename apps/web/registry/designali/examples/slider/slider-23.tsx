"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"

export default function HueGradientSlider() {
  const [hue, setHue] = React.useState([210])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label>Accent hue</Label>
        <div className="flex items-center gap-2">
          <span
            className="size-4 border"
            style={{ backgroundColor: "hsl(" + hue[0] + " 80% 55%)" }}
          />
          <span className="text-xs text-muted-foreground tabular-nums">
            {hue[0]}&deg;
          </span>
        </div>
      </div>
      <Slider
        aria-label="Accent hue"
        className="[&_[data-slot=slider-range]]:bg-transparent [&_[data-slot=slider-thumb]]:size-4 [&_[data-slot=slider-track]]:h-3! [&_[data-slot=slider-track]]:bg-[linear-gradient(to_right,red,yellow,lime,cyan,blue,magenta,red)]"
        value={hue}
        onValueChange={(value) => setHue(value as number[])}
        max={360}
      />
    </div>
  )
}
