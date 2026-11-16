"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
  Play as PlayIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

const duration = 2843

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return m + ":" + String(s).padStart(2, "0")
}

export default function AudioScrubberSlider() {
  const [position, setPosition] = React.useState([912])
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="size-10 shrink-0 bg-gradient-to-br from-amber-400 to-rose-500" />
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium">
            Episode 48: Design se code tak
          </div>
          <div className="text-xs text-muted-foreground">designali</div>
        </div>
        <Button
          size="icon"
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
      </div>
      <Slider
        aria-label="Seek"
        value={position}
        onValueChange={(value) => setPosition(value as number[])}
        max={duration}
      />
      <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
        <span>{formatTime(position[0]!)}</span>
        <span>-{formatTime(duration - position[0]!)}</span>
      </div>
    </div>
  )
}
