"use client"

import * as React from "react"
import { format, isSameDay } from "date-fns"

import { Calendar } from "@workspace/ui/components/calendar"
import { Card, CardContent } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const base = new Date()
const y = base.getFullYear()
const m = base.getMonth()

const events = [
  {
    date: new Date(y, m, 4),
    time: "09:30",
    title: "Design review",
    tone: "bg-sky-500",
  },
  {
    date: new Date(y, m, 4),
    time: "14:00",
    title: "1:1 with Priya",
    tone: "bg-violet-500",
  },
  {
    date: new Date(y, m, 11),
    time: "11:00",
    title: "Sprint planning",
    tone: "bg-emerald-500",
  },
  {
    date: new Date(y, m, 17),
    time: "16:30",
    title: "Customer call: Northwind",
    tone: "bg-amber-500",
  },
  {
    date: new Date(y, m, 22),
    time: "10:00",
    title: "Quarterly roadmap",
    tone: "bg-sky-500",
  },
  {
    date: new Date(y, m, 22),
    time: "13:00",
    title: "Team lunch",
    tone: "bg-rose-500",
  },
]

export default function EventsAgenda() {
  const [date, setDate] = React.useState(new Date(y, m, 4))
  const dayEvents = events.filter((e) => isSameDay(e.date, date))

  return (
    <Card className="w-fit max-w-full">
      <CardContent className="flex flex-col gap-4">
        <Calendar
          mode="single"
          required
          selected={date}
          onSelect={setDate}
          modifiers={{ hasEvent: events.map((e) => e.date) }}
          modifiersClassNames={{
            hasEvent:
              "[&>button]:after:absolute [&>button]:after:bottom-1 [&>button]:after:size-1 [&>button]:after:rounded-full [&>button]:after:bg-primary [&>button[data-selected-single=true]]:after:bg-primary-foreground",
          }}
          className="p-0"
        />
        <div className="grid gap-2 border-t pt-3">
          <span className="text-xs font-medium">
            {format(date, "EEEE, MMMM d")}
          </span>
          {dayEvents.length === 0 ? (
            <span className="text-xs text-muted-foreground">
              Nothing scheduled.
            </span>
          ) : (
            dayEvents.map((e) => (
              <div key={e.title} className="flex items-center gap-2 text-xs">
                <span className={cn("h-4 w-0.5", e.tone)} />
                <span className="w-10 text-muted-foreground tabular-nums">
                  {e.time}
                </span>
                <span>{e.title}</span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
