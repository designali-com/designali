"use client"

import * as React from "react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

export default function LayoutChangeLog() {
  const [log, setLog] = React.useState<string[]>([])

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <ResizablePanelGroup
        orientation="horizontal"
        className="h-32 border"
        onLayoutChanged={(layout, meta) => {
          const entry =
            Object.values(layout)
              .map((v) => Math.round(v) + "%")
              .join(" / ") + (meta.isUserInteraction ? " (drag)" : " (initial)")
          setLog((prev) => [entry, ...prev].slice(0, 4))
        }}
      >
        <ResizablePanel id="a" defaultSize="40%">
          <div className="flex h-full items-center justify-center text-xs">
            A
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel id="b" defaultSize="60%">
          <div className="flex h-full items-center justify-center text-xs">
            B
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="flex flex-col gap-1 border bg-muted/40 p-2 font-mono text-[11px]">
        {log.length === 0 ? (
          <span className="text-muted-foreground">
            Drag the handle to record changes
          </span>
        ) : (
          log.map((entry, i) => (
            <span key={i} className={cn(i > 0 && "text-muted-foreground")}>
              {entry}
            </span>
          ))
        )}
      </div>
    </div>
  )
}
