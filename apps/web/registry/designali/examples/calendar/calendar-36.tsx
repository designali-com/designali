"use client"

import * as React from "react"
import { endOfISOWeek, format, getISOWeek, startOfISOWeek } from "date-fns"
import { type DateRange } from "react-day-picker"

import { Badge } from "@workspace/ui/components/badge"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

function weekOf(date: Date): DateRange {
  return { from: startOfISOWeek(date), to: endOfISOWeek(date) }
}

export default function TimesheetWeekPicker() {
  const [week, setWeek] = React.useState<DateRange>(() => weekOf(new Date()))

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Timesheet</CardTitle>
        <CardDescription>
          Week {getISOWeek(week.from!)} · {format(week.from!, "MMM d")} -{" "}
          {format(week.to!, "MMM d")}
        </CardDescription>
        <CardAction>
          <Badge variant="outline">38.5 h</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="range"
          required
          ISOWeek
          showWeekNumber
          selected={week}
          onSelect={(_, day) => setWeek(weekOf(day))}
          className="p-0"
        />
      </CardContent>
    </Card>
  )
}
