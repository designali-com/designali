"use client"

import * as React from "react"
import {
  Frown as FrownIcon,
  Meh as MehIcon,
  MessageSquare as MessageSquareIcon,
  Smile as SmileIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const moods = [
  { value: "bad", label: "Not great", icon: FrownIcon },
  { value: "ok", label: "Okay", icon: MehIcon },
  { value: "good", label: "Love it", icon: SmileIcon },
]

export default function ProductFeedbackDialog() {
  const [mood, setMood] = React.useState<string[]>([])

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <MessageSquareIcon data-icon="inline-start" />
        Give feedback
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How are the new Designali blocks?</DialogTitle>
          <DialogDescription>
            Your answer goes straight to Ali Imam.
          </DialogDescription>
        </DialogHeader>
        <ToggleGroup
          variant="outline"
          value={mood}
          onValueChange={(value) => setMood(value.map(String))}
          className="w-full"
        >
          {moods.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              className="h-16 flex-1 flex-col gap-1"
            >
              <item.icon />
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Field>
          <FieldLabel htmlFor="feedback-comment">
            Anything else? (optional)
          </FieldLabel>
          <Textarea
            id="feedback-comment"
            placeholder="Tell us what worked or what got in the way."
          />
        </Field>
        <DialogFooter>
          <DialogClose render={<Button disabled={mood.length === 0} />}>
            Send feedback
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
