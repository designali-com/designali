"use client"

import * as React from "react"
import { GaugeIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

const presets = [0.5, 1, 1.5, 2]

export default function PlaybackSpeedSlider() {
  const [speed, setSpeed] = React.useState([1])

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm">
          <GaugeIcon className="size-4" />
          Playback speed
        </span>
        <span className="font-mono text-sm tabular-nums">
          {speed[0]!.toFixed(2)}x
        </span>
      </div>
      <Slider
        aria-label="Playback speed"
        value={speed}
        onValueChange={(value) => setSpeed(value as number[])}
        min={0.25}
        max={2}
        step={0.25}
      />
      <div className="grid grid-cols-4 gap-1">
        {presets.map((p) => (
          <Button
            key={p}
            size="xs"
            variant={speed[0] === p ? "secondary" : "ghost"}
            onClick={() => setSpeed([p])}
          >
            {p}x
          </Button>
        ))}
      </div>
    </div>
  )
}
