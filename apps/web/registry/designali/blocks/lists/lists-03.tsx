"use client"

import { useState } from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const initialTasks = [
  { id: 1, title: "Finalise homepage hero copy", owner: "AK", due: "Today", done: true },
  { id: 2, title: "Review pricing page with legal", owner: "JM", due: "Today", done: false },
  { id: 3, title: "Export icon set at 1.5px stroke", owner: "SL", due: "Tomorrow", done: false },
  { id: 4, title: "QA dark mode on dashboard", owner: "AK", due: "Wed", done: false },
  { id: 5, title: "Write release notes for v4.2", owner: "RP", due: "Thu", done: false },
  { id: 6, title: "Schedule launch newsletter", owner: "JM", due: "Fri", done: true },
]

export default function Lists03() {
  const [tasks, setTasks] = useState(initialTasks)
  const completed = tasks.filter((task) => task.done).length

  const toggle = (id: number) =>
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    )

  return (
    <section className="w-full bg-muted/40 py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="border border-border bg-background">
          <header className="border-b border-border p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold tracking-tight">Launch week</h2>
              <span className="font-mono text-xs text-muted-foreground">
                {completed}/{tasks.length}
              </span>
            </div>
            <div className="mt-4 h-1 w-full bg-muted">
              <div
                className="h-full bg-foreground transition-all"
                style={{ width: `${(completed / tasks.length) * 100}%` }}
              />
            </div>
          </header>

          <ul className="divide-y divide-border">
            {tasks.map((task) => (
              <li key={task.id}>
                <label className="flex cursor-pointer items-center gap-4 px-6 py-4 hover:bg-muted/40">
                  <Checkbox
                    checked={task.done}
                    onCheckedChange={() => toggle(task.id)}
                  />
                  <span
                    className={cn(
                      "flex-1 text-sm",
                      task.done && "text-muted-foreground line-through"
                    )}
                  >
                    {task.title}
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {task.due}
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-muted text-[10px] font-medium">
                    {task.owner}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
