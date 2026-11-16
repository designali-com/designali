"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
  Play as PlayIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"

const DURATION = 2520

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return m + ":" + String(s).padStart(2, "0")
}

export default function PodcastPlayerScrubber() {
  const [position, setPosition] = React.useState(1134)
  const [playing, setPlaying] = React.useState(false)

  React.useEffect(() => {
    if (!playing) return
    const id = setInterval(
      () => setPosition((p) => Math.min(DURATION, p + 1)),
      1000
    )
    return () => clearInterval(id)
  }, [playing])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="size-12 shrink-0 bg-gradient-to-br from-primary/80 to-primary/20" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">
            Ep. 41 &middot; Design se code tak
          </p>
          <p className="text-xs text-muted-foreground">designali</p>
        </div>
      </div>
      <Progress
        value={position}
        max={DURATION}
        aria-label="Playback position"
        className="gap-1.5"
      >
        <div className="order-last flex w-full justify-between text-[11px] text-muted-foreground tabular-nums">
          <span>{formatTime(position)}</span>
          <span>-{formatTime(DURATION - position)}</span>
        </div>
      </Progress>
      <div className="flex justify-center gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Back 15 seconds"
          onClick={() => setPosition((p) => Math.max(0, p - 15))}
        >
          <RotateCcwIcon />
        </Button>
        <Button
          size="icon"
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Forward 30 seconds"
          onClick={() => setPosition((p) => Math.min(DURATION, p + 30))}
        >
          <RotateCwIcon />
        </Button>
      </div>
    </div>
  )
}
