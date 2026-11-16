"use client"

import * as React from "react"
import {
  Check as CheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toggle } from "@workspace/ui/components/toggle"

const topics = [
  "Design",
  "Startups",
  "AI",
  "Climate",
  "Finance",
  "Travel",
  "Gaming",
  "Music",
  "Science",
]

export default function InterestPickerToggles() {
  const [picked, setPicked] = React.useState<string[]>([])
  const remaining = Math.max(0, 3 - picked.length)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div>
        <p className="text-sm font-medium">What are you into?</p>
        <p className="text-xs text-muted-foreground">
          Pick at least 3 topics to personalise your feed.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <Toggle
            key={t}
            variant="outline"
            size="sm"
            pressed={picked.includes(t)}
            onPressedChange={(on) =>
              setPicked((prev) =>
                on ? [...prev, t] : prev.filter((x) => x !== t)
              )
            }
            className="aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground"
          >
            {picked.includes(t) && <CheckIcon />}
            {t}
          </Toggle>
        ))}
      </div>
      <Button disabled={remaining > 0}>
        {remaining > 0 ? "Pick " + remaining + " more" : "Continue"}
      </Button>
    </div>
  )
}
