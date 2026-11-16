import {
  CircleCheck as CircleCheckIcon,
  Circle as CircleIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Spinner } from "@workspace/ui/components/spinner"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { label: "Install dependencies", time: "18s", state: "done" },
  { label: "Run tests", time: "1m 42s", state: "done" },
  { label: "Build production bundle", time: "running", state: "running" },
  { label: "Upload assets", time: "queued", state: "queued" },
  { label: "Deploy designali.com to Vercel", time: "queued", state: "queued" },
]

export default function DeploymentPipelineSteps() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <span className="text-sm font-medium">Deploy #482</span>
        <Badge variant="secondary">
          <Spinner />
          In progress
        </Badge>
      </div>
      <ol className="flex flex-col gap-3 p-4">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-3 text-sm">
            {step.state === "done" && (
              <CircleCheckIcon className="size-4 text-primary dark:text-primary" />
            )}
            {step.state === "running" && <Spinner className="text-primary" />}
            {step.state === "queued" && (
              <CircleIcon className="size-4 text-muted-foreground/50" />
            )}
            <span
              className={cn(
                "flex-1",
                step.state === "queued" && "text-muted-foreground"
              )}
            >
              {step.label}
            </span>
            <span className="font-sans text-xs text-muted-foreground">
              {step.time}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
