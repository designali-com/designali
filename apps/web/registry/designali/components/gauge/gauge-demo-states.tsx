"use client"

import * as React from "react"

import {
  Gauge,
  GaugeIndicator,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

const states = [
  {
    label: "Indeterminate",
    value: null,
  },
  {
    label: "Loading",
    value: 64,
  },
  {
    label: "Complete",
    value: 100,
  },
]

export function GaugeDemoStates() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {states.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-3">
          <Gauge value={item.value} size={170}>
            <GaugeIndicator>
              <GaugeTrack />
              <GaugeRange />
            </GaugeIndicator>

            <GaugeValueText>
              {item.value === null ? "—" : `${item.value}%`}
            </GaugeValueText>
          </Gauge>

          <span className="text-sm text-muted-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
