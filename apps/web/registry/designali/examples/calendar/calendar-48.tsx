"use client"

import * as React from "react"
import {
  Tv as TvIcon,
} from "@designali/icons"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function BroadcastMonthCalendar() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TvIcon className="size-4 text-muted-foreground" />
          Designali launch campaign
        </CardTitle>
        <CardDescription>
          Broadcast months always start on a Monday.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          broadcastCalendar
          showWeekNumber
          selected={date}
          onSelect={setDate}
          className="p-0"
        />
      </CardContent>
    </Card>
  )
}
