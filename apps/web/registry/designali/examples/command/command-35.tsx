"use client"

import * as React from "react"
import {
  AlarmClockIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CoffeeIcon,
  SunriseIcon,
  SunsetIcon,
} from "lucide-react"

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@workspace/ui/components/command"

function at(daysAhead: number, hour: number) {
  const date = new Date()
  date.setDate(date.getDate() + daysAhead)
  date.setHours(hour, 0, 0, 0)
  return date
}

const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  hour: "numeric",
  minute: "2-digit",
})

export default function SnoozeUntilPicker() {
  const [snoozed, setSnoozed] = React.useState<string | null>(null)
  const daysToMonday = (8 - new Date().getDay()) % 7 || 7
  const options = [
    { label: "Later today", date: at(0, 18), icon: SunsetIcon },
    { label: "Tomorrow", date: at(1, 8), icon: SunriseIcon },
    {
      label: "This weekend",
      date: at((6 - new Date().getDay() + 7) % 7 || 7, 9),
      icon: CoffeeIcon,
    },
    { label: "Next week", date: at(daysToMonday, 8), icon: CalendarDaysIcon },
  ]

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Command className="border">
        <CommandList>
          <CommandGroup heading="Snooze until">
            {options.map((option) => (
              <CommandItem
                key={option.label}
                onSelect={() =>
                  setSnoozed(
                    option.label + ", " + formatter.format(option.date)
                  )
                }
              >
                <option.icon />
                <span>{option.label}</span>
                <CommandShortcut className="tracking-normal">
                  {formatter.format(option.date)}
                </CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup>
            <CommandItem>
              <CalendarIcon />
              <span>Pick date &amp; time</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
      {snoozed ? (
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <AlarmClockIcon className="size-3.5" />
          Snoozed: {snoozed}
        </p>
      ) : null}
    </div>
  )
}
