"use client"

import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Label } from "@workspace/ui/components/label"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  { id: "copy", label: "Write onboarding copy", done: true },
  { id: "illus", label: "Draft empty-state illustrations", done: true },
  { id: "qa", label: "QA on small screens", done: false },
  { id: "ship", label: "Ship behind feature flag", done: false },
]

export default function TaskSubtasks() {
  const [tasks, setTasks] = React.useState(initial)
  const done = tasks.filter((task) => task.done).length
  return (
    <Collapsible defaultOpen className="w-full max-w-sm border">
      <div className="flex items-center gap-3 p-3">
        <CollapsibleTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Toggle subtasks">
              <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-90" />
            </Button>
          }
        />
        <div className="flex-1 space-y-1.5">
          <p className="text-sm font-medium">Redesign onboarding flow</p>
          <Progress value={(done / tasks.length) * 100} />
        </div>
        <span className="text-xs text-muted-foreground">
          {done}/{tasks.length}
        </span>
      </div>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <ul className="flex flex-col gap-2 border-t px-4 py-3">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2">
              <Checkbox
                id={task.id}
                checked={task.done}
                onCheckedChange={(checked) =>
                  setTasks((prev) =>
                    prev.map((t) =>
                      t.id === task.id ? { ...t, done: checked } : t
                    )
                  )
                }
              />
              <Label
                htmlFor={task.id}
                className={cn(
                  "font-normal",
                  task.done && "text-muted-foreground line-through"
                )}
              >
                {task.label}
              </Label>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
