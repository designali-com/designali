"use client"

import * as React from "react"
import {
  EyeOff as EyeOffIcon,
} from "@designali/icons"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function PrivacyToggleWithCountdown() {
  const [seconds, setSeconds] = React.useState(0)
  const active = seconds > 0

  React.useEffect(() => {
    if (!active) return
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [active, seconds])

  return (
    <div className="flex w-full max-w-xs items-center gap-3 border p-4">
      <EyeOffIcon
        className={cn(
          "size-5",
          active ? "text-foreground" : "text-muted-foreground"
        )}
      />
      <div className="flex-1">
        <Label htmlFor="incognito">Pause browsing history</Label>
        <p className="text-xs text-muted-foreground tabular-nums">
          {active ? "Resumes in " + seconds + "s" : "Viewed Designali blocks are being recorded"}
        </p>
      </div>
      <Switch
        id="incognito"
        checked={active}
        onCheckedChange={(checked) => setSeconds(checked ? 30 : 0)}
      />
    </div>
  )
}
