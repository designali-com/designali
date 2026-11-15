"use client"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function ApiQuotaWarning() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">API requests</span>
        <Badge variant="destructive">Near limit</Badge>
      </div>
      <Progress
        value={92400}
        max={100000}
        className="[&_[data-slot=progress-indicator]]:bg-destructive [&_[data-slot=progress-track]]:h-1.5"
        format={{ notation: "compact" }}
      >
        <ProgressLabel className="text-muted-foreground">
          This billing cycle
        </ProgressLabel>
        <ProgressValue>
          {(_, value) => (value ?? 0).toLocaleString("en-US") + " / 100,000"}
        </ProgressValue>
      </Progress>
      <p className="text-xs text-muted-foreground">
        Resets in 4 days. Requests over the limit return 429.
      </p>
      <Button variant="outline" size="sm" className="self-start">
        Increase limit
      </Button>
    </div>
  )
}
