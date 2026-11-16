"use client"

import * as React from "react"
import {
  Frown as FrownIcon,
  Meh as MehIcon,
  Smile as SmileIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

const moods = [
  { value: "bad", label: "Bad", icon: FrownIcon },
  { value: "ok", label: "Okay", icon: MehIcon },
  { value: "good", label: "Good", icon: SmileIcon },
]

export default function FeedbackRatingTextarea() {
  const [mood, setMood] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <p className="text-sm font-medium">How was your designali.com checkout?</p>
      <div className="flex gap-2">
        {moods.map((m) => (
          <Button
            key={m.value}
            variant={mood === m.value ? "default" : "outline"}
            size="sm"
            onClick={() => setMood(m.value)}
            aria-pressed={mood === m.value}
          >
            <m.icon data-icon="inline-start" />
            {m.label}
          </Button>
        ))}
      </div>
      <Textarea
        disabled={!mood}
        placeholder={
          mood === "bad"
            ? "Sorry to hear that. What went wrong?"
            : "Anything we could do better?"
        }
        aria-label="Feedback details"
      />
      <Button size="sm" disabled={!mood} className="self-end">
        Send feedback
      </Button>
    </div>
  )
}
