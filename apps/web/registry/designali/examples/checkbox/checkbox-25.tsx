"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const shifts = ["AM", "PM"]

export default function ShiftAvailabilityGrid() {
  const [slots, setSlots] = React.useState<string[]>([
    "Mon-AM",
    "Tue-AM",
    "Wed-PM",
    "Sat-AM",
  ])

  return (
    <div className="w-full max-w-sm">
      <p className="mb-2 text-sm font-medium">Your availability</p>
      <div className="grid grid-cols-[2.5rem_repeat(7,1fr)] gap-y-2 border p-3 text-center text-xs">
        <span />
        {days.map((day) => (
          <span key={day} className="text-muted-foreground">
            {day}
          </span>
        ))}
        {shifts.map((shift) => (
          <React.Fragment key={shift}>
            <span className="text-start font-medium">{shift}</span>
            {days.map((day) => {
              const key = day + "-" + shift
              return (
                <div key={key} className="flex justify-center">
                  <Checkbox
                    aria-label={day + " " + shift}
                    checked={slots.includes(key)}
                    onCheckedChange={(checked) =>
                      setSlots((list) =>
                        checked ? [...list, key] : list.filter((s) => s !== key)
                      )
                    }
                  />
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {slots.length} shifts selected this week
      </p>
    </div>
  )
}
