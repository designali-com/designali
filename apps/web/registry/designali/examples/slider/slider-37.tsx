"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"

const tiers = ["Free", "Standard", "Volume", "Enterprise"]

export default function UsageTierBreakpoints() {
  const [points, setPoints] = React.useState([10, 50, 200])
  const bounds = [0, ...points, 500]

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div>
        <div className="text-sm font-medium">API pricing tiers</div>
        <div className="text-xs text-muted-foreground">
          Drag to set tier boundaries (thousand requests).
        </div>
      </div>
      <Slider
        aria-label="Tier breakpoints"
        value={points}
        onValueChange={(value) => setPoints(value as number[])}
        max={500}
        step={10}
        minStepsBetweenValues={2}
      />
      <div className="flex flex-col gap-1.5">
        {tiers.map((tier, i) => (
          <div key={tier} className="flex justify-between text-xs">
            <span>{tier}</span>
            <span className="text-muted-foreground tabular-nums">
              {bounds[i]}k -{" "}
              {i === tiers.length - 1 ? "unlimited" : bounds[i + 1] + "k"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
