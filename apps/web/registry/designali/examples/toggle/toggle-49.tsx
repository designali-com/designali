"use client"

import * as React from "react"
import {
  Circle as CircleIcon,
  Square as SquareIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function RecordingToggle() {
  const [recording, setRecording] = React.useState(false)
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    if (!recording) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [recording])

  const time =
    String(Math.floor(seconds / 60)).padStart(2, "0") +
    ":" +
    String(seconds % 60).padStart(2, "0")

  return (
    <div className="flex items-center gap-3 border p-3">
      <Toggle
        variant="outline"
        pressed={recording}
        onPressedChange={(on) => {
          if (on) setSeconds(0)
          setRecording(on)
        }}
        className="aria-pressed:border-destructive aria-pressed:bg-destructive aria-pressed:text-white"
      >
        {recording ? (
          <SquareIcon className="fill-current" />
        ) : (
          <CircleIcon className="fill-destructive text-destructive" />
        )}
        {recording ? "Stop" : "Record"}
      </Toggle>
      <span
        className={cn(
          "font-sans text-sm tabular-nums",
          !recording && "text-muted-foreground"
        )}
      >
        {time}
      </span>
    </div>
  )
}
