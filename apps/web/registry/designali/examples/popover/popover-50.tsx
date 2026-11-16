"use client"

import * as React from "react"
import {
  Minus as MinusIcon,
  Plus as PlusIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const groups = [
  { id: "adults", label: "Adults", hint: "Ages 13+", min: 1, max: 8 },
  { id: "children", label: "Children", hint: "Ages 2-12", min: 0, max: 6 },
  {
    id: "pets",
    label: "Pets",
    hint: "Service animals welcome",
    min: 0,
    max: 2,
  },
] as const

type GroupId = (typeof groups)[number]["id"]

export default function GuestCountPopover() {
  const [counts, setCounts] = React.useState<Record<GroupId, number>>({
    adults: 2,
    children: 0,
    pets: 0,
  })
  const total = counts.adults + counts.children

  const change = (id: GroupId, delta: number, min: number, max: number) =>
    setCounts((prev) => ({
      ...prev,
      [id]: Math.min(max, Math.max(min, prev[id] + delta)),
    }))

  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label>Guests</Label>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="outline" className="justify-start font-normal" />
          }
        >
          <UsersIcon data-icon="inline-start" />
          {total} {total === 1 ? "guest" : "guests"}
          {counts.pets > 0 &&
            ", " + counts.pets + (counts.pets === 1 ? " pet" : " pets")}
        </PopoverTrigger>
        <PopoverContent className="w-72" align="start">
          {groups.map((g) => (
            <div key={g.id} className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-medium">{g.label}</span>
                <span className="text-[11px] text-muted-foreground">
                  {g.hint}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full"
                  aria-label={"Fewer " + g.label.toLowerCase()}
                  disabled={counts[g.id] <= g.min}
                  onClick={() => change(g.id, -1, g.min, g.max)}
                >
                  <MinusIcon />
                </Button>
                <span className="w-4 text-center text-xs tabular-nums">
                  {counts[g.id]}
                </span>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full"
                  aria-label={"More " + g.label.toLowerCase()}
                  disabled={counts[g.id] >= g.max}
                  onClick={() => change(g.id, 1, g.min, g.max)}
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
