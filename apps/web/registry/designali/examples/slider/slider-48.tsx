"use client"

import * as React from "react"
import {
  Moon as MoonIcon,
  Sunrise as SunriseIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Slider } from "@workspace/ui/components/slider"

function clock(v: number) {
  const h = Math.floor(v) % 24
  const m = v % 1 ? "30" : "00"
  return String(h).padStart(2, "0") + ":" + m
}

export default function SleepScheduleRange() {
  const [range, setRange] = React.useState([22.5, 30.5])
  const hours = range[1]! - range[0]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2">
          <MoonIcon className="size-4 text-indigo-500" />
          <div>
            <div className="text-[10px] text-muted-foreground uppercase">
              Bedtime
            </div>
            <div className="font-mono text-sm">{clock(range[0]!)}</div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 text-right">
          <div>
            <div className="text-[10px] text-muted-foreground uppercase">
              Wake up
            </div>
            <div className="font-mono text-sm">{clock(range[1]!)}</div>
          </div>
          <SunriseIcon className="size-4 text-amber-500" />
        </div>
      </div>
      <Slider
        aria-label="Sleep schedule"
        className="[&_[data-slot=slider-range]]:bg-indigo-500"
        value={range}
        onValueChange={(value) => setRange(value as number[])}
        min={20}
        max={34}
        step={0.5}
        minStepsBetweenValues={8}
      />
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">{hours} hours in bed</span>
        <Badge variant={hours >= 7.5 ? "secondary" : "outline"}>
          {hours >= 7.5 ? "Meets goal" : "Below 7.5h goal"}
        </Badge>
      </div>
    </div>
  )
}
