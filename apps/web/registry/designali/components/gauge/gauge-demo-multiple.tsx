"use client"

import * as React from "react"

import {
  Gauge,
  GaugeIndicator,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

const metrics = [
  {
    label: "Brand",
    value: 86,
  },
  {
    label: "UI/UX",
    value: 72,
  },
  {
    label: "Web Dev",
    value: 64,
  },
  {
    label: "Motion",
    value: 91,
  },
]

export function GaugeDemoMultiple() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col items-center gap-3">
          <Gauge value={metric.value} size={130} segments={40}>
            <GaugeIndicator>
              <GaugeTrack />
              <GaugeRange />
            </GaugeIndicator>

            <GaugeValueText className="text-2xl" />
          </Gauge>

          <span className="text-sm font-medium">{metric.label}</span>
        </div>
      ))}
    </div>
  )
}
