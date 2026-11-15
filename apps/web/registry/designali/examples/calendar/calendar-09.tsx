"use client"

import * as React from "react"
import { format } from "date-fns"

import { Calendar } from "@workspace/ui/components/calendar"

export default function PublishDateRequired() {
  const [date, setDate] = React.useState(() => new Date())

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <Calendar
        mode="single"
        required
        selected={date}
        onSelect={setDate}
        className="border"
      />
      <p className="text-center text-xs text-muted-foreground">
        Scheduled to publish on{" "}
        <span className="font-medium text-foreground">
          {format(date, "EEEE, MMMM d")}
        </span>
      </p>
    </div>
  )
}
