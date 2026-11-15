"use client"

import * as React from "react"
import { addDays, format, isValid, parseISO } from "date-fns"
import { type DateRange } from "react-day-picker"

import { Calendar } from "@workspace/ui/components/calendar"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const toInput = (d?: Date) => (d ? format(d, "yyyy-MM-dd") : "")

export default function RangeWithDateInputs() {
  const [range, setRange] = React.useState<DateRange | undefined>(() => {
    const from = new Date()
    return { from, to: addDays(from, 5) }
  })
  const [month, setMonth] = React.useState<undefined | Date>(range?.from)

  const update = (key: "from" | "to", value: string) => {
    const parsed = parseISO(value)
    if (!isValid(parsed)) return
    setRange(
      (prev) => ({ from: prev?.from, to: prev?.to, [key]: parsed }) as DateRange
    )
    setMonth(parsed)
  }

  return (
    <div className="flex w-fit max-w-full flex-col gap-3 border p-3">
      <div className="grid grid-cols-2 gap-2">
        <Field>
          <FieldLabel htmlFor="range-start">Start</FieldLabel>
          <Input
            id="range-start"
            type="date"
            value={toInput(range?.from)}
            onChange={(e) => update("from", e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="range-end">End</FieldLabel>
          <Input
            id="range-end"
            type="date"
            value={toInput(range?.to)}
            onChange={(e) => update("to", e.target.value)}
          />
        </Field>
      </div>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        month={month}
        onMonthChange={setMonth}
        className="p-0"
      />
    </div>
  )
}
