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

export function GaugeDemoCombined() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Gauge value={84} size={220} thickness={20} gap={20} segments={60}>
        <GaugeIndicator>
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-medium tracking-tight">84%</span>

            <span className="text-xs text-muted-foreground">Excellent</span>
          </div>
        </GaugeValueText>
      </Gauge>

      <GaugeLabel>Overall Health Score</GaugeLabel>
    </div>
  )
}
