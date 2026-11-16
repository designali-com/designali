import * as React from "react"

import { Separator } from "@workspace/ui/components/separator"

const kpis = [
  { label: "Template sales", value: "$48.2k", delta: "+6.4%" },
  { label: "Active customers", value: "3,912", delta: "+2.1%" },
  { label: "Churn", value: "1.8%", delta: "-0.3%" },
]

export default function KpiStatsVerticalSeparators() {
  return (
    <div className="flex w-full max-w-md items-stretch border p-4">
      {kpis.map((kpi, index) => (
        <React.Fragment key={kpi.label}>
          {index > 0 && <Separator orientation="vertical" className="mx-4" />}
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-xs text-muted-foreground">{kpi.label}</span>
            <span className="text-lg font-semibold tabular-nums">
              {kpi.value}
            </span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400">
              {kpi.delta}
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
