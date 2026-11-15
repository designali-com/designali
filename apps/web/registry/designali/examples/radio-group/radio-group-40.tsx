"use client"

import * as React from "react"

import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function NestedScheduleOptions() {
  const [schedule, setSchedule] = React.useState("custom")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Backup schedule</FieldLegend>
      <RadioGroup
        value={schedule}
        onValueChange={(v) => setSchedule(v as string)}
      >
        <Field orientation="horizontal">
          <RadioGroupItem value="hourly" id="bk-hourly" />
          <FieldLabel htmlFor="bk-hourly" className="font-normal">
            Every hour
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="nightly" id="bk-nightly" />
          <FieldLabel htmlFor="bk-nightly" className="font-normal">
            Nightly at 2:00 AM
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="custom" id="bk-custom" />
          <FieldLabel htmlFor="bk-custom" className="font-normal">
            Custom
          </FieldLabel>
        </Field>
      </RadioGroup>
      {schedule === "custom" && (
        <div className="ms-1.5 border-s ps-4">
          <RadioGroup
            defaultValue="weekdays"
            aria-label="Custom days"
            className="gap-2"
          >
            <Field orientation="horizontal">
              <RadioGroupItem value="weekdays" id="bk-weekdays" />
              <FieldLabel
                htmlFor="bk-weekdays"
                className="font-normal text-muted-foreground"
              >
                Weekdays only
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="weekends" id="bk-weekends" />
              <FieldLabel
                htmlFor="bk-weekends"
                className="font-normal text-muted-foreground"
              >
                Weekends only
              </FieldLabel>
            </Field>
          </RadioGroup>
        </div>
      )}
    </FieldSet>
  )
}
