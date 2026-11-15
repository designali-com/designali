"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export default function InvoiceDatePopover() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Field className="w-full max-w-60">
      <FieldLabel htmlFor="invoice-date">Invoice date</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              id="invoice-date"
              variant="outline"
              className="w-full justify-start font-normal"
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-muted-foreground">Pick a date</span>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            defaultMonth={date}
            onSelect={(next) => {
              setDate(next)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
      <FieldDescription>Shown on the PDF sent to your client.</FieldDescription>
    </Field>
  )
}
