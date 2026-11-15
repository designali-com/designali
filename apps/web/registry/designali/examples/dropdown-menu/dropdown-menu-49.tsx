"use client"

import * as React from "react"
import {
  CalendarIcon,
  ChevronDownIcon,
  CircleCheckIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const tasks = [
  "Write release notes",
  "Update onboarding emails",
  "Audit color contrast",
]

export default function DisabledTriggerMenu() {
  const [selected, setSelected] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {selected.length} selected
        </span>
        <DropdownMenu disabled={selected.length === 0}>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size="sm"
                disabled={selected.length === 0}
              />
            }
          >
            Bulk actions
            <ChevronDownIcon data-icon="inline-end" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={() => setSelected([])}>
              <CircleCheckIcon />
              Mark complete
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CalendarIcon />
              Change due date
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onClick={() => setSelected([])}
            >
              <Trash2Icon />
              Delete {selected.length}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="divide-y border">
        {tasks.map((task) => (
          <label
            key={task}
            className="flex items-center gap-2 px-3 py-2 text-xs"
          >
            <Checkbox
              checked={selected.includes(task)}
              onCheckedChange={(checked) =>
                setSelected((prev) =>
                  checked ? [...prev, task] : prev.filter((t) => t !== task)
                )
              }
            />
            {task}
          </label>
        ))}
      </div>
    </div>
  )
}
