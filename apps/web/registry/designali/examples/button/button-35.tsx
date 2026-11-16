"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
  Play as PlayIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function MediaPlayerControls() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4">
      <div className="text-center">
        <p className="text-sm font-medium">Design se code tak</p>
        <p className="text-xs text-muted-foreground">
          Designali studio playlist
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon-sm" aria-label="Shuffle">
          <ShuffleIcon />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Previous track">
          <SkipBackIcon />
        </Button>
        <Button
          size="icon-lg"
          className="size-11 rounded-full"
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => setPlaying(!playing)}
        >
          {playing ? (
            <PauseIcon className="size-5" />
          ) : (
            <PlayIcon className="size-5" />
          )}
        </Button>
        <Button variant="ghost" size="icon" aria-label="Next track">
          <SkipForwardIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Repeat">
          <RepeatIcon />
        </Button>
      </div>
    </div>
  )
}
