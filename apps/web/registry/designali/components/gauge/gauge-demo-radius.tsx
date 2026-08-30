"use client"

import * as React from "react"

import {
  Gauge,
  GaugeIndicator,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

export function GaugeDemoRadius() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-3">
        <Gauge
          value={72}
          size={180}
          tickInnerRadius={77}
          tickOuterRadius={88}
        >
          <GaugeIndicator>
            <GaugeTrack />
            <GaugeRange />
          </GaugeIndicator>

          <GaugeValueText />
        </Gauge>

        <span className="text-sm text-muted-foreground">
          Compact
        </span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <Gauge
          value={72}
          size={180}
          tickInnerRadius={35}
          tickOuterRadius={88}
        >
          <GaugeIndicator>
            <GaugeTrack />
            <GaugeRange />
          </GaugeIndicator>

          <GaugeValueText />
        </Gauge>

        <span className="text-sm text-muted-foreground">
          Wide
        </span>
      </div>
    </div>
  )
}