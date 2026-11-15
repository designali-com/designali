"use client"

import * as React from "react"
import { format, subDays } from "date-fns"
import { type DateRange } from "react-day-picker"
import { CalendarRangeIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const today = new Date()

export default function ReportRangePopover() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: subDays(today, 13),
    to: today,
  })

  const label = range?.from
    ? range.to
      ? format(range.from, "MMM d") + " - " + format(range.to, "MMM d, yyyy")
      : format(range.from, "MMM d, yyyy")
    : "Select period"

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <span className="text-xs font-medium">Reporting period</span>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className="w-full justify-between font-normal"
            />
          }
        >
          <span className="flex items-center gap-2">
            <CalendarRangeIcon className="size-4 text-muted-foreground" />
            {label}
          </span>
          <ChevronDownIcon className="size-4 text-muted-foreground" />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            numberOfMonths={2}
            defaultMonth={range?.from}
            selected={range}
            onSelect={setRange}
            disabled={{ after: today }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
