"use client"

import * as React from "react"
import { ChevronDownIcon, ChevronUpIcon, TerminalIcon } from "lucide-react"

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

export default function CollapsibleTerminalDrawer() {
  const terminalRef = React.useRef<PanelHandle | null>(null)
  const [open, setOpen] = React.useState(true)

  return (
    <div className="flex w-full max-w-xl flex-col border">
      <ResizablePanelGroup orientation="vertical" className="h-64">
        <ResizablePanel defaultSize="65%" minSize="30%">
          <div className="flex h-full items-center justify-center p-4 font-mono text-xs text-muted-foreground">
            editor.tsx
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          panelRef={terminalRef}
          defaultSize="35%"
          minSize="20%"
          collapsible
          onResize={(size) => setOpen(size.asPercentage > 0)}
        >
          <div className="flex h-full flex-col gap-1 bg-muted/40 p-3 font-mono text-[11px]">
            <span>$ pnpm test</span>
            <span className="text-emerald-600 dark:text-emerald-400">
              42 passed, 0 failed
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="flex items-center justify-between border-t px-3 py-1">
        <span className="flex items-center gap-1.5 text-xs font-medium">
          <TerminalIcon className="size-3.5" />
          Terminal
        </span>
        <Button
          size="icon-xs"
          variant="ghost"
          aria-label={open ? "Collapse terminal" : "Expand terminal"}
          onClick={() =>
            open
              ? terminalRef.current?.collapse()
              : terminalRef.current?.expand()
          }
        >
          {open ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </Button>
      </div>
    </div>
  )
}
