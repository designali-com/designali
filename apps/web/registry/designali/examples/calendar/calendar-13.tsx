"use client"

import * as React from "react"
import { addDays, format, startOfMonth } from "date-fns"
import { InfoIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"

const today = new Date()
const lastDay = addDays(today, 30)

export default function AppointmentWindow() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-start gap-2 border bg-muted/40 p-3 text-xs">
        <InfoIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
        <p>
          Appointments open up to 30 days ahead, until{" "}
          <span className="font-medium">{format(lastDay, "MMMM d")}</span>.
        </p>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        startMonth={startOfMonth(today)}
        endMonth={lastDay}
        disabled={[{ before: today }, { after: lastDay }]}
        className="self-center border"
      />
      <Button disabled={!date}>
        {date ? "Book for " + format(date, "MMM d") : "Select a day"}
      </Button>
    </div>
  )
}
