"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"

export default function ThumbCollisionSwap() {
  const [values, setValues] = React.useState([320, 540])
  const [low, high] = [...values].sort((a, b) => a - b)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="text-sm font-medium">Latency comparison window</div>
      <Slider
        aria-label="Latency window"
        value={values}
        onValueChange={(value) => setValues(value as number[])}
        thumbCollisionBehavior="swap"
        max={1000}
        step={10}
      />
      <div className="flex justify-between text-xs tabular-nums">
        <span>p50 {low} ms</span>
        <span className="text-muted-foreground">&Delta; {high! - low!} ms</span>
        <span>p99 {high} ms</span>
      </div>
    </div>
  )
}
