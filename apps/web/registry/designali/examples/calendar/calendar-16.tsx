"use client"

import * as React from "react"
import { differenceInYears, format } from "date-fns"
import {
  Cake as CakeIcon,
} from "@designali/icons"

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

const today = new Date()

export default function DateOfBirthPicker() {
  const [date, setDate] = React.useState<undefined | Date>(
    new Date(1994, 5, 18)
  )

  return (
    <Field className="w-full max-w-60">
      <FieldLabel htmlFor="dob">Date of birth</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              id="dob"
              variant="outline"
              className="w-full justify-between font-normal"
            />
          }
        >
          {date ? format(date, "MMMM d, yyyy") : "Select date"}
          <CakeIcon className="size-4 text-muted-foreground" />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            startMonth={new Date(1930, 0)}
            endMonth={today}
            disabled={{ after: today }}
          />
        </PopoverContent>
      </Popover>
      <FieldDescription>
        {date
          ? "You are " + differenceInYears(today, date) + " years old."
          : "Used to verify your age."}
      </FieldDescription>
    </Field>
  )
}
