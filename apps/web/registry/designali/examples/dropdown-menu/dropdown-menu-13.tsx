"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    dot: "border-muted-foreground border-dashed",
  },
  { value: "todo", label: "Todo", dot: "border-muted-foreground" },
  {
    value: "progress",
    label: "In progress",
    dot: "border-primary bg-primary/40",
  },
  { value: "review", label: "In review", dot: "border-primary bg-primary/40" },
  { value: "done", label: "Done", dot: "border-primary bg-primary" },
]

export default function IssueStatusPicker() {
  const [status, setStatus] = React.useState("progress")
  const current = statuses.find((s) => s.value === status)!

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-3 text-xs">
      <span className="font-sans text-muted-foreground">DSG-318</span>
      <span className="flex-1 truncate font-medium">
        Polish empty states on designali.com pricing page
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
          <span className={cn("size-2.5 rounded-full border-2", current.dot)} />
          {current.label}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
            {statuses.map((s, index) => (
              <DropdownMenuRadioItem key={s.value} value={s.value}>
                <span className={cn("size-2.5 rounded-full border-2", s.dot)} />
                {s.label}
                <DropdownMenuShortcut className="me-4">
                  {index + 1}
                </DropdownMenuShortcut>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
