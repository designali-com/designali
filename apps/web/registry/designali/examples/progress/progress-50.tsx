import { CirclePauseIcon } from "lucide-react"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function DisabledPausedProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <Progress
        value={61}
        className="opacity-50 [&_[data-slot=progress-indicator]]:bg-muted-foreground"
      >
        <ProgressLabel className="flex items-center gap-1.5">
          <CirclePauseIcon className="size-3.5" />
          Drive sync paused
        </ProgressLabel>
        <ProgressValue />
      </Progress>
      <p className="text-xs text-muted-foreground">
        Your admin paused syncing during maintenance. It will resume
        automatically at 6:00 PM.
      </p>
    </div>
  )
}
