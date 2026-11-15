"use client"

import * as React from "react"
import { CircleCheckIcon, CircleIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

const initialTasks = [
  { id: 1, title: "Send venue deposit", done: true },
  { id: 2, title: "Draft speaker bios", done: false },
  { id: 3, title: "Order name badges", done: false },
]

export default function TaskCompleteToggles() {
  const [tasks, setTasks] = React.useState(initialTasks)

  return (
    <div className="flex w-full max-w-xs flex-col border">
      <div className="border-b px-3 py-2 text-xs font-medium text-muted-foreground">
        Conference prep - {tasks.filter((t) => t.done).length}/{tasks.length}
      </div>
      {tasks.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-2 border-b px-2 py-1.5 last:border-b-0"
        >
          <Toggle
            size="sm"
            pressed={t.done}
            onPressedChange={(done) =>
              setTasks((prev) =>
                prev.map((x) => (x.id === t.id ? { ...x, done } : x))
              )
            }
            aria-label={"Complete " + t.title}
            className="aria-pressed:bg-transparent aria-pressed:text-emerald-600"
          >
            {t.done ? <CircleCheckIcon /> : <CircleIcon />}
          </Toggle>
          <span
            className={cn(
              "text-sm",
              t.done && "text-muted-foreground line-through"
            )}
          >
            {t.title}
          </span>
        </div>
      ))}
    </div>
  )
}
