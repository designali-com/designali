"use client"

import * as React from "react"

import {
  Gauge,
  GaugeIndicator,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

const gauges = [
  {
    label: "Thin",
    thickness: 1,
    gap: 4,
  },
  {
    label: "Default",
    thickness: 4,
    gap: 10,
  },
  {
    label: "Medium",
    thickness: 6,
    gap: 15,
  },
  {
    label: "Thick",
    thickness: 10,
    gap: 20,
  },
]

export function GaugeDemoThickness() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {gauges.map((gauge) => (
        <div key={gauge.label} className="flex flex-col items-center gap-3">
          <Gauge
            value={gauge.thickness}
            min={0}
            max={12}
            size={160}
            thickness={gauge.thickness}
            gap={gauge.gap}
          >
            <GaugeIndicator>
              <GaugeTrack />
              <GaugeRange />
            </GaugeIndicator>

            <GaugeValueText />
          </Gauge>

          <span className="text-sm text-muted-foreground">{gauge.label}</span>
        </div>
      ))}
    </div>
  )
}
