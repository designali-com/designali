"use client"

import * as React from "react"
import { LayoutGridIcon, PlusIcon, RefreshCwIcon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

export default function ControlledOpenMenu() {
  const [open, setOpen] = React.useState(false)
  const [opens, setOpens] = React.useState(0)

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <ContextMenu
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (next) setOpens((n) => n + 1)
        }}
      >
        <ContextMenuTrigger className="flex aspect-video items-center justify-center border border-dashed text-xs text-muted-foreground">
          Right-click the dashboard canvas
        </ContextMenuTrigger>
        <ContextMenuContent className="w-44">
          <ContextMenuGroup>
            <ContextMenuItem>
              <PlusIcon />
              Add widget
            </ContextMenuItem>
            <ContextMenuItem>
              <LayoutGridIcon />
              Auto-arrange
            </ContextMenuItem>
            <ContextMenuItem>
              <RefreshCwIcon />
              Refresh all
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5">
          <span
            className={cn(
              "size-2 rounded-full",
              open ? "bg-emerald-500" : "bg-muted-foreground/40"
            )}
          />
          Menu is {open ? "open" : "closed"}
        </span>
        <span className="text-muted-foreground">Opened {opens}×</span>
      </div>
    </div>
  )
}
