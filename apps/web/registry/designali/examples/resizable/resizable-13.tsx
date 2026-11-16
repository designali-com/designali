"use client"

import * as React from "react"
import {
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
} from "@designali/icons"

import { Label } from "@workspace/ui/components/label"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function LockableLayout() {
  const [locked, setLocked] = React.useState(true)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label
          htmlFor="lock-layout"
          className="flex items-center gap-2 text-xs"
        >
          {locked ? (
            <LockIcon className="size-3.5" />
          ) : (
            <LockOpenIcon className="size-3.5" />
          )}
          Lock layout
        </Label>
        <Switch id="lock-layout" checked={locked} onCheckedChange={setLocked} />
      </div>
      <ResizablePanelGroup
        orientation="horizontal"
        disabled={locked}
        className={cn("h-40 border", locked && "opacity-80")}
      >
        <ResizablePanel defaultSize="40%">
          <div className="flex h-full items-center justify-center text-xs">
            Widgets
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="60%">
          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
            {locked ? "Unlock to resize" : "Drag the handle"}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
