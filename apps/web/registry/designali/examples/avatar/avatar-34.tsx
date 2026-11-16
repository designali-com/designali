"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const suggestions = [
  { handle: "sara", name: "Sara · Designer", initials: "SA" },
  { handle: "sami", name: "Sami · Developer", initials: "SM" },
  { handle: "sana", name: "Sana · Motion", initials: "SN" },
]

export default function MentionSuggestionList() {
  const [active, setActive] = React.useState(0)

  return (
    <div className="w-full max-w-xs">
      <div className="border px-3 py-2 text-sm">
        Thanks for reviewing the Designali blocks{" "}
        <span className="bg-primary/10 text-primary">@sa</span>
      </div>
      <div role="listbox" className="mt-1 border bg-popover p-1 shadow-md">
        {suggestions.map((user, index) => (
          <div
            key={user.handle}
            role="option"
            aria-selected={active === index}
            onMouseEnter={() => setActive(index)}
            className={cn(
              "flex cursor-pointer items-center gap-2 px-2 py-1.5",
              active === index && "bg-muted"
            )}
          >
            <Avatar size="sm">
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{user.name}</span>
            <span className="ms-auto text-xs text-muted-foreground">
              @{user.handle}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
