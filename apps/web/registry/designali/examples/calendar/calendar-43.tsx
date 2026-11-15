"use client"

import * as React from "react"
import { addMonths, format, setDate } from "date-fns"

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

function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"]
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || "th")
}

export default function BillingAnchorDay() {
  const [month] = React.useState(() => new Date())
  const [day, setDay] = React.useState(() => setDate(new Date(), 1))
  const next = setDate(addMonths(month, 1), day.getDate())

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Billing date</CardTitle>
        <CardDescription>
          Renew on the {ordinal(day.getDate())} of every month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          required
          month={month}
          disableNavigation
          showOutsideDays={false}
          selected={day}
          onSelect={setDay}
          disabled={(d) => d.getDate() > 28}
          formatters={{ formatCaption: () => "Day of month" }}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <span className="text-muted-foreground">
          Next charge {format(next, "MMM d, yyyy")}
        </span>
        <Button size="sm">Update</Button>
      </CardFooter>
    </Card>
  )
}
