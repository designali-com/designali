"use client"

import * as React from "react"
import {
  Hand as HandIcon,
} from "@designali/icons"

import { Calendar } from "@workspace/ui/components/calendar"

export default function TouchFriendlyCalendar() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        fixedWeeks
        buttonVariant="outline"
        className="border [--cell-size:--spacing(10)] sm:[--cell-size:--spacing(11)]"
      />
      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <HandIcon className="size-3.5" />
        44px targets for booking a Designali session on tablet
      </span>
    </div>
  )
}
