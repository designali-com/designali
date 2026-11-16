"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const slots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
]
const taken = new Set(["10:00", "13:30", "15:00"])

export default function TimeSlotPicker() {
  const [slot, setSlot] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-3">
      <div>
        <p className="text-sm font-medium">Book a 30 min intro call with Ali</p>
        <p className="text-xs text-muted-foreground">
          Wednesday, April 9 - CET
        </p>
      </div>
      <ScrollArea className="h-52">
        <div className="flex flex-col gap-1.5 pr-3">
          {slots.map((s) => (
            <Button
              key={s}
              variant={slot === s ? "default" : "outline"}
              disabled={taken.has(s)}
              onClick={() => setSlot(s)}
              className="w-full tabular-nums"
            >
              {s}
            </Button>
          ))}
        </div>
      </ScrollArea>
      <Button disabled={!slot}>
        {slot ? "Confirm " + slot : "Select a time"}
      </Button>
    </div>
  )
}
