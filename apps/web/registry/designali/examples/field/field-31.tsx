"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function MeetingTimeRangeFields() {
  const [start, setStart] = React.useState("10:00")
  const [end, setEnd] = React.useState("09:30")
  const invalid = end <= start

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Discovery call with Ali Imam</FieldLegend>
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="meet-start">Starts</FieldLabel>
          <Input
            id="meet-start"
            type="time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </Field>
        <Field data-invalid={invalid}>
          <FieldLabel htmlFor="meet-end">Ends</FieldLabel>
          <Input
            id="meet-end"
            type="time"
            value={end}
            aria-invalid={invalid}
            onChange={(e) => setEnd(e.target.value)}
          />
        </Field>
      </div>
      {invalid ? (
        <FieldError>End time must be after the start time.</FieldError>
      ) : (
        <FieldDescription>Booked through the Designali studio calendar.</FieldDescription>
      )}
    </FieldSet>
  )
}
