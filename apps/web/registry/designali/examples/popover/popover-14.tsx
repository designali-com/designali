"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
  Frown as FrownIcon,
  Meh as MehIcon,
  MessageSquare as MessageSquareIcon,
  Smile as SmileIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Textarea } from "@workspace/ui/components/textarea"

const moods = [
  { value: "sad", icon: FrownIcon },
  { value: "neutral", icon: MehIcon },
  { value: "happy", icon: SmileIcon },
]

export default function FeedbackPopover() {
  const [mood, setMood] = React.useState<string | null>(null)
  const [sent, setSent] = React.useState(false)

  return (
    <Popover
      onOpenChangeComplete={(open) => !open && (setSent(false), setMood(null))}
    >
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <MessageSquareIcon data-icon="inline-start" />
        Feedback
      </PopoverTrigger>
      <PopoverContent className="w-72">
        {sent ? (
          <div className="flex flex-col items-center gap-1.5 py-4 text-center">
            <CircleCheckIcon className="size-6 text-emerald-600 dark:text-emerald-400" />
            <PopoverTitle>Thanks for the feedback!</PopoverTitle>
            <PopoverDescription>We read every message.</PopoverDescription>
          </div>
        ) : (
          <>
            <PopoverHeader>
              <PopoverTitle>How are the new Designali blocks?</PopoverTitle>
            </PopoverHeader>
            <div className="flex gap-1">
              {moods.map((m) => (
                <Button
                  key={m.value}
                  variant={mood === m.value ? "secondary" : "ghost"}
                  size="icon"
                  aria-label={m.value}
                  aria-pressed={mood === m.value}
                  onClick={() => setMood(m.value)}
                >
                  <m.icon />
                </Button>
              ))}
            </div>
            <Textarea
              placeholder="Tell us more (optional)"
              className="min-h-20"
            />
            <Button size="sm" disabled={!mood} onClick={() => setSent(true)}>
              Send feedback
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
