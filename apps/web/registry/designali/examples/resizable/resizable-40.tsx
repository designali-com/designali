"use client"

import * as React from "react"
import {
  MonitorSmartphone as MonitorSmartphoneIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

function breakpoint(px: number) {
  if (px >= 640) return "sm"
  if (px >= 480) return "xs"
  return "base"
}

export default function ResponsivePreviewWidth() {
  const [width, setWidth] = React.useState(0)

  return (
    <div className="flex w-full max-w-2xl flex-col gap-2">
      <div className="flex items-center gap-2 text-xs">
        <MonitorSmartphoneIcon className="size-3.5" />
        <span className="font-mono tabular-nums">{width}px</span>
        <Badge variant="outline">{breakpoint(width)}</Badge>
      </div>
      <ResizablePanelGroup
        orientation="horizontal"
        className="h-48 border bg-muted/40"
      >
        <ResizablePanel
          defaultSize="70%"
          minSize="30%"
          onResize={(size) => setWidth(Math.round(size.inPixels))}
        >
          <div className="flex h-full flex-col gap-2 bg-background p-3">
            <div className="h-3 w-24 bg-foreground/80" />
            <div
              className={cn(
                "grid gap-2",
                width >= 480 ? "grid-cols-3" : "grid-cols-1"
              )}
            >
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-10 bg-muted" />
              ))}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="30%">
          <div className="h-full" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
