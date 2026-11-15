"use client"

import * as React from "react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

const panels = ["Left", "Center", "Right"]

export default function LivePanelSizeReadout() {
  const [sizes, setSizes] = React.useState<
    Record<string, { pct: number; px: number }>
  >({})

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-40 w-full max-w-lg border"
    >
      {panels.map((label, i) => (
        <React.Fragment key={label}>
          {i > 0 && <ResizableHandle withHandle />}
          <ResizablePanel
            id={label}
            minSize="15%"
            onResize={(size) =>
              setSizes((prev) => ({
                ...prev,
                [label]: {
                  pct: Math.round(size.asPercentage),
                  px: Math.round(size.inPixels),
                },
              }))
            }
          >
            <div className="flex h-full flex-col items-center justify-center gap-1">
              <span className="text-xs font-medium">{label}</span>
              <span className="font-mono text-lg tabular-nums">
                {sizes[label]?.pct ?? 33}%
              </span>
              <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                {sizes[label]?.px ?? 0}px
              </span>
            </div>
          </ResizablePanel>
        </React.Fragment>
      ))}
    </ResizablePanelGroup>
  )
}
