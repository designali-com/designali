"use client"

import * as React from "react"
import { addDays, format, isBefore, nextMonday, startOfDay } from "date-fns"
import {
  BanIcon,
  CalendarArrowUpIcon,
  CalendarClockIcon,
  SunIcon,
  SunriseIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { cn } from "@workspace/ui/lib/utils"

export default function TaskDueDatePopover() {
  const [today] = React.useState(() => startOfDay(new Date()))
  const [due, setDue] = React.useState<undefined | Date>()
  const [open, setOpen] = React.useState(false)

  const quick = [
    { label: "Today", icon: SunIcon, date: today },
    { label: "Tomorrow", icon: SunriseIcon, date: addDays(today, 1) },
    { label: "Next week", icon: CalendarArrowUpIcon, date: nextMonday(today) },
  ]

  const pick = (d: Date | undefined) => {
    setDue(d)
    setOpen(false)
  }

  const overdue = due && isBefore(due, today)

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 border p-3">
      <div className="flex min-w-0 items-center gap-2">
        <Checkbox aria-label="Complete task" />
        <span className="truncate text-sm">
          Send revised quote to Halcyon Labs
        </span>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "shrink-0 font-normal",
                overdue && "text-destructive"
              )}
            />
          }
        >
          <CalendarClockIcon data-icon="inline-start" />
          {due ? format(due, "MMM d") : "Due date"}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <div className="grid border-b p-1">
            {quick.map((q) => (
              <Button
                key={q.label}
                variant="ghost"
                size="sm"
                className="justify-start"
                onClick={() => pick(q.date)}
              >
                <q.icon data-icon="inline-start" />
                {q.label}
                <span className="ms-auto text-muted-foreground">
                  {format(q.date, "EEE")}
                </span>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="justify-start text-muted-foreground"
              onClick={() => pick(undefined)}
            >
              <BanIcon data-icon="inline-start" />
              No date
            </Button>
          </div>
          <Calendar
            mode="single"
            selected={due}
            onSelect={pick}
            defaultMonth={due}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
