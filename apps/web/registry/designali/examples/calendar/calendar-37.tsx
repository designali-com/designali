"use client"

import * as React from "react"
import { addMonths, format, isSameMonth, subMonths } from "date-fns"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"

export default function CustomHeaderNavigation() {
  const [today] = React.useState(() => new Date())
  const [month, setMonth] = React.useState(today)
  const [date, setDate] = React.useState<undefined | Date>(today)

  return (
    <div className="w-fit border">
      <div className="flex items-center gap-1 border-b p-2">
        <span className="flex-1 ps-1 text-sm font-medium">
          {format(month, "MMMM yyyy")}
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled={isSameMonth(month, today)}
          onClick={() => {
            setMonth(today)
            setDate(today)
          }}
        >
          Today
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Previous month"
          onClick={() => setMonth(subMonths(month, 1))}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Next month"
          onClick={() => setMonth(addMonths(month, 1))}
        >
          <ChevronRightIcon />
        </Button>
      </div>
      <Calendar
        mode="single"
        hideNavigation
        month={month}
        onMonthChange={setMonth}
        selected={date}
        onSelect={setDate}
        classNames={{ month_caption: "hidden" }}
      />
    </div>
  )
}
