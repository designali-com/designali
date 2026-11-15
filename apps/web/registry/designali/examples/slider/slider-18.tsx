"use client"

import * as React from "react"
import { ClockIcon } from "lucide-react"

import { Slider } from "@workspace/ui/components/slider"

function formatHour(h: number) {
  const hour = Math.floor(h)
  const minutes = h % 1 ? "30" : "00"
  const suffix = hour >= 12 && hour < 24 ? "PM" : "AM"
  const display = hour % 12 === 0 ? 12 : hour % 12
  return display + ":" + minutes + " " + suffix
}

export default function WorkingHoursRange() {
  const [hours, setHours] = React.useState([9, 17.5])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Working hours</span>
      </div>
      <Slider
        aria-label="Working hours"
        value={hours}
        onValueChange={(value) => setHours(value as number[])}
        min={0}
        max={24}
        step={0.5}
        minStepsBetweenValues={2}
      />
      <div className="flex justify-between text-sm tabular-nums">
        <span>{formatHour(hours[0]!)}</span>
        <span className="text-muted-foreground">{hours[1]! - hours[0]!}h</span>
        <span>{formatHour(hours[1]!)}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        Teammates see you as away outside these hours.
      </p>
    </div>
  )
}
