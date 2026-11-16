"use client"

import * as React from "react"
import { format, isValid } from "date-fns"
import {
  Calendar as CalendarIcon,
} from "@designali/icons"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export default function TypedDateInput() {
  const [date, setDate] = React.useState<undefined | Date>(() => new Date())
  const [text, setText] = React.useState(() =>
    format(new Date(), "MMM d, yyyy")
  )
  const [month, setMonth] = React.useState<undefined | Date>(date)
  const [open, setOpen] = React.useState(false)
  const invalid = text.length > 0 && !isValid(new Date(text))

  return (
    <Field data-invalid={invalid || undefined} className="w-full max-w-60">
      <FieldLabel htmlFor="typed-date">Client follow-up date</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="typed-date"
          value={text}
          placeholder="e.g. Dec 3, 2026"
          aria-invalid={invalid || undefined}
          onChange={(e) => {
            setText(e.target.value)
            const parsed = new Date(e.target.value)
            if (isValid(parsed)) {
              setDate(parsed)
              setMonth(parsed)
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={
                <InputGroupButton size="icon-xs" aria-label="Open calendar" />
              }
            >
              <CalendarIcon />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                month={month}
                onMonthChange={setMonth}
                onSelect={(d) => {
                  setDate(d)
                  setText(d ? format(d, "MMM d, yyyy") : "")
                  setOpen(false)
                }}
              />
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      {invalid ? (
        <FieldError>We couldn&apos;t read that date.</FieldError>
      ) : (
        <FieldDescription>Type a date or pick one.</FieldDescription>
      )}
    </Field>
  )
}
