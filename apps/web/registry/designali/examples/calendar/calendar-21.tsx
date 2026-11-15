"use client"

import * as React from "react"

import { Calendar, CalendarDayButton } from "@workspace/ui/components/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const levels = [
  { key: "open", label: "Open", dot: "bg-emerald-500" },
  { key: "limited", label: "Limited", dot: "bg-amber-500" },
  { key: "full", label: "Full", dot: "bg-rose-500" },
]

function levelFor(date: Date) {
  const n = (date.getDate() * 7 + date.getMonth()) % 5
  return n < 3 ? levels[0]! : n === 3 ? levels[1]! : levels[2]!
}

function AvailabilityDayButton({
  children,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof CalendarDayButton>) {
  const level = levelFor(day.date)
  return (
    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
      {children}
      {!modifiers.outside && !modifiers.disabled ? (
        <span className={cn("size-1 rounded-full opacity-100!", level.dot)} />
      ) : null}
    </CalendarDayButton>
  )
}

export default function StudioAvailabilityDots() {
  const [date, setDate] = React.useState<undefined | Date>()
  const today = React.useMemo(() => new Date(), [])

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Studio B rental</CardTitle>
        <CardDescription>
          Dots show how many hourly slots remain.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={[{ before: today }, (d) => levelFor(d).key === "full"]}
          components={{ DayButton: AvailabilityDayButton }}
          className="p-0 [--cell-size:--spacing(9)]"
        />
        <div className="flex gap-4 text-xs text-muted-foreground">
          {levels.map((l) => (
            <span key={l.key} className="flex items-center gap-1.5">
              <span className={cn("size-1.5 rounded-full", l.dot)} />
              {l.label}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
