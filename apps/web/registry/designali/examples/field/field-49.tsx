"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const reasons = [
  "Too expensive",
  "Missing blocks I need",
  "Switching to another tool",
  "other",
]

export default function ConditionalOtherOptionField() {
  const [reason, setReason] = React.useState("Missing blocks I need")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Why are you canceling Designali Pro?</FieldLegend>
      <FieldDescription>Your answer helps Ali improve Designali templates and blocks.</FieldDescription>
      <RadioGroup value={reason} onValueChange={(v) => setReason(v as string)}>
        {reasons.map((r, i) => (
          <Field key={r} orientation="horizontal">
            <RadioGroupItem value={r} id={"cancel-" + i} />
            <FieldLabel htmlFor={"cancel-" + i} className="font-normal">
              {r === "other" ? "Something else" : r}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {reason === "other" && (
        <Field>
          <FieldLabel htmlFor="cancel-other" className="sr-only">
            Tell us more
          </FieldLabel>
          <Input id="cancel-other" autoFocus placeholder="Tell us more..." />
        </Field>
      )}
    </FieldSet>
  )
}
