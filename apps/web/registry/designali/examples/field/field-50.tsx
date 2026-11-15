"use client"

import * as React from "react"

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Switch } from "@workspace/ui/components/switch"

const initial = [
  { day: "Monday", on: true },
  { day: "Tuesday", on: true },
  { day: "Wednesday", on: true },
  { day: "Saturday", on: false },
]

export default function WorkingHoursSwitchRows() {
  const [days, setDays] = React.useState(initial)

  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Working hours</FieldLegend>
      <FieldGroup className="gap-3">
        {days.map((d, i) => (
          <Field key={d.day} orientation="horizontal">
            <Switch
              id={"wh-" + d.day}
              size="sm"
              checked={d.on}
              onCheckedChange={(checked) =>
                setDays(
                  days.map((x, j) => (j === i ? { ...x, on: checked } : x))
                )
              }
            />
            <FieldLabel htmlFor={"wh-" + d.day} className="w-20 flex-none">
              {d.day}
            </FieldLabel>
            <Input
              type="time"
              aria-label={d.day + " start"}
              defaultValue="09:00"
              disabled={!d.on}
              className="h-7"
            />
            <span className="text-xs text-muted-foreground">to</span>
            <Input
              type="time"
              aria-label={d.day + " end"}
              defaultValue="17:30"
              disabled={!d.on}
              className="h-7"
            />
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
