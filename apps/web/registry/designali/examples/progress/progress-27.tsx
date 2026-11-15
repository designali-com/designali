"use client"

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

export default function ContractTermProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Annual contract</span>
        <span className="text-muted-foreground">Renews Mar 1, 2027</span>
      </div>
      <Progress value={8} min={0} max={12}>
        <ProgressLabel className="text-muted-foreground">
          Term elapsed
        </ProgressLabel>
        <ProgressValue>{(_, value) => value + " of 12 months"}</ProgressValue>
      </Progress>
      <div className="grid grid-cols-12 gap-0.5" aria-hidden>
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className={cn("h-1", i < 8 ? "bg-primary/40" : "bg-muted")}
          />
        ))}
      </div>
    </div>
  )
}
