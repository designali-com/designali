import { Badge } from "@workspace/ui/components/badge"
import { Progress, ProgressLabel } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const stages = [
  { name: "Build", status: "done", duration: "1m 12s" },
  { name: "Unit tests", status: "done", duration: "2m 48s" },
  { name: "Integration tests", status: "running", duration: "Running" },
  { name: "Deploy to production", status: "queued", duration: "Queued" },
]

export default function DeploymentPipelineStages() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="font-sans text-xs">main &middot; 4f2a9c1</span>
        <Badge variant="secondary">In progress</Badge>
      </div>
      {stages.map((stage) => (
        <Progress
          key={stage.name}
          value={
            stage.status === "done" ? 100 : stage.status === "queued" ? 0 : null
          }
          className={cn(
            stage.status === "running" &&
              "[&_[data-slot=progress-indicator]]:w-2/5 [&_[data-slot=progress-indicator]]:animate-pulse"
          )}
        >
          <ProgressLabel
            className={cn(
              "text-sm",
              stage.status === "queued" && "text-muted-foreground"
            )}
          >
            {stage.name}
          </ProgressLabel>
          <span className="ms-auto text-xs text-muted-foreground">
            {stage.duration}
          </span>
        </Progress>
      ))}
    </div>
  )
}
