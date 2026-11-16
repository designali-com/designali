"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
  MessageSquare as MessageSquareIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Textarea } from "@workspace/ui/components/textarea"

const scores = [1, 2, 3, 4, 5]

export default function FeedbackFormSheet() {
  const [score, setScore] = React.useState<number | null>(null)
  const [sent, setSent] = React.useState(false)

  return (
    <Sheet onOpenChange={(open) => open && setSent(false)}>
      <SheetTrigger render={<Button variant="outline" />}>
        <MessageSquareIcon data-icon="inline-start" />
        Give feedback
      </SheetTrigger>
      <SheetContent>
        {sent ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
            <CircleCheckIcon className="size-8 text-primary" />
            <SheetTitle>Thanks for the feedback</SheetTitle>
            <SheetDescription>
              Our product team reads every response.
            </SheetDescription>
            <SheetClose render={<Button variant="outline" className="mt-2" />}>
              Close
            </SheetClose>
          </div>
        ) : (
          <>
            <SheetHeader>
              <SheetTitle>How was your experience?</SheetTitle>
              <SheetDescription>
                Rate the new Designali blocks.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 px-4">
              <div className="grid grid-cols-5 gap-1">
                {scores.map((s) => (
                  <Button
                    key={s}
                    variant={score === s ? "default" : "outline"}
                    onClick={() => setScore(s)}
                  >
                    {s}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Not useful</span>
                <span>Very useful</span>
              </div>
              <Field>
                <FieldLabel htmlFor="feedback-text">
                  What could be better?
                </FieldLabel>
                <Textarea
                  id="feedback-text"
                  rows={4}
                  placeholder="Tell us more…"
                />
              </Field>
            </div>
            <SheetFooter>
              <Button disabled={score === null} onClick={() => setSent(true)}>
                Submit feedback
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
