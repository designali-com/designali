"use client"

import * as React from "react"
import { addDays, format, isWeekend } from "date-fns"
import { TruckIcon } from "lucide-react"

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

const today = new Date()

function firstDeliveryDay() {
  let d = addDays(today, 2)
  while (isWeekend(d)) d = addDays(d, 1)
  return d
}

const holidays = [addDays(today, 9), addDays(today, 10)]

export default function DeliveryDateCheckout() {
  const [date, setDate] = React.useState<undefined | Date>(firstDeliveryDay)

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TruckIcon className="size-4 text-muted-foreground" />
          Choose delivery date
        </CardTitle>
        <CardDescription>
          Weekdays only. Couriers are off on public holidays.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={[
            { before: addDays(today, 2) },
            { dayOfWeek: [0, 6] },
            ...holidays,
          ]}
          modifiers={{ holiday: holidays }}
          modifiersClassNames={{ holiday: "[&>button]:line-through" }}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <div className="grid gap-0.5">
          <span className="text-muted-foreground">Arrives</span>
          <span className="font-medium">
            {date ? format(date, "EEEE, MMM d") : "No date selected"}
          </span>
        </div>
        <Button size="sm" disabled={!date}>
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}
