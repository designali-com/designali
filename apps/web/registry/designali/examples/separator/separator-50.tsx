import * as React from "react"

import { Progress } from "@workspace/ui/components/progress"
import { Separator } from "@workspace/ui/components/separator"

const meters = [
  { label: "Seats", used: 8, limit: 10 },
  { label: "Storage", used: 34, limit: 50, unit: "GB" },
  { label: "API calls", used: 92, limit: 100, unit: "k" },
]

export default function UsageMeterSections() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <span className="text-sm font-medium">Usage this month</span>
      {meters.map((meter) => {
        const pct = Math.round((meter.used / meter.limit) * 100)
        return (
          <React.Fragment key={meter.label}>
            <Separator />
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex justify-between">
                <span>{meter.label}</span>
                <span className="text-muted-foreground tabular-nums">
                  {meter.used}
                  {meter.unit} / {meter.limit}
                  {meter.unit}
                </span>
              </div>
              <Progress value={pct} />
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
