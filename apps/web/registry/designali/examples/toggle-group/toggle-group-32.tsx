"use client"

import * as React from "react"
import {
  CloudSun as CloudSunIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const forecast = [
  { day: "Mon", c: 18 },
  { day: "Tue", c: 21 },
  { day: "Wed", c: 16 },
  { day: "Thu", c: 23 },
]

export default function TemperatureUnitToggleGroup() {
  const [unit, setUnit] = React.useState("c")
  const fmt = (c: number) => (unit === "c" ? c : Math.round(c * 1.8 + 32)) + "°"

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CloudSunIcon className="size-6 text-amber-500" />
          <span className="text-2xl font-semibold">{fmt(19)}</span>
        </div>
        <ToggleGroup
          size="sm"
          variant="outline"
          spacing={0}
          value={[unit]}
          onValueChange={(next) => next[0] && setUnit(next[0])}
        >
          <ToggleGroupItem value="c">°C</ToggleGroupItem>
          <ToggleGroupItem value="f">°F</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="grid grid-cols-4 text-center text-xs">
        {forecast.map((f) => (
          <div key={f.day} className="flex flex-col gap-1">
            <span className="text-muted-foreground">{f.day}</span>
            <span className="font-medium">{fmt(f.c)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
