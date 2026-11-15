"use client"

import * as React from "react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const days = [
  { day: "Monday", on: true },
  { day: "Tuesday", on: true },
  { day: "Wednesday", on: true },
  { day: "Thursday", on: true },
  { day: "Friday", on: false },
]

export default function WeeklyAvailability() {
  const [open, setOpen] = React.useState(() =>
    Object.fromEntries(days.map((d) => [d.day, d.on]))
  )

  return (
    <div className="w-full max-w-md divide-y border">
      {days.map(({ day }) => (
        <div
          key={day}
          className="flex flex-wrap items-center gap-3 px-4 py-2.5"
        >
          <Switch
            size="sm"
            id={"day-" + day}
            checked={open[day]}
            onCheckedChange={(checked) =>
              setOpen((o) => ({ ...o, [day]: checked }))
            }
          />
          <Label htmlFor={"day-" + day} className="w-20">
            {day}
          </Label>
          {open[day] ? (
            <div className="ms-auto flex items-center gap-1.5">
              <Input
                type="time"
                defaultValue="09:00"
                className="h-7 w-24"
                aria-label={day + " start"}
              />
              <span className="text-xs text-muted-foreground">to</span>
              <Input
                type="time"
                defaultValue="17:00"
                className="h-7 w-24"
                aria-label={day + " end"}
              />
            </div>
          ) : (
            <span className="ms-auto text-xs text-muted-foreground">
              Unavailable
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
