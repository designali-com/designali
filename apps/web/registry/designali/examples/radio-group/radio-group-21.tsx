"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Textarea } from "@workspace/ui/components/textarea"

const reasons = [
  { value: "price", label: "It's too expensive" },
  { value: "features", label: "Missing features I need" },
  { value: "switch", label: "Switching to another tool" },
  { value: "other", label: "Other" },
]

export default function CancellationReasonOther() {
  const [reason, setReason] = React.useState("price")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Why are you cancelling?</FieldLegend>
      <FieldDescription>Your feedback helps us improve.</FieldDescription>
      <RadioGroup value={reason} onValueChange={(v) => setReason(v as string)}>
        {reasons.map((r) => (
          <Field key={r.value} orientation="horizontal">
            <RadioGroupItem value={r.value} id={"cancel-" + r.value} />
            <FieldLabel htmlFor={"cancel-" + r.value} className="font-normal">
              {r.label}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {reason === "other" && (
        <Textarea
          aria-label="Tell us more"
          placeholder="Tell us a little more..."
          className="min-h-20"
        />
      )}
      <Button variant="destructive" className="self-start">
        Cancel subscription
      </Button>
    </FieldSet>
  )
}
