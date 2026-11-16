"use client"

import * as React from "react"
import { addDays, format } from "date-fns"

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
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const slots = [
  "09:00",
  "09:30",
  "10:30",
  "11:00",
  "13:00",
  "14:30",
  "15:00",
  "16:30",
]
const today = new Date()

export default function TimeSlotBooking() {
  const [date, setDate] = React.useState<undefined | Date>(addDays(today, 1))
  const [slot, setSlot] = React.useState<string | undefined>()
  const taken = date
    ? [
        slots[date.getDate() % slots.length],
        slots[(date.getDate() + 3) % slots.length],
      ]
    : []

  return (
    <Card className="w-fit max-w-full">
      <CardHeader>
        <CardTitle>Book a 30 min intro call with Ali</CardTitle>
        <CardDescription>
          All times are in your local time zone.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 sm:flex-row">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d)
            setSlot(undefined)
          }}
          disabled={[{ before: today }, { dayOfWeek: [0, 6] }]}
          className="p-0"
        />
        <ToggleGroup
          variant="outline"
          size="sm"
          value={slot ? [slot] : []}
          onValueChange={(value) => setSlot(value[0])}
          className="grid grid-cols-2 gap-1.5 self-start sm:grid-cols-1"
        >
          {slots.map((s) => (
            <ToggleGroupItem
              key={s}
              value={s}
              disabled={!date || taken.includes(s)}
              className="w-full tabular-nums"
            >
              {s}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={!date || !slot}>
          {date && slot
            ? "Confirm " + format(date, "EEE, MMM d") + " at " + slot
            : "Pick a day and time"}
        </Button>
      </CardFooter>
    </Card>
  )
}
