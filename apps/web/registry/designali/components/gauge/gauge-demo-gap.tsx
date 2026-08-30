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
    label: "No Gap", 
  },
  {
    label: "20 Gap",
    gap: 20,
  },
  {
    label: "40 Gap",
    gap: 40,
  },
  {
    label: "80 Gap",
    gap: 80,
  },
]

export function GaugeDemoGap() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {gauges.map((gauge) => (
        <div
          key={gauge.label}
          className="flex flex-col items-center gap-3"
        >
          <Gauge
            value={75}
            size={160}
            gap={gauge.gap}
          >
            <GaugeIndicator>
              <GaugeTrack />
              <GaugeRange />
            </GaugeIndicator>

            <GaugeValueText />
          </Gauge>

          <span className="text-sm text-muted-foreground">
            {gauge.label}
          </span>
        </div>
      ))}
    </div>
  )
}