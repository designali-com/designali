"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  CircleCheck as CircleCheckIcon,
  CircleDashed as CircleDashedIcon,
  CircleDot as CircleDotIcon,
  CircleEllipsis as CircleEllipsisIcon,
  Circle as CircleIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@workspace/ui/components/command"
import { cn } from "@workspace/ui/lib/utils"

const statuses = [
  {
    id: "backlog",
    label: "Backlog",
    icon: CircleDashedIcon,
    color: "text-muted-foreground",
  },
  { id: "todo", label: "Todo", icon: CircleIcon, color: "text-foreground" },
  {
    id: "progress",
    label: "In progress",
    icon: CircleDotIcon,
    color: "text-amber-500",
  },
  {
    id: "review",
    label: "In review",
    icon: CircleEllipsisIcon,
    color: "text-violet-500",
  },
  {
    id: "done",
    label: "Done",
    icon: CircleCheckIcon,
    color: "text-emerald-500",
  },
]

export default function IssueStatusPicker() {
  const [status, setStatus] = React.useState("progress")
  const active = statuses.find((s) => s.id === status)!

  return (
    <div className="flex w-full max-w-60 flex-col gap-2">
      <div className="flex items-center gap-2 text-xs">
        <span className="font-mono text-muted-foreground">DSG-482</span>
        <active.icon className={cn("size-3.5", active.color)} />
        <span>{active.label}</span>
      </div>
      <Command className="border">
        <CommandInput placeholder="Change status..." />
        <CommandList>
          <CommandEmpty>No status.</CommandEmpty>
          <CommandGroup>
            {statuses.map((s, index) => (
              <CommandItem
                key={s.id}
                value={s.label}
                onSelect={() => setStatus(s.id)}
              >
                <s.icon className={s.color} />
                <span>{s.label}</span>
                {s.id === status ? <CheckIcon className="size-3.5" /> : null}
                <CommandShortcut>{index + 1}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
