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

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: CircleDashedIcon,
    className: "text-muted-foreground",
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
    className: "text-foreground",
  },
  {
    value: "progress",
    label: "In progress",
    icon: CircleDotIcon,
    className: "text-amber-500",
  },
  {
    value: "review",
    label: "In review",
    icon: CircleEllipsisIcon,
    className: "text-sky-500",
  },
  {
    value: "done",
    label: "Done",
    icon: CircleCheckIcon,
    className: "text-emerald-500",
  },
]

export default function IssueStatusPopover() {
  const [status, setStatus] = React.useState("progress")
  const [open, setOpen] = React.useState(false)
  const current = statuses.find((s) => s.value === status)!

  return (
    <div className="flex w-full max-w-sm items-center gap-2 border p-3">
      <span className="font-mono text-xs text-muted-foreground">DSN-318</span>
      <span className="flex-1 truncate text-xs">
        Fix dark mode on pricing blocks
      </span>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger render={<Button variant="outline" size="sm" />}>
          <current.icon
            data-icon="inline-start"
            className={current.className}
          />
          {current.label}
        </PopoverTrigger>
        <PopoverContent className="w-48 gap-0 p-1" align="end">
          {statuses.map((s) => (
            <Button
              key={s.value}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => (setStatus(s.value), setOpen(false))}
            >
              <s.icon data-icon="inline-start" className={s.className} />
              <span className="flex-1 text-start">{s.label}</span>
              {s.value === status && <CheckIcon />}
            </Button>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
