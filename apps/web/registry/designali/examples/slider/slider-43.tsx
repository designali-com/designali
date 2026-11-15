"use client"

import * as React from "react"
import { CalendarRangeIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export default function MonthTimelineRange() {
  const [range, setRange] = React.useState([2, 7])

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <CalendarRangeIcon className="size-4" />
          Reporting period
        </span>
        <Badge variant="secondary">
          {months[range[0]!]} - {months[range[1]!]} 2025
        </Badge>
      </div>
      <Slider
        aria-label="Reporting period"
        value={range}
        onValueChange={(value) => setRange(value as number[])}
        max={11}
      />
      <div className="flex justify-between">
        {months.map((month, i) => (
          <span
            key={month}
            className={cn(
              "w-4 text-center text-[10px]",
              i >= range[0]! && i <= range[1]!
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            {month[0]}
          </span>
        ))}
      </div>
    </div>
  )
}
