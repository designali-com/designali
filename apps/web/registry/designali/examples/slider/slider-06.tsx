"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"

export default function PriceRangeFilter() {
  const [range, setRange] = React.useState([120, 480])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Price</span>
        <span className="text-xs text-muted-foreground">218 products</span>
      </div>
      <Slider
        aria-label="Price range"
        value={range}
        onValueChange={(value) => setRange(value as number[])}
        min={0}
        max={800}
        step={10}
        minStepsBetweenValues={5}
      />
      <div className="grid grid-cols-2 gap-2">
        <div className="border px-3 py-2">
          <div className="text-[10px] text-muted-foreground uppercase">Min</div>
          <div className="text-sm tabular-nums">${range[0]}</div>
        </div>
        <div className="border px-3 py-2">
          <div className="text-[10px] text-muted-foreground uppercase">Max</div>
          <div className="text-sm tabular-nums">${range[1]}</div>
        </div>
      </div>
    </div>
  )
}
