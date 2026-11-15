"use client"

import * as React from "react"
import { ChartColumnIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const metrics = [
  { label: "Revenue", value: "revenue", data: [12, 18, 15, 22, 28, 24, 31] },
  { label: "Orders", value: "orders", data: [30, 26, 34, 29, 38, 41, 36] },
  { label: "Refunds", value: "refunds", data: [6, 4, 7, 3, 5, 2, 4] },
]

const days = ["M", "T", "W", "T", "F", "S", "S"]

export default function ChartMetricSelect() {
  const [metric, setMetric] = React.useState<string | null>("revenue")
  const current = metrics.find((item) => item.value === metric) ?? metrics[0]!
  const max = Math.max(...current.data)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">This week</span>
        <Select items={metrics} value={metric} onValueChange={setMetric}>
          <SelectTrigger size="sm" aria-label="Metric">
            <ChartColumnIcon className="text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {metrics.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex h-28 items-end gap-2">
        {current.data.map((point, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full bg-primary/80 transition-all"
              style={{ height: (point / max) * 96 }}
            />
            <span className="text-[10px] text-muted-foreground">
              {days[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
