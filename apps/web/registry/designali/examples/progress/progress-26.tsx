"use client"

import * as React from "react"
import {
  Timer as TimerIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const TOTAL = 60

export default function SessionTimeoutCountdown() {
  const [seconds, setSeconds] = React.useState(TOTAL)

  React.useEffect(() => {
    if (seconds <= 0) return
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [seconds])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <TimerIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">
          Your session is about to expire
        </span>
      </div>
      <Progress
        value={seconds}
        max={TOTAL}
        aria-label="Time remaining"
        className={cn(
          seconds < 15 && "[&_[data-slot=progress-indicator]]:bg-destructive"
        )}
      >
        <span className="text-xs text-muted-foreground">
          Signing out in {seconds}s
        </span>
      </Progress>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">
          Sign out
        </Button>
        <Button size="sm" onClick={() => setSeconds(TOTAL)}>
          Stay signed in
        </Button>
      </div>
    </div>
  )
}
