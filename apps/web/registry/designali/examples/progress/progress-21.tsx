import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const options = [
  { label: "Remote first", votes: 482 },
  { label: "Hybrid, 2 days in office", votes: 351 },
  { label: "Fully in office", votes: 97 },
]

export default function PollResults() {
  const total = options.reduce((sum, option) => sum + option.votes, 0)
  const top = Math.max(...options.map((option) => option.votes))

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">Which work setup do you prefer?</p>
      {options.map((option) => (
        <Progress
          key={option.label}
          value={option.votes}
          max={total}
          className={cn(
            "[&_[data-slot=progress-track]]:h-2",
            option.votes !== top &&
              "[&_[data-slot=progress-indicator]]:bg-muted-foreground/40"
          )}
        >
          <ProgressLabel
            className={cn("text-sm", option.votes === top && "font-medium")}
          >
            {option.label}
          </ProgressLabel>
          <ProgressValue />
        </Progress>
      ))}
      <p className="text-xs text-muted-foreground">
        {total} votes &middot; Poll closed
      </p>
    </div>
  )
}
