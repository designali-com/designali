"use client"

import * as React from "react"
import { addMonths, isSameMonth } from "date-fns"
import { CalendarX2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty"

export default function FullyBookedMonth() {
  const [today] = React.useState(() => new Date())
  const [month, setMonth] = React.useState(today)
  const [date, setDate] = React.useState<undefined | Date>()
  const soldOut = isSameMonth(month, today)

  return (
    <div className="flex w-full max-w-xs flex-col border">
      <Calendar
        mode="single"
        month={month}
        onMonthChange={setMonth}
        selected={date}
        onSelect={setDate}
        disabled={[(d) => isSameMonth(d, today), { before: today }]}
        className="self-center"
      />
      {soldOut ? (
        <Empty className="border-t p-4">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <CalendarX2Icon />
            </EmptyMedia>
            <EmptyTitle>Fully booked this month</EmptyTitle>
            <EmptyDescription>Openings start next month.</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm" onClick={() => setMonth(addMonths(today, 1))}>
              Show next month
            </Button>
          </EmptyContent>
        </Empty>
      ) : null}
    </div>
  )
}
