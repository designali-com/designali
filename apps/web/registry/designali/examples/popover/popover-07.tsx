"use client"

import * as React from "react"
import {
  Calendar as CalendarIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { cn } from "@workspace/ui/lib/utils"

export default function DatePickerPopover() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="due-date">Due date</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              id="due-date"
              variant="outline"
              className={cn(
                "w-full justify-start font-normal",
                !date && "text-muted-foreground"
              )}
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {date
            ? date.toLocaleDateString("en-US", { dateStyle: "medium" })
            : "Pick a date"}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(value) => {
              setDate(value)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
