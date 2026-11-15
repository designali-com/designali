"use client"

import * as React from "react"
import { ThermometerIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"

export default function ThermostatSlider() {
  const [temp, setTemp] = React.useState([21])
  const t = temp[0]!
  const mode = t < 19 ? "Cooling" : t > 23 ? "Heating" : "Comfort"

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4 border p-5">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <ThermometerIcon className="size-3.5" />
        Living room
      </div>
      <div
        className={cn(
          "text-4xl font-semibold tabular-nums",
          mode === "Cooling" && "text-sky-600 dark:text-sky-400",
          mode === "Heating" && "text-orange-600 dark:text-orange-400"
        )}
      >
        {t.toFixed(1)}&deg;C
      </div>
      <Badge variant="outline">{mode}</Badge>
      <Slider
        aria-label="Target temperature"
        value={temp}
        onValueChange={(value) => setTemp(value as number[])}
        min={15}
        max={28}
        step={0.5}
      />
    </div>
  )
}
