"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"

const events = [
  "invoice.paid",
  "invoice.failed",
  "customer.created",
  "subscription.canceled",
]

export default function WebhookEventsSelectAll() {
  const [selected, setSelected] = React.useState([
    "invoice.paid",
    "invoice.failed",
  ])
  const all = selected.length === events.length
  const some = selected.length > 0 && !all

  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Events to send</FieldLegend>
      <Field orientation="horizontal">
        <Checkbox
          id="events-all"
          checked={all}
          indeterminate={some}
          onCheckedChange={(checked) => setSelected(checked ? events : [])}
        />
        <FieldLabel htmlFor="events-all">Select all events</FieldLabel>
      </Field>
      <FieldGroup data-slot="checkbox-group" className="border-s ps-4">
        {events.map((ev) => (
          <Field key={ev} orientation="horizontal">
            <Checkbox
              id={"ev-" + ev}
              checked={selected.includes(ev)}
              onCheckedChange={(checked) =>
                setSelected((prev) =>
                  checked ? [...prev, ev] : prev.filter((x) => x !== ev)
                )
              }
            />
            <FieldLabel htmlFor={"ev-" + ev} className="font-mono font-normal">
              {ev}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
