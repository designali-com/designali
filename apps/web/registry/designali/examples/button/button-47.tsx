"use client"

import * as React from "react"
import {
  CalendarRange as CalendarRangeIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

const presets = ["Today", "7D", "30D", "90D", "YTD"]

export default function DateRangePresetButtons() {
  const [range, setRange] = React.useState("30D")

  return (
    <div className="flex items-center gap-2">
      <CalendarRangeIcon className="size-4 text-muted-foreground" />
      <div className="flex border p-0.5">
        {presets.map((preset) => (
          <Button
            key={preset}
            size="xs"
            variant={range === preset ? "secondary" : "ghost"}
            aria-pressed={range === preset}
            onClick={() => setRange(preset)}
          >
            {preset}
          </Button>
        ))}
      </div>
    </div>
  )
}
