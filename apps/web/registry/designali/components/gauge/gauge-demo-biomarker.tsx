"use client"

import * as React from "react"

import {
  Card,
  CardContent,
} from "@workspace/ui/components/card"

import {
  Gauge,
  GaugeIndicator,
  GaugeLabel,
  GaugeRange,
  GaugeTrack,
  GaugeValueText,
} from "@/registry/designali/ui/gauge"

const biomarkers = [
  {
    label: "Muscle Health",
    value: 82,
  },
  {
    label: "Metabolic Health",
    value: 74,
  },
  {
    label: "Recovery",
    value: 61,
  },
]

export function GaugeDemoBiomarker() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {biomarkers.map((item) => (
        <Card key={item.label} className="pt-0">
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <Gauge
              value={item.value}
              size={160}
            >
              <GaugeIndicator>
                <GaugeTrack />
                <GaugeRange />
              </GaugeIndicator>

              <GaugeValueText>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-medium">
                    {item.value}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    / 100
                  </span>
                </div>
              </GaugeValueText>
            </Gauge>

            <GaugeLabel>
              {item.label}
            </GaugeLabel>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}