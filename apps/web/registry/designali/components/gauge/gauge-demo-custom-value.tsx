"use client"

import * as React from "react"

import {
  Gauge,
  GaugeIndicator,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

export function GaugeDemoCustomValue() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      <Gauge value={72} getValueText={(value) => `${value} BPM`}>
        <GaugeIndicator>
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText />
      </Gauge>

      <Gauge value={4} min={0} max={10} getValueText={(value) => `${value}/10`}>
        <GaugeIndicator>
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText />
      </Gauge>

      <Gauge
        value={42}
        min={0}
        max={60}
        getValueText={(value) => `${value} min`}
      >
        <GaugeIndicator>
          <GaugeTrack />
          <GaugeRange />
        </GaugeIndicator>

        <GaugeValueText />
      </Gauge>
    </div>
  )
}
