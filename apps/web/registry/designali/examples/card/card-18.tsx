"use client"

import * as React from "react"
import { PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  { id: 1, label: "Review onboarding copy", done: true },
  { id: 2, label: "Export icons for Android", done: false },
  { id: 3, label: "QA checkout on Safari", done: false },
  { id: 4, label: "Write release notes", done: false },
]

export default function TaskChecklistCard() {
  const [tasks, setTasks] = React.useState(initial)
  const [draft, setDraft] = React.useState("")
  const done = tasks.filter((t) => t.done).length

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Today</CardTitle>
        <CardDescription>
          {done} of {tasks.length} completed
        </CardDescription>
        <CardAction>
          <Progress
            value={(done / tasks.length) * 100}
            className="w-20"
            aria-label="Completion"
          />
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-2.5">
        {tasks.map((t) => (
          <label key={t.id} className="flex items-center gap-2.5">
            <Checkbox
              checked={t.done}
              onCheckedChange={(checked) =>
                setTasks(
                  tasks.map((x) =>
                    x.id === t.id ? { ...x, done: checked === true } : x
                  )
                )
              }
            />
            <span
              className={cn(t.done && "text-muted-foreground line-through")}
            >
              {t.label}
            </span>
          </label>
        ))}
      </CardContent>
      <CardFooter>
        <form
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            if (!draft.trim()) return
            setTasks([
              ...tasks,
              { id: tasks.length + 1, label: draft.trim(), done: false },
            ])
            setDraft("")
          }}
        >
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Add a task"
          />
          <Button
            type="submit"
            size="icon"
            variant="outline"
            aria-label="Add task"
          >
            <PlusIcon />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
