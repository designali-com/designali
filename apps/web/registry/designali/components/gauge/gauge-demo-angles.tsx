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
    label: "Full Circle",
    startAngle: 0,
    endAngle: 360,
  },
  {
    label: "Semicircle",
    startAngle: -90,
    endAngle: 90,
  },
  {
    label: "Three Quarter",
    startAngle: -135,
    endAngle: 135,
  },
]

export function GaugeDemoAngles() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {gauges.map((gauge) => (
        <div
          key={gauge.label}
          className="flex flex-col items-center gap-3"
        >
          <Gauge
            value={70}
            size={180}
            gap={20}
            startAngle={gauge.startAngle}
            endAngle={gauge.endAngle}
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