"use client"

import * as React from "react"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function LiveUpdatesToggle() {
  const [live, setLive] = React.useState(true)
  const [visitors, setVisitors] = React.useState(1284)

  React.useEffect(() => {
    if (!live) return
    const id = setInterval(
      () => setVisitors((v) => v + Math.round(Math.random() * 10 - 4)),
      1000
    )
    return () => clearInterval(id)
  }, [live])

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          designali.com visitors
        </span>
        <Toggle
          size="sm"
          variant="outline"
          pressed={live}
          onPressedChange={setLive}
          aria-label="Live updates"
        >
          <span
            className={cn(
              "size-2 rounded-full",
              live ? "animate-pulse bg-emerald-500" : "bg-muted-foreground"
            )}
          />
          {live ? "Live" : "Paused"}
        </Toggle>
      </div>
      <p className="text-3xl font-semibold tabular-nums">
        {visitors.toLocaleString()}
      </p>
    </div>
  )
}
