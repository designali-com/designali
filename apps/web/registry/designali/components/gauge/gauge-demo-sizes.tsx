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
    label: "Small",
    size: 120,
    gap: 20,
    value: 72,
  },
  {
    label: "Medium",
    size: 180,
    gap: 15,
    value: 72,
  },
  {
    label: "Large",
    size: 240,
    gap: 10,
    value: 72,
  },
]

export function GaugeDemoSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-8">
      {gauges.map((gauge) => (
        <div
          key={gauge.label}
          className="flex flex-col items-center gap-3"
        >
          <Gauge
            value={gauge.value}
            size={gauge.size}
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