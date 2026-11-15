"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

export default function RecordToggleButton() {
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
    <Button
      variant={recording ? "destructive" : "outline"}
      onClick={() => {
        setRecording(!recording)
        if (recording) setSeconds(0)
      }}
      className="w-40"
    >
      <span
        className={cn(
          "size-2.5 rounded-full bg-destructive",
          recording && "animate-pulse"
        )}
      />
      {recording ? (
        <span className="tabular-nums">Stop · {time}</span>
      ) : (
        "Start recording"
      )}
    </Button>
  )
}
