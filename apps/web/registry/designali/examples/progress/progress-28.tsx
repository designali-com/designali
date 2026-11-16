"use client"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function TaskCountValueRender() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      <Progress
        value={12}
        max={20}
        className="[&_[data-slot=progress-track]]:h-2"
      >
        <ProgressLabel className="text-sm font-medium">
          designali.com launch checklist
        </ProgressLabel>
        <ProgressValue>
          {(formatted, value) => (
            <span>
              <span className="font-medium text-foreground">{value}</span>/20
              tasks ({formatted})
            </span>
          )}
        </ProgressValue>
      </Progress>
      <p className="text-xs text-muted-foreground">
        8 tasks remaining before the release on Thursday.
      </p>
    </div>
  )
}
