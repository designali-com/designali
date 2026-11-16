"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

export default function BeforeAfterCompare() {
  const [split, setSplit] = React.useState(50)

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <ResizablePanelGroup orientation="horizontal" className="h-56 border">
        <ResizablePanel
          defaultSize="50%"
          onResize={(size) => setSplit(Math.round(size.asPercentage))}
        >
          <div className="relative h-full bg-gradient-to-br from-muted-foreground to-muted-foreground">
            <Badge variant="secondary" className="absolute top-2 left-2">
              Before
            </Badge>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="w-1 bg-background" />
        <ResizablePanel defaultSize="50%">
          <div className="relative h-full bg-gradient-to-br from-chart-1 via-primary to-primary">
            <Badge variant="secondary" className="absolute top-2 right-2">
              After
            </Badge>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <p className="text-center text-xs text-muted-foreground">
        Showing {split}% original, {100 - split}% color graded
      </p>
    </div>
  )
}
