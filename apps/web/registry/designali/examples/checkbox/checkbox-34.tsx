"use client"

import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Checkbox } from "@workspace/ui/components/checkbox"

const people = [
  { name: "Ali Imam", role: "Organizer", required: true },
  { name: "Omar", role: "Development" },
  { name: "Sara", role: "Design" },
  { name: "Lena", role: "Client" },
]

export default function MeetingAttendeesPicker() {
  const [invited, setInvited] = React.useState<string[]>(["Omar"])

  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <span className="mb-1 text-sm font-medium">Invite to Designali design review</span>
      {people.map((person) => (
        <label
          key={person.name}
          className="flex cursor-pointer items-center gap-3 px-2 py-1.5 hover:bg-muted"
        >
          <Avatar size="sm">
            {person.name === "Ali Imam" ? (
              <AvatarImage src="/ali.jpg" alt="Ali Imam" />
            ) : null}
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
