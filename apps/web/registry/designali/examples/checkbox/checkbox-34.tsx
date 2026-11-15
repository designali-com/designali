"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Checkbox } from "@workspace/ui/components/checkbox"

const people = [
  { name: "Ava Lindqvist", role: "Organizer", required: true },
  { name: "Ben Okafor", role: "Engineering" },
  { name: "Chloe Ramos", role: "Design" },
  { name: "Dan Whitaker", role: "Sales" },
]

export default function MeetingAttendeesPicker() {
  const [invited, setInvited] = React.useState<string[]>(["Ben Okafor"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <span className="mb-1 text-sm font-medium">Invite to Design review</span>
      {people.map((person) => (
        <label
          key={person.name}
          className="flex cursor-pointer items-center gap-3 px-2 py-1.5 hover:bg-muted"
        >
          <Avatar size="sm">
            <AvatarFallback>
              {person.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">{person.name}</p>
            <p className="text-[11px] text-muted-foreground">{person.role}</p>
          </div>
          <Checkbox
            checked={person.required || invited.includes(person.name)}
            disabled={person.required}
            onCheckedChange={(checked) =>
              setInvited((list) =>
                checked
                  ? [...list, person.name]
                  : list.filter((n) => n !== person.name)
              )
            }
          />
        </label>
      ))}
      <span className="mt-1 text-xs text-muted-foreground">
        {invited.length + 1} attendees
      </span>
    </div>
  )
}
