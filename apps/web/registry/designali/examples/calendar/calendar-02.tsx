"use client"

import { Calendar } from "@workspace/ui/components/calendar"
 
import * as React from "react"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"
 
import { Card, CardContent } from "@workspace/ui/components/card"

export function CalendarRange() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(() => {
    const today = new Date()
    const startDate = new Date(today.getFullYear(), 0, 12)
    return {
      from: startDate,
      to: addDays(startDate, 30),
    }
  })

  return (
    <Card className="w-fit">
      <CardContent className="p-4">
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          className="rounded-lg border"
        />
      </CardContent>
    </Card>
  )
}