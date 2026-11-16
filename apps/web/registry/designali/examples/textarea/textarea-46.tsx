"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function CharacterRingComposer() {
  const [text, setText] = React.useState(
    "Just shipped 460+ new blocks on designali.com"
  )
  const max = 140
  const pct = Math.min(1, text.length / max)
  const r = 9
  const c = 2 * Math.PI * r
  const left = max - text.length

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-3">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-0 text-sm focus-visible:ring-0"
        aria-label="Post"
      />
      <div className="flex items-center justify-end gap-3 border-t pt-2">
        <div className="flex items-center gap-1.5">
          {left <= 20 && (
            <span
              className={cn(
                "text-xs tabular-nums",
                left < 0 ? "text-destructive" : "text-primary"
              )}
            >
              {left}
            </span>
          )}
          <svg viewBox="0 0 24 24" className="size-6 -rotate-90">
            <circle
              cx="12"
              cy="12"
              r={r}
              fill="none"
              strokeWidth="2.5"
              className="stroke-muted"
            />
            <circle
              cx="12"
              cy="12"
              r={r}
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - pct)}
              className={cn(
                left < 0
                  ? "stroke-destructive"
                  : left <= 20
                    ? "stroke-primary"
                    : "stroke-primary"
              )}
            />
          </svg>
        </div>
        <Button size="sm" disabled={!text.trim() || left < 0}>
          Post
        </Button>
      </div>
    </div>
  )
}
