"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@workspace/ui/components/avatar"
import { cn } from "@workspace/ui/lib/utils"

const people = [
  { id: "am", name: "Alma Moreau" },
  { id: "bj", name: "Bilal Jaber" },
  { id: "cw", name: "Cora Whitfield" },
  { id: "dn", name: "Dev Nair" },
  { id: "ek", name: "Emi Kowal" },
]

export default function AssigneeToggleSelector() {
  const [selected, setSelected] = React.useState<string[]>(["bj"])

  function toggle(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((value) => value !== id)
        : [...current, id]
    )
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <p className="text-sm font-medium">Assign to</p>
      <div className="flex flex-wrap gap-2">
        {people.map((person) => {
          const active = selected.includes(person.id)
          return (
            <button
              key={person.id}
              type="button"
              aria-pressed={active}
              aria-label={person.name}
              title={person.name}
              onClick={() => toggle(person.id)}
              className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Avatar
                size="lg"
                className={cn(
                  "transition",
                  active
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                <AvatarFallback className="uppercase">
                  {person.id}
                </AvatarFallback>
                {active && (
                  <AvatarBadge>
                    <CheckIcon />
                  </AvatarBadge>
                )}
              </Avatar>
            </button>
          )
        })}
      </div>
      <p className="text-xs text-muted-foreground">
        {selected.length === 0
          ? "Unassigned"
          : selected.length + " assignee" + (selected.length > 1 ? "s" : "")}
      </p>
    </div>
  )
}
