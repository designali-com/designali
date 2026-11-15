"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"

const profiles = [
  { label: "Conservative", stocks: 20 },
  { label: "Cautious", stocks: 40 },
  { label: "Balanced", stocks: 60 },
  { label: "Growth", stocks: 80 },
  { label: "Aggressive", stocks: 95 },
]

export default function RiskToleranceSlider() {
  const [level, setLevel] = React.useState([2])
  const profile = profiles[level[0]!]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">Risk tolerance</span>
        <span className="text-sm">{profile.label}</span>
      </div>
      <Slider
        aria-label="Risk tolerance"
        value={level}
        onValueChange={(value) => setLevel(value as number[])}
        max={profiles.length - 1}
      />
      <div className="flex h-2 w-full">
        <div className="bg-primary" style={{ width: profile.stocks + "%" }} />
        <div className="flex-1 bg-muted" />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{profile.stocks}% stocks</span>
        <span>{100 - profile.stocks}% bonds</span>
      </div>
    </div>
  )
}
