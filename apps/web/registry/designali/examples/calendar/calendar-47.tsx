"use client"

import * as React from "react"
import { differenceInCalendarDays } from "date-fns"
import {
  Moon as MoonIcon,
  Sun as SunIcon,
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

const rotation = ["D", "D", "N", "N", "-", "-", "-", "-"]
const anchor = new Date(2026, 0, 1)

const shiftStyles: Record<string, string> = {
  D: "text-primary dark:text-primary",
  N: "text-primary dark:text-primary",
  "-": "text-muted-foreground",
}

function shiftFor(date: Date) {
  const i =
    ((differenceInCalendarDays(date, anchor) % rotation.length) +
      rotation.length) %
    rotation.length
  return rotation[i]!
}

function ShiftDayButton({
  children,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof CalendarDayButton>) {
  const shift = shiftFor(day.date)
  return (
    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
      {children}
      {!modifiers.outside ? (
        <span
          className={cn(
            "text-[10px] font-semibold",
            !modifiers.selected && shiftStyles[shift]
          )}
        >
          {shift === "-" ? "off" : shift}
        </span>
      ) : null}
    </CalendarDayButton>
  )
}

export default function ShiftRotaCalendar() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Designali support rota</CardTitle>
        <CardDescription>2 days, 2 late shifts, 4 off.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          components={{ DayButton: ShiftDayButton }}
          className="p-0 [--cell-size:--spacing(9)]"
        />
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <SunIcon className="size-3.5 text-primary" /> Day 07-19
          </span>
          <span className="flex items-center gap-1.5">
            <MoonIcon className="size-3.5 text-primary" /> Night 19-07
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
