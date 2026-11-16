"use client"

import * as React from "react"
import {
  Scissors as ScissorsIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Slider } from "@workspace/ui/components/slider"

const length = 94

function stamp(s: number) {
  return (
    "0:" +
    String(Math.floor(s / 60)).padStart(2, "0") +
    ":" +
    String(s % 60).padStart(2, "0")
  )
}

export default function VideoTrimRange() {
  const [trim, setTrim] = React.useState([12, 68])

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <div className="flex h-10 overflow-hidden border">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="flex-1 border-r last:border-r-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(" +
                (200 + i * 12) +
                " 60% 55%), hsl(" +
                (230 + i * 12) +
                " 50% 35%))",
            }}
          />
        ))}
      </div>
      <Slider
        aria-label="Trim clip"
        value={trim}
        onValueChange={(value) => setTrim(value as number[])}
        max={length}
        minStepsBetweenValues={3}
      />
      <div className="flex items-center justify-between text-xs tabular-nums">
        <span>In {stamp(trim[0]!)}</span>
        <Badge variant="secondary">
          <ScissorsIcon />
          {trim[1]! - trim[0]!}s
        </Badge>
        <span>Out {stamp(trim[1]!)}</span>
      </div>
    </div>
  )
}
