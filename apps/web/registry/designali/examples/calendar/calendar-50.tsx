"use client"

import * as React from "react"
import { format, isAfter, startOfDay } from "date-fns"
import { FrownIcon, LaughIcon, MehIcon, SmileIcon } from "lucide-react"

import { Calendar, CalendarDayButton } from "@workspace/ui/components/calendar"
import { Card, CardContent } from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const moods = [
  { icon: LaughIcon, label: "Great", tone: "text-emerald-500" },
  { icon: SmileIcon, label: "Good", tone: "text-sky-500" },
  { icon: MehIcon, label: "Okay", tone: "text-amber-500" },
  { icon: FrownIcon, label: "Low", tone: "text-rose-500" },
]
const today = startOfDay(new Date())

function moodFor(date: Date) {
  if (isAfter(date, today)) return null
  return moods[(date.getDate() * 5 + date.getMonth()) % moods.length]!
}

function MoodDayButton({
  children,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof CalendarDayButton>) {
  const mood = modifiers.outside ? null : moodFor(day.date)
  return (
    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
      {children}
      {mood ? (
        <mood.icon
          className={cn(
            "size-3 opacity-100!",
            !modifiers.selected && mood.tone
          )}
        />
      ) : null}
    </CalendarDayButton>
  )
}

export default function MoodTrackerCalendar() {
  const [date, setDate] = React.useState(today)
  const mood = moodFor(date)

  return (
    <Card className="w-fit">
      <CardContent className="flex flex-col gap-3">
        <Calendar
          mode="single"
          required
          selected={date}
          onSelect={setDate}
          disabled={{ after: today }}
          components={{ DayButton: MoodDayButton }}
          className="p-0 [--cell-size:--spacing(9)]"
        />
        <div className="flex items-center gap-3 border-t pt-3">
          {mood ? <mood.icon className={cn("size-5", mood.tone)} /> : null}
          <div className="grid">
            <span className="text-xs font-medium">
              {format(date, "EEEE, MMM d")} · {mood?.label}
            </span>
            <span className="text-xs text-muted-foreground">
              Slept well, long walk by the river after work.
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
