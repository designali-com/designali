"use client"

import * as React from "react"
import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns"

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

const weekdays = [
  { value: "1", label: "M" },
  { value: "2", label: "T" },
  { value: "3", label: "W" },
  { value: "4", label: "T" },
  { value: "5", label: "F" },
  { value: "6", label: "S" },
  { value: "0", label: "S" },
]
const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function RecurringClassSchedule() {
  const [days, setDays] = React.useState<string[]>(["1", "3"])
  const [month, setMonth] = React.useState(() => new Date())
  const isSession = (d: Date) => days.includes(String(d.getDay()))
  const count = eachDayOfInterval({
    start: startOfMonth(month),
    end: endOfMonth(month),
  }).filter(isSession).length

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Evening pottery class</CardTitle>
        <CardDescription>
          {days.length
            ? "Every " + days.map((d) => names[Number(d)]).join(", ")
            : "No repeat days"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ToggleGroup
          multiple
          variant="outline"
          size="sm"
          value={days}
          onValueChange={(v) => setDays(v as string[])}
          className="w-full"
        >
          {weekdays.map((w) => (
            <ToggleGroupItem
              key={w.value}
              value={w.value}
              aria-label={names[Number(w.value)]}
              className="flex-1"
            >
              {w.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <Calendar
          month={month}
          onMonthChange={setMonth}
          modifiers={{ session: isSession }}
          modifiersClassNames={{
            session: "[&>button]:bg-primary [&>button]:text-primary-foreground",
          }}
          weekStartsOn={1}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="text-muted-foreground">
        {count} sessions this month
      </CardFooter>
    </Card>
  )
}
