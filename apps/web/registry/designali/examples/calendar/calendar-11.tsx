"use client"

import * as React from "react"
import { addDays, differenceInCalendarDays, format } from "date-fns"
import { type DateRange } from "react-day-picker"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const today = new Date()
const rate = 189

export default function HotelStayRange() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: addDays(today, 7),
    to: addDays(today, 10),
  })
  const nights =
    range?.from && range?.to
      ? differenceInCalendarDays(range.to, range.from)
      : 0

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Harbor View Suite</CardTitle>
        <CardDescription>Minimum 2 nights, maximum 14.</CardDescription>
        <CardAction>
          <Badge variant="outline">{"$" + rate} / night</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Calendar
          mode="range"
          min={2}
          max={14}
          selected={range}
          onSelect={setRange}
          defaultMonth={range?.from}
          disabled={{ before: today }}
          excludeDisabled
          className="p-0"
        />
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">
            {range?.from && range?.to
              ? format(range.from, "MMM d") + " - " + format(range.to, "MMM d")
              : "Select check-in and check-out"}
          </span>
          <span className="font-medium">
            {nights} {nights === 1 ? "night" : "nights"} ·{" "}
            {"$" + (nights * rate).toLocaleString()}
          </span>
        </div>
        <Button disabled={nights < 2}>Reserve</Button>
      </CardFooter>
    </Card>
  )
}
