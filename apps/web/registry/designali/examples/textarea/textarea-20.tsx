"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Textarea } from "@workspace/ui/components/textarea"

const reasons = [
  "Too expensive",
  "Missing blocks I need",
  "Switching to another tool",
  "Other",
]

export default function CancellationReasonTextarea() {
  const [reason, setReason] = React.useState("Too expensive")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <p className="text-sm font-medium">Why are you cancelling?</p>
      <RadioGroup value={reason} onValueChange={(v) => setReason(v as string)}>
        {reasons.map((r) => (
          <Field key={r} orientation="horizontal">
            <RadioGroupItem value={r} id={"cr-" + r} />
            <FieldLabel htmlFor={"cr-" + r} className="font-normal">
              {r}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {reason === "Other" && (
        <Textarea
          autoFocus
          required
          placeholder="Tell us a bit more…"
          aria-label="Other reason"
        />
      )}
      <Button variant="destructive" size="sm">
        Cancel Designali Pro
      </Button>
    </div>
  )
}
