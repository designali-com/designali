"use client"

import * as React from "react"
import { isAfter, startOfDay } from "date-fns"
import {
  Flame as FlameIcon,
} from "@designali/icons"

import { Calendar, CalendarDayButton } from "@workspace/ui/components/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const pattern = [0, 25, 45, 30, 0, 60, 15]
const today = startOfDay(new Date())

function minutesFor(date: Date) {
  if (isAfter(date, today)) return null
  return pattern[(date.getDate() + date.getMonth()) % pattern.length]!
}

function shade(minutes: number | null) {
  if (minutes === null) return ""
  if (minutes === 0) return "bg-muted/40"
  if (minutes < 30) return "bg-emerald-500/25"
  if (minutes < 50) return "bg-emerald-500/50"
  return "bg-emerald-500/80 text-white"
}

function HeatmapDayButton({
  day,
  modifiers,
  className,
  ...props
}: React.ComponentProps<typeof CalendarDayButton>) {
  const minutes = modifiers.outside ? null : minutesFor(day.date)
  return (
    <CalendarDayButton
      day={day}
      modifiers={modifiers}
      title={minutes === null ? undefined : minutes + " min"}
      className={cn("rounded-none", shade(minutes), className)}
      {...props}
    />
  )
}

export default function WorkoutStreakHeatmap() {
  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FlameIcon className="size-4 text-orange-500" />5 day streak
        </CardTitle>
        <CardDescription>Minutes spent designing in Figma this month.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Calendar
          components={{ DayButton: HeatmapDayButton }}
          classNames={{ today: "font-semibold underline underline-offset-4" }}
          className="p-0"
        />
        <div className="flex items-center justify-end gap-1 text-[11px] text-muted-foreground">
          Less
          {[
            "bg-muted/40",
            "bg-emerald-500/25",
            "bg-emerald-500/50",
            "bg-emerald-500/80",
          ].map((c) => (
            <span key={c} className={cn("size-3", c)} />
          ))}
          More
        </div>
      </CardContent>
    </Card>
  )
}
