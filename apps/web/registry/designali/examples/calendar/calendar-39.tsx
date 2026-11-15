"use client"

import * as React from "react"

import { Calendar } from "@workspace/ui/components/calendar"
import { Spinner } from "@workspace/ui/components/spinner"

function isBooked(d: Date) {
  return (d.getDate() * 3 + d.getMonth()) % 4 === 0
}

export default function LoadingAvailability() {
  const [loading, setLoading] = React.useState(false)
  const [date, setDate] = React.useState<undefined | Date>()
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  React.useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <div className="relative w-fit border">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        onMonthChange={() => {
          setLoading(true)
          clearTimeout(timer.current)
          timer.current = setTimeout(() => setLoading(false), 900)
        }}
        disabled={loading ? true : isBooked}
        aria-busy={loading}
      />
      {loading ? (
        <div className="absolute inset-x-0 top-10 bottom-0 flex items-center justify-center gap-2 bg-background/70 text-xs text-muted-foreground">
          <Spinner />
          Checking availability...
        </div>
      ) : null}
    </div>
  )
}
