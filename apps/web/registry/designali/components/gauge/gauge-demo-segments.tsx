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
    label: "4 Segments",
    segments: 4,
  },
  {
    label: "8 Segments",
    segments: 8,
  },
  {
    label: "12 Segments",
    segments: 12,
  },
  {
    label: "24 Segments",
    segments: 24,
  },
]

export function GaugeDemoSegments() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {gauges.map((gauge) => (
        <div
          key={gauge.label}
          className="flex flex-col items-center gap-3"
        >
          <Gauge
            value={65}
            size={160}
            segments={gauge.segments}
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