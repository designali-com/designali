"use client"

import * as React from "react"

import {
  Gauge,
  GaugeIndicator,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

export function GaugeDemoCustomContent() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      <Gauge value={82} size={180}>
        <GaugeIndicator>
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-medium tracking-tight">82</span>

            <span className="text-xs font-normal text-muted-foreground">
              Score
            </span>
          </div>
        </GaugeValueText>
      </Gauge>

      <Gauge value={64} size={180}>
        <GaugeIndicator>
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-medium">64%</span>

            <span className="text-xs font-normal text-muted-foreground">
              Healthy
            </span>
          </div>
        </GaugeValueText>
      </Gauge>
    </div>
  )
}
