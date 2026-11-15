"use client"

import * as React from "react"
import { addDays, differenceInBusinessDays } from "date-fns"
import { type DateRange } from "react-day-picker"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const today = new Date()
const balance = 8

export default function LeaveRequestBusinessDays() {
  const [range, setRange] = React.useState<DateRange | undefined>()
  const days =
    range?.from && range?.to
      ? differenceInBusinessDays(addDays(range.to, 1), range.from)
      : 0
  const over = days > balance

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Request time off</CardTitle>
        <CardDescription>
          {balance} vacation days remaining this year.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Field>
          <FieldLabel htmlFor="leave-type">Leave type</FieldLabel>
          <NativeSelect
            id="leave-type"
            defaultValue="vacation"
            className="w-full"
          >
            <NativeSelectOption value="vacation">Vacation</NativeSelectOption>
            <NativeSelectOption value="sick">Sick leave</NativeSelectOption>
            <NativeSelectOption value="parental">
              Parental leave
            </NativeSelectOption>
          </NativeSelect>
        </Field>
        <Field data-invalid={over || undefined}>
          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            disabled={[{ before: today }, { dayOfWeek: [0, 6] }]}
            excludeDisabled
            className="self-center p-0"
          />
          {over ? (
            <FieldError>
              That&apos;s {days} working days, which exceeds your balance.
            </FieldError>
          ) : (
            <FieldDescription>
              {days > 0
                ? days + " working days requested."
                : "Weekends are not counted."}
            </FieldDescription>
          )}
        </Field>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={days === 0 || over}>
          Submit request
        </Button>
      </CardFooter>
    </Card>
  )
}
