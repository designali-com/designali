"use client"

import * as React from "react"
import { ChevronDownIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const metrics = [
  { id: "revenue", label: "Revenue", value: "$48,210", trend: "+12.4%" },
  { id: "orders", label: "Orders", value: "1,932", trend: "+4.1%" },
  { id: "aov", label: "Avg. order value", value: "$24.95", trend: "-1.8%" },
  { id: "refunds", label: "Refund rate", value: "2.3%", trend: "-0.4%" },
]

export default function KpiMetricSwitcher() {
  const [metric, setMetric] = React.useState("revenue")
  const current = metrics.find((m) => m.id === metric)!
  const positive = current.trend.startsWith("+")

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="xs"
              className="-ms-2 w-fit text-muted-foreground"
            />
          }
        >
          {current.label}
          <ChevronDownIcon data-icon="inline-end" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          <DropdownMenuRadioGroup value={metric} onValueChange={setMetric}>
            {metrics.map((m) => (
              <DropdownMenuRadioItem key={m.id} value={m.id}>
                {m.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <p className="text-2xl font-semibold tabular-nums">{current.value}</p>
      <p
        className={cn(
          "flex items-center gap-1 text-xs",
          positive ? "text-emerald-600" : "text-destructive"
        )}
      >
        {positive ? (
          <TrendingUpIcon className="size-3.5" />
        ) : (
          <TrendingDownIcon className="size-3.5" />
        )}
        {current.trend} vs last month
      </p>
    </div>
  )
}
