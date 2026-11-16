"use client"

import * as React from "react"
import {
  Volume1 as Volume1Icon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

export default function VolumeControlSlider() {
  const [volume, setVolume] = React.useState([64])
  const [muted, setMuted] = React.useState(false)
  const level = muted ? 0 : volume[0]!
  const Icon =
    level === 0 ? VolumeXIcon : level < 50 ? Volume1Icon : Volume2Icon

  return (
    <div className="flex w-full max-w-xs items-center gap-3">
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={muted ? "Unmute" : "Mute"}
        onClick={() => setMuted((m) => !m)}
      >
        <Icon />
      </Button>
      <Slider
        aria-label="Volume"
        value={muted ? [0] : volume}
        onValueChange={(value) => {
          setMuted(false)
          setVolume(value as number[])
        }}
        max={100}
      />
      <span className="w-8 text-right text-xs text-muted-foreground tabular-nums">
        {level}
      </span>
    </div>
  )
}
