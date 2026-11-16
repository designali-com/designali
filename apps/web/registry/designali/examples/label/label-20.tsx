"use client"

import * as React from "react"
import {
  Volume2 as Volume2Icon,
} from "@designali/icons"

import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"

export default function SliderValueLabel() {
  const [value, setValue] = React.useState(64)

  return (
    <div className="grid w-full max-w-sm gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="volume">
          <Volume2Icon className="size-3.5" />
          Notification volume
        </Label>
        <span className="text-xs text-muted-foreground tabular-nums">
          {value}%
        </span>
      </div>
      <Slider
        id="volume"
        value={value}
        onValueChange={(v) => setValue(Array.isArray(v) ? v[0]! : v)}
        max={100}
      />
    </div>
  )
}
