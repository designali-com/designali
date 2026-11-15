"use client"

import * as React from "react"
import { DownloadIcon, PauseIcon, PlayIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function PausableDownload() {
  const [value, setValue] = React.useState(36)
  const [paused, setPaused] = React.useState(false)

  React.useEffect(() => {
    if (paused || value >= 100) return
    const id = setInterval(() => setValue((v) => Math.min(100, v + 2)), 300)
    return () => clearInterval(id)
  }, [paused, value])

  const done = value >= 100

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3">
      <div className="flex size-10 shrink-0 items-center justify-center bg-muted">
        <DownloadIcon className="size-4" />
      </div>
      <Progress value={value} className="min-w-0 flex-1 gap-1.5">
        <ProgressLabel className="truncate text-sm font-medium">
          studio-assets-v2.dmg
        </ProgressLabel>
        <ProgressValue />
        <span className="w-full text-xs text-muted-foreground">
          {done
            ? "Download complete"
            : paused
              ? "Paused"
              : "4.8 MB/s · about " + Math.ceil((100 - value) / 6) + "s left"}
        </span>
      </Progress>
      <Button
        variant="ghost"
        size="icon-sm"
        disabled={done}
        aria-label={paused ? "Resume" : "Pause"}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
      </Button>
    </div>
  )
}
