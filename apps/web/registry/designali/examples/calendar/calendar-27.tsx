"use client"

import * as React from "react"
import {
  addDays,
  differenceInCalendarDays,
  format,
  isLastDayOfMonth,
} from "date-fns"
import { BanknoteIcon } from "lucide-react"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const isPayday = (d: Date) => d.getDate() === 15 || isLastDayOfMonth(d)

function nextPayday(from: Date) {
  let d = from
  while (!isPayday(d)) d = addDays(d, 1)
  return d
}

export default function PaydayCalendar() {
  const today = React.useMemo(() => new Date(), [])
  const next = nextPayday(today)
  const days = differenceInCalendarDays(next, today)

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BanknoteIcon className="size-4 text-muted-foreground" />
          Pay schedule
        </CardTitle>
        <CardDescription>
          Paid on the 15th and the last day of each month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          modifiers={{ payday: isPayday }}
          modifiersClassNames={{
            payday:
              "[&>button]:bg-emerald-500/15 [&>button]:font-semibold [&>button]:text-emerald-700 dark:[&>button]:text-emerald-400",
          }}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">Next payday</span>
        <span className="font-medium">
          {format(next, "EEE, MMM d")} ·{" "}
          {days === 0
            ? "today"
            : "in " + days + (days === 1 ? " day" : " days")}
        </span>
      </CardFooter>
    </Card>
  )
}
