"use client"

import * as React from "react"
import {
  CalendarClock as CalendarClockIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const days = ["Mon 9", "Tue 10", "Wed 11"]
const slots = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "13:00",
  "13:30",
  "14:00",
  "15:30",
]
const taken = new Set(["9:30", "11:00", "14:00"])

export default function BookingSlotsSheet() {
  const [day, setDay] = React.useState(days[0]!)
  const [slot, setSlot] = React.useState<string | null>(null)
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <CalendarClockIcon data-icon="inline-start" />
        Book a consultation
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>30-min consultation</SheetTitle>
          <SheetDescription>With Ali Imam · Video call</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <div className="grid grid-cols-3 gap-1">
            {days.map((d) => (
              <Button
                key={d}
                variant={d === day ? "secondary" : "ghost"}
                onClick={() => {
                  setDay(d)
                  setSlot(null)
                }}
              >
                {d}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {slots.map((s) => (
              <Button
                key={s}
                variant={slot === s ? "default" : "outline"}
                disabled={taken.has(s)}
                onClick={() => setSlot(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
        <SheetFooter className="border-t">
          <span className="text-muted-foreground">
            {slot ? day + " at " + slot : "Select a time to continue"}
          </span>
          <Button disabled={!slot}>Confirm booking</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
