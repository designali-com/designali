import {
  CircleCheck as CircleCheckIcon,
  Circle as CircleIcon,
} from "@designali/icons"

import { Progress, ProgressLabel } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const tasks = [
  { label: "Create your designali account", done: true },
  { label: "Invite teammates", done: true },
  { label: "Install @designali/icons", done: true },
  { label: "Pick your first template", done: false },
  { label: "Deploy to Vercel", done: false },
]

export default function OnboardingChecklistProgress() {
  const done = tasks.filter((task) => task.done).length

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={(done / tasks.length) * 100}>
        <ProgressLabel className="text-sm font-medium">
          Get started
        </ProgressLabel>
        <span className="ms-auto text-xs text-muted-foreground">
          {done} of {tasks.length} complete
        </span>
      </Progress>
      <ul className="flex flex-col gap-2">
        {tasks.map((task) => (
          <li key={task.label} className="flex items-center gap-2 text-sm">
            {task.done ? (
              <CircleCheckIcon className="size-4 text-primary" />
            ) : (
              <CircleIcon className="size-4 text-muted-foreground" />
            )}
            <span
              className={cn(task.done && "text-muted-foreground line-through")}
            >
              {task.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
