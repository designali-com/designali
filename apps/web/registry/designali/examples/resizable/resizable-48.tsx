"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  { id: 1, title: "Prepare launch checklist", done: true, due: "Today" },
  { id: 2, title: "Review onboarding copy", done: false, due: "Tomorrow" },
  { id: 3, title: "QA mobile checkout", done: false, due: "Fri" },
]

export default function TaskListWithDetail() {
  const [tasks, setTasks] = React.useState(initial)
  const [activeId, setActiveId] = React.useState(2)
  const active = tasks.find((t) => t.id === activeId)!

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-64 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="55%" minSize="40%">
        <div className="flex h-full flex-col divide-y">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => setActiveId(task.id)}
              className={cn(
                "flex cursor-pointer items-center gap-2 px-3 py-2 text-xs",
                task.id === activeId && "bg-muted/60"
              )}
            >
              <Checkbox
                checked={task.done}
                aria-label={task.title}
                onCheckedChange={(checked) =>
                  setTasks((prev) =>
                    prev.map((t) =>
                      t.id === task.id ? { ...t, done: checked === true } : t
                    )
                  )
                }
              />
              <span
                className={cn(
                  "min-w-0 flex-1 truncate",
                  task.done && "text-muted-foreground line-through"
                )}
              >
                {task.title}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {task.due}
              </span>
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="45%" minSize="30%">
        <div className="flex h-full flex-col gap-2 p-3 text-xs">
          <span className="font-medium">{active.title}</span>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <CalendarIcon className="size-3.5" />
            Due {active.due}
          </div>
          <Badge
            variant={active.done ? "secondary" : "outline"}
            className="self-start"
          >
            {active.done ? "Completed" : "Open"}
          </Badge>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
