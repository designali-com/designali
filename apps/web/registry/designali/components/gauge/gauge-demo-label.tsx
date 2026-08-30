"use client"

import * as React from "react"

import {
  Gauge,
  GaugeIndicator,
  GaugeLabel,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

export function GaugeDemoLabel() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Gauge value={78} size={190}>
        <GaugeIndicator>
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText />
      </Gauge>

      <GaugeLabel>Muscle Health</GaugeLabel>
    </div>
  )
}