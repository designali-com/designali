"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
  Play as PlayIcon,
  Repeat1 as Repeat1Icon,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toggle } from "@workspace/ui/components/toggle"

export default function MusicPlayerModeToggles() {
  const [playing, setPlaying] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="size-12 shrink-0 bg-gradient-to-br from-primary to-primary" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">Night Drive</p>
          <p className="truncate text-xs text-muted-foreground">
            The Paper Lanterns
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Toggle
          size="sm"
          aria-label="Shuffle"
          className="aria-pressed:text-primary"
        >
          <ShuffleIcon />
        </Toggle>
        <Button variant="ghost" size="icon-sm" aria-label="Previous">
          <SkipBackIcon />
        </Button>
        <Toggle
          variant="outline"
          size="lg"
          pressed={playing}
          onPressedChange={setPlaying}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Toggle>
        <Button variant="ghost" size="icon-sm" aria-label="Next">
          <SkipForwardIcon />
        </Button>
        <Toggle
          size="sm"
          aria-label="Repeat"
          className="aria-pressed:text-primary"
        >
          <Repeat1Icon />
        </Toggle>
      </div>
    </div>
  )
}
