import { CircleCheckIcon, CircleIcon, RocketIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { label: "Verify your domain", done: true },
  { label: "Connect a payment provider", done: true },
  { label: "Add a team member", done: false },
  { label: "Publish your store", done: false },
]

export default function AlertSetupProgress() {
  const done = steps.filter((s) => s.done).length

  return (
    <Alert className="max-w-md">
      <RocketIcon />
      <AlertTitle>Finish setting up your store</AlertTitle>
      <AlertDescription className="space-y-2">
        <Progress
          value={(done / steps.length) * 100}
          aria-label="Setup progress"
        />
        <ul className="space-y-1">
          {steps.map((step) => (
            <li
              key={step.label}
              className={cn(
                "flex items-center gap-1.5",
                step.done && "line-through"
              )}
            >
              {step.done ? (
                <CircleCheckIcon className="size-3.5" />
              ) : (
                <CircleIcon className="size-3.5" />
              )}
              {step.label}
            </li>
          ))}
        </ul>
      </AlertDescription>
      <AlertAction>
        <span className="text-xs text-muted-foreground">
          {done}/{steps.length}
        </span>
      </AlertAction>
    </Alert>
  )
}
