import {
  TrendingDown as TrendingDownIcon,
  TrendingUp as TrendingUpIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const metrics = [
  { label: "Revenue", value: "$48.2k", change: 12.4 },
  { label: "Churn", value: "2.1%", change: -0.6 },
  { label: "Template sales", value: "1,284", change: -4.3 },
]

export default function KpiTrendBadges() {
  return (
    <div className="grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-3">
      {metrics.map((metric) => {
        const up = metric.change > 0
        const good = metric.label === "Churn" ? !up : up
        return (
          <div key={metric.label} className="flex flex-col gap-1 border p-3">
            <span className="text-xs text-muted-foreground">
              {metric.label}
            </span>
            <span className="text-lg font-semibold">{metric.value}</span>
            <Badge
              className={cn(
                good
                  ? "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1"
                  : "bg-destructive/5 text-destructive dark:bg-destructive/15 dark:text-destructive"
              )}
            >
              {up ? (
                <TrendingUpIcon data-icon="inline-start" />
              ) : (
                <TrendingDownIcon data-icon="inline-start" />
              )}
              {(up ? "+" : "") + metric.change + "%"}
            </Badge>
          </div>
        )
      })}
    </div>
  )
}
