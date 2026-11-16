"use client"

import * as React from "react"
import {
  UserX as UserXIcon,
} from "@designali/icons"

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
  { name: "Ali Imam", role: "Design engineer", open: 3 },
  { name: "Sara", role: "UI designer", open: 7 },
  { name: "Omar", role: "Developer", open: 2 },
  { name: "Zara", role: "Motion designer", open: 5 },
  { name: "Kabir", role: "Brand designer", open: 1 },
]

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function AssigneePicker() {
  const [assignee, setAssignee] = React.useState<string | null>(
    "Ali Imam"
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
