"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const ranges: Record<string, { revenue: string; delta: string }> = {
  "7d": { revenue: "$12,480", delta: "+4.2%" },
  "30d": { revenue: "$51,920", delta: "+11.8%" },
  "90d": { revenue: "$148,300", delta: "+9.1%" },
  "12m": { revenue: "$602,450", delta: "+23.6%" },
}

export default function DateRangePresetToggleGroup() {
  const [range, setRange] = React.useState("30d")
  const data = ranges[range]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium">Revenue</span>
        <ToggleGroup
          size="sm"
          spacing={0}
          variant="outline"
          value={[range]}
          onValueChange={(next) => next[0] && setRange(next[0])}
        >
          {Object.keys(ranges).map((key) => (
            <ToggleGroupItem key={key} value={key}>
              {key}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-semibold">{data.revenue}</span>
        <span className="pb-1 text-xs text-emerald-600 dark:text-emerald-400">
          {data.delta}
        </span>
      </div>
    </div>
  )
}
