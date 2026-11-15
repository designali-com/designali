"use client"

import * as React from "react"
import { addDays, format, isBefore, isWeekend, startOfDay } from "date-fns"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { cn } from "@workspace/ui/lib/utils"

export default function StartDateValidation() {
  const [minDate] = React.useState(() => addDays(startOfDay(new Date()), 3))
  const [date, setDate] = React.useState<undefined | Date>(() =>
    addDays(new Date(), 1)
  )

  const error = !date
    ? "Choose a start date."
    : isBefore(date, minDate)
      ? "Contracts need at least 3 days' notice."
      : isWeekend(date)
        ? "Start dates must fall on a weekday."
        : null

  return (
    <Field data-invalid={error ? true : undefined} className="w-fit">
      <FieldLabel>Contract start date</FieldLabel>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        aria-invalid={error ? true : undefined}
        className={cn("border", error && "border-destructive")}
      />
      {error ? (
        <FieldError>{error}</FieldError>
      ) : (
        <FieldDescription>
          Starts {format(date!, "EEEE, MMMM d")}.
        </FieldDescription>
      )}
    </Field>
  )
}
