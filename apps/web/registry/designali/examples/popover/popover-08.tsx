"use client"

import * as React from "react"
import { type DateRange } from "react-day-picker"
import { CalendarRangeIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const presets = [
  { label: "Last 7 days", days: 7 },
  { label: "Last 30 days", days: 30 },
  { label: "Last 90 days", days: 90 },
]

const today = new Date(2026, 10, 15)

function daysAgo(days: number) {
  const d = new Date(today)
  d.setDate(d.getDate() - days + 1)
  return d
}

const fmt = (d?: Date) =>
  d ? d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "..."

export default function DateRangePopover() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: daysAgo(7),
    to: today,
  })

  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline" className="font-normal" />}
      >
        <CalendarRangeIcon data-icon="inline-start" />
        {fmt(range?.from)} - {fmt(range?.to)}
      </PopoverTrigger>
      <PopoverContent className="w-auto flex-row gap-0 p-0" align="start">
        <div className="flex flex-col gap-1 border-e p-2">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() =>
                setRange({ from: daysAgo(preset.days), to: today })
              }
            >
              {preset.label}
            </Button>
          ))}
        </div>
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
        />
      </PopoverContent>
    </Popover>
  )
}
