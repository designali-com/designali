"use client"

import * as React from "react"
import { RotateCcwIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

const defaults = { contrast: 100, saturation: 100, warmth: 0 }

export default function ImageAdjustmentsPanel() {
  const [adj, setAdj] = React.useState(defaults)
  const rows = [
    { key: "contrast", label: "Contrast", min: 50, max: 150 },
    { key: "saturation", label: "Saturation", min: 0, max: 200 },
    { key: "warmth", label: "Warmth", min: -50, max: 50 },
  ] as const

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div
        className="h-24 w-full bg-gradient-to-r from-teal-400 via-amber-300 to-rose-400"
        style={{
          filter:
            "contrast(" +
            adj.contrast +
            "%) saturate(" +
            adj.saturation +
            "%) sepia(" +
            Math.max(0, adj.warmth) +
            "%) hue-rotate(" +
            Math.min(0, adj.warmth) +
            "deg)",
        }}
      />
      {rows.map((row) => (
        <div
          key={row.key}
          className="grid grid-cols-[80px_1fr_32px] items-center gap-3"
        >
          <span className="text-xs">{row.label}</span>
          <Slider
            aria-label={row.label}
            value={[adj[row.key]]}
            onValueChange={(value) =>
              setAdj((prev) => ({
                ...prev,
                [row.key]: (value as number[])[0]!,
              }))
            }
            min={row.min}
            max={row.max}
          />
          <span className="text-right text-xs text-muted-foreground tabular-nums">
            {adj[row.key]}
          </span>
        </div>
      ))}
      <Button
        variant="outline"
        size="sm"
        className="self-end"
        onClick={() => setAdj(defaults)}
      >
        <RotateCcwIcon data-icon="inline-start" />
        Reset
      </Button>
    </div>
  )
}
