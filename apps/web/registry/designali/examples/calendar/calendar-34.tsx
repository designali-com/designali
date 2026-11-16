"use client"

import * as React from "react"
import { addDays, differenceInCalendarDays, format } from "date-fns"

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

export default function MilestoneCountdown() {
  const today = React.useMemo(() => new Date(), [])
  const [date, setDate] = React.useState<undefined | Date>(() =>
    addDays(new Date(), 12)
  )
  const diff = date ? differenceInCalendarDays(date, today) : null

  const status =
    diff === null
      ? { label: "No date", variant: "outline" as const }
      : diff < 0
        ? {
            label: Math.abs(diff) + "d overdue",
            variant: "destructive" as const,
          }
        : diff === 0
          ? { label: "Due today", variant: "default" as const }
          : { label: "In " + diff + " days", variant: "secondary" as const }

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Designali Blocks launch</CardTitle>
        <CardDescription>
          {date ? format(date, "EEEE, MMMM d, yyyy") : "Set a target date"}
        </CardDescription>
        <CardAction>
          <Badge variant={status.variant}>{status.label}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
          className="p-0"
        />
      </CardContent>
    </Card>
  )
}
