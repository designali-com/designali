"use client"

import * as React from "react"
import {
  Headphones as HeadphonesIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const speeds = ["0.75", "1", "1.25", "1.5", "2"]

export default function PlaybackSpeedToggleGroup() {
  const [speed, setSpeed] = React.useState("1")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center bg-gradient-to-br from-primary to-primary text-white">
          <HeadphonesIcon className="size-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium">
            Ep. 42 - Design se code tak
          </span>
          <span className="text-xs text-muted-foreground">
            Playing at {speed}x
          </span>
        </div>
      </div>
      <ToggleGroup
        size="sm"
        variant="outline"
        spacing={1}
        value={[speed]}
        onValueChange={(next) => next[0] && setSpeed(next[0])}
      >
        {speeds.map((s) => (
          <ToggleGroupItem key={s} value={s} className="tabular-nums">
            {s}x
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
