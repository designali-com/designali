"use client"

import * as React from "react"
import {
  PauseIcon,
  PlayIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export default function MediaPlayerControls() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4">
      <div className="text-center">
        <p className="text-sm font-medium">Low Tide Sessions</p>
        <p className="text-xs text-muted-foreground">
          Marlow &amp; the Lanterns
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
