"use client"

import * as React from "react"
import { UserXIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"

const people = [
  { name: "Maya Chen", role: "Frontend", open: 3 },
  { name: "Jonah Reyes", role: "Backend", open: 7 },
  { name: "Priya Natarajan", role: "Design", open: 2 },
  { name: "Elliot Brandt", role: "QA", open: 5 },
  { name: "Sofia Laurent", role: "Product", open: 1 },
]

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function AssigneePicker() {
  const [assignee, setAssignee] = React.useState<string | null>(
    "Priya Natarajan"
  )

  return (
    <Command className="w-full max-w-xs border">
      <CommandInput placeholder="Assign to..." />
      <CommandList>
        <CommandEmpty>Nobody with that name.</CommandEmpty>
        <CommandGroup>
          <CommandItem
            data-checked={assignee === null}
            onSelect={() => setAssignee(null)}
          >
            <UserXIcon />
            <span>No assignee</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Team">
          {people.map((person) => (
            <CommandItem
              key={person.name}
              data-checked={assignee === person.name}
              onSelect={() => setAssignee(person.name)}
            >
              <Avatar className="size-6">
                <AvatarFallback className="text-[10px]">
                  {initialsOf(person.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex min-w-0 flex-col">
                <span className="truncate">{person.name}</span>
                <span className="text-[11px] text-muted-foreground">
                  {person.role} · {person.open} open
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
