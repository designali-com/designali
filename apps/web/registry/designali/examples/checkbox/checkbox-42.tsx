"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const subtasks = [
  "Design hero block",
  "Review with Ali",
  "Add dark mode",
  "Update Designali docs",
]

export default function NestedSubtaskTree() {
  const [done, setDone] = React.useState<string[]>(["Design hero block"])
  const all = done.length === subtasks.length

  return (
    <div className="w-full max-w-xs border p-3">
      <label className="flex items-center gap-2">
        <Checkbox
          checked={all}
          indeterminate={done.length > 0 && !all}
          onCheckedChange={(checked) => setDone(checked ? subtasks : [])}
          className="data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground"
        />
        <span
          className={cn(
            "text-sm font-medium",
            all && "text-muted-foreground line-through"
          )}
        >
          Public API v2
        </span>
        <Badge variant="secondary" className="ms-auto">
          {done.length}/{subtasks.length}
        </Badge>
      </label>
      <div className="ms-2 mt-2 flex flex-col gap-2 border-s ps-4">
        {subtasks.map((task) => (
          <label key={task} className="flex items-center gap-2 text-xs">
            <Checkbox
              checked={done.includes(task)}
              onCheckedChange={(checked) =>
                setDone((list) =>
                  checked ? [...list, task] : list.filter((t) => t !== task)
                )
              }
            />
            <span
              className={cn(
                done.includes(task) && "text-muted-foreground line-through"
              )}
            >
              {task}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
