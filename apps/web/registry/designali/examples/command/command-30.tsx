"use client"

import * as React from "react"
import { CalendarIcon, CalendarPlusIcon, UsersIcon } from "lucide-react"

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"

const when = [
  "today at 3:00 PM",
  "tomorrow at 10:00 AM",
  "next Monday at 9:30 AM",
]

export default function NaturalLanguageScheduler() {
  const [text, setText] = React.useState("Design review")
  const title = text.trim() || "Untitled event"

  return (
    <Command shouldFilter={false} className="w-full max-w-sm border">
      <CommandInput
        value={text}
        onValueChange={setText}
        placeholder="Name your event..."
      />
      <CommandList>
        <CommandGroup heading="Create event">
          {when.map((slot) => (
            <CommandItem key={slot} value={slot}>
              <CalendarPlusIcon />
              <span className="truncate">
                <span className="font-medium">{title}</span>{" "}
                <span className="text-muted-foreground">{slot}</span>
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Other">
          <CommandItem value="pick-date">
            <CalendarIcon />
            <span>Pick a custom date...</span>
          </CommandItem>
          <CommandItem value="find-time">
            <UsersIcon />
            <span>Find a time with attendees</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
