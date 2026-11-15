"use client"

import * as React from "react"
import { CalendarClockIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"

const days = ["Mon 18", "Tue 19", "Wed 20", "Thu 21"]
const slots = ["9:00", "9:30", "10:30", "13:00", "14:30", "16:00"]

export default function ScheduleCallDialog() {
  const [day, setDay] = React.useState(days[1])
  const [slot, setSlot] = React.useState<string | null>(null)

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <CalendarClockIcon data-icon="inline-start" />
        Book a demo
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a 30-minute demo</DialogTitle>
          <DialogDescription>
            Times shown in Central European Time.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-2">
          {days.map((item) => (
            <Button
              key={item}
              variant={item === day ? "default" : "outline"}
              onClick={() => {
                setDay(item)
                setSlot(null)
              }}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {slots.map((item) => (
            <Button
              key={item}
              size="sm"
              variant={item === slot ? "secondary" : "ghost"}
              className="border"
              onClick={() => setSlot(item)}
            >
              {item}
            </Button>
          ))}
        </div>
        <DialogFooter className="items-center sm:justify-between">
          <p className="text-muted-foreground">
            {slot ? day + " at " + slot : "Pick a time"}
          </p>
          <DialogClose render={<Button disabled={!slot} />}>
            Confirm booking
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
