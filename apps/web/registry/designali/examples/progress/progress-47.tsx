import {
  FileVideoCamera as FileVideoIcon,
  RefreshCw as RefreshCwIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function FailedUploadRetry() {
  return (
    <div className="flex w-full max-w-sm items-start gap-3 border border-destructive/40 p-3">
      <div className="flex size-9 shrink-0 items-center justify-center bg-destructive/10">
        <FileVideoIcon className="size-4 text-destructive" />
      </div>
      <Progress
        value={43}
        className="min-w-0 flex-1 gap-1.5 [&_[data-slot=progress-indicator]]:bg-destructive"
      >
        <ProgressLabel className="truncate text-sm font-medium">
          designali-showreel.mov
        </ProgressLabel>
        <ProgressValue className="text-destructive" />
        <span className="w-full text-xs text-destructive">
          Connection lost. Upload stopped at 1.2 of 2.8 GB.
        </span>
      </Progress>
      <Button variant="outline" size="icon-sm" aria-label="Retry upload">
        <RefreshCwIcon />
      </Button>
    </div>
  )
}
