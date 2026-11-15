"use client"

import * as React from "react"
import { ChartColumnIcon, ChartLineIcon } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const values = [32, 48, 40, 64, 56, 72, 60]

export default function ChartTypeToggleGroup() {
  const [type, setType] = React.useState("bar")
  const points = values.map((v, i) => i * 40 + 20 + "," + (100 - v)).join(" ")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Weekly sign-ups</span>
        <ToggleGroup
          size="sm"
          variant="outline"
          spacing={0}
          value={[type]}
          onValueChange={(next) => next[0] && setType(next[0])}
        >
          <ToggleGroupItem value="bar" aria-label="Bar chart">
            <ChartColumnIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="line" aria-label="Line chart">
            <ChartLineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <svg viewBox="0 0 280 100" className="h-28 w-full text-primary">
        {type === "bar" ? (
          values.map((v, i) => (
            <rect
              key={i}
              x={i * 40 + 8}
              y={100 - v}
              width="24"
              height={v}
              className="fill-current"
            />
          ))
        ) : (
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        )}
      </svg>
    </div>
  )
}
