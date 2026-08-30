"use client"

import * as React from "react"

import {
  Gauge,
  GaugeIndicator,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

const ranges = [
  {
    label: "0–100",
    min: 0,
    max: 100,
    value: 72,
  },
  {
    label: "0–10",
    min: 0,
    max: 10,
    value: 7,
  },
  {
    label: "50–150",
    min: 50,
    max: 150,
    value: 120,
  },
]

export function GaugeDemoRange() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {ranges.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-3"
        >
          <Gauge
            value={item.value}
            min={item.min}
            max={item.max}
            size={170}
            getValueText={(value, min, max) => {
              const percentage =
                ((value - min) / (max - min)) * 100

              return `${Math.round(percentage)}%`
            }}
          >
            <GaugeIndicator>
              <GaugeTrack />
              <GaugeRange />
            </GaugeIndicator>

            <GaugeValueText />
          </Gauge>

          <span className="text-sm text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}