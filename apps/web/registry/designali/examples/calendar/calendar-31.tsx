"use client"

import * as React from "react"
import {
  endOfMonth,
  format,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
} from "date-fns"
import { type DateRange } from "react-day-picker"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import { Card, CardContent, CardFooter } from "@workspace/ui/components/card"

const today = new Date()

const presets: { label: string; range: DateRange }[] = [
  { label: "Last 7 days", range: { from: subDays(today, 6), to: today } },
  { label: "Last 30 days", range: { from: subDays(today, 29), to: today } },
  { label: "This month", range: { from: startOfMonth(today), to: today } },
  {
    label: "Last month",
    range: {
      from: startOfMonth(subMonths(today, 1)),
      to: endOfMonth(subMonths(today, 1)),
    },
  },
  { label: "Year to date", range: { from: startOfYear(today), to: today } },
]

export default function AnalyticsRangePresets() {
  const [active, setActive] = React.useState<string | null>("Last 7 days")
  const [range, setRange] = React.useState<DateRange | undefined>(
    presets[0]!.range
  )
  const [month, setMonth] = React.useState(today)

  return (
    <Card className="w-fit max-w-full">
      <CardContent className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-wrap gap-1 sm:w-32 sm:flex-col">
          {presets.map((p) => (
            <Button
              key={p.label}
              size="sm"
              variant={active === p.label ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => {
                setActive(p.label)
                setRange(p.range)
                setMonth(p.range.to ?? today)
              }}
            >
              {p.label}
            </Button>
          ))}
        </div>
        <Calendar
          mode="range"
          selected={range}
          onSelect={(r) => {
            setRange(r)
            setActive(null)
          }}
          month={month}
          onMonthChange={setMonth}
          disabled={{ after: today }}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <span className="text-muted-foreground">
          {range?.from && range?.to
            ? format(range.from, "MMM d") +
              " - " +
              format(range.to, "MMM d, yyyy")
            : "Custom range"}
        </span>
        <Button size="sm">Apply</Button>
      </CardFooter>
    </Card>
  )
}
