"use client"

import * as React from "react"
import {
  RotateCcw as RotateCcwIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function ResendCountdownButton() {
  const [seconds, setSeconds] = React.useState(30)

  React.useEffect(() => {
    if (seconds === 0) return
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [seconds])

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="text-xs text-muted-foreground">
        We sent a 6-digit code to j•••@example.com
      </p>
      <Button
        variant="ghost"
        size="sm"
        disabled={seconds > 0}
        onClick={() => setSeconds(30)}
      >
        <RotateCcwIcon data-icon="inline-start" />
        {seconds > 0 ? "Resend code in " + seconds + "s" : "Resend code"}
      </Button>
    </div>
  )
}
