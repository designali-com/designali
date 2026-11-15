"use client"

import * as React from "react"
import { PanelLeftIcon, PanelRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"

type PanelHandle = {
  collapse: () => void
  expand: () => void
  getSize: () => { asPercentage: number; inPixels: number }
  isCollapsed: () => boolean
  resize: (size: number | string) => void
}

function toggle(panel: PanelHandle | null) {
  if (!panel) return
  if (panel.isCollapsed()) panel.expand()
  else panel.collapse()
}

export default function DualCollapsiblePanels() {
  const leftRef = React.useRef<PanelHandle | null>(null)
  const rightRef = React.useRef<PanelHandle | null>(null)

  return (
    <div className="flex w-full max-w-2xl flex-col border">
      <div className="flex items-center justify-between border-b px-2 py-1">
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Toggle explorer"
          onClick={() => toggle(leftRef.current)}
        >
          <PanelLeftIcon />
        </Button>
        <span className="text-xs font-medium">landing-page.fig</span>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Toggle inspector"
          onClick={() => toggle(rightRef.current)}
        >
          <PanelRightIcon />
        </Button>
      </div>
      <ResizablePanelGroup orientation="horizontal" className="h-56">
        <ResizablePanel
          panelRef={leftRef}
          defaultSize="22%"
          minSize="15%"
          collapsible
        >
          <div className="flex h-full items-center justify-center bg-muted/40 text-xs">
            Explorer
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="56%" minSize="30%">
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
            Canvas
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          panelRef={rightRef}
          defaultSize="22%"
          minSize="15%"
          collapsible
        >
          <div className="flex h-full items-center justify-center bg-muted/40 text-xs">
            Inspector
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
