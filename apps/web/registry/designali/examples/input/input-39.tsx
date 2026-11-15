"use client"

import * as React from "react"

import { Input } from "@workspace/ui/components/input"

const initial = [
  { day: "Mon", open: "09:00", close: "17:00" },
  { day: "Tue", open: "09:00", close: "17:00" },
  { day: "Sat", open: "11:00", close: "10:00" },
]

export default function BusinessHoursInputs() {
  const [hours, setHours] = React.useState(initial)
  const update = (i: number, key: "open" | "close", value: string) =>
    setHours(hours.map((h, idx) => (idx === i ? { ...h, [key]: value } : h)))

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {hours.map((h, i) => {
        const invalid = h.close <= h.open
        return (
          <div key={h.day} className="flex items-center gap-2 text-sm">
            <span className="w-10 font-medium">{h.day}</span>
            <Input
              type="time"
              aria-label={h.day + " opens"}
              value={h.open}
              onChange={(e) => update(i, "open", e.target.value)}
            />
            <span className="text-muted-foreground">to</span>
            <Input
              type="time"
              aria-label={h.day + " closes"}
              value={h.close}
              aria-invalid={invalid}
              onChange={(e) => update(i, "close", e.target.value)}
            />
          </div>
        )
      })}
      {hours.some((h) => h.close <= h.open) && (
        <p className="text-xs text-destructive">
          Closing time must be after opening time.
        </p>
      )}
    </div>
  )
}
