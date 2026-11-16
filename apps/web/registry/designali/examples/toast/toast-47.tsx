"use client"

import * as React from "react"
import {
  CircleCheck as CircleCheckIcon,
  Circle as CircleIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"
import { cn } from "@workspace/ui/lib/utils"

const notify = createToastManager()

const tasks = [
  "Create your Designali account",
  "Invite a teammate",
  "Download a template",
  "Publish your first page",
]

export default function OnboardingProgressToast() {
  const [done, setDone] = React.useState<string[]>([])

  function complete(task: string) {
    if (done.includes(task)) return
    const next = [...done, task]
    setDone(next)
    notify.add({
      id: "onboarding",
      type: next.length === tasks.length ? "success" : undefined,
      title:
        next.length === tasks.length ? "You are all set!" : task + " - done",
      description: next.length + " of " + tasks.length + " steps complete",
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-2 border p-4">
        <Progress value={(done.length / tasks.length) * 100} />
        {tasks.map((task) => (
          <Button
            key={task}
            variant="ghost"
            className={cn(
              "justify-start",
              done.includes(task) && "text-muted-foreground line-through"
            )}
            onClick={() => complete(task)}
          >
            {done.includes(task) ? (
              <CircleCheckIcon data-icon="inline-start" />
            ) : (
              <CircleIcon data-icon="inline-start" />
            )}
            {task}
          </Button>
        ))}
      </div>
    </Toaster>
  )
}
