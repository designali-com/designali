"use client"

import * as React from "react"
import { LockIcon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

export default function CanvasShapeMenu() {
  const [locked, setLocked] = React.useState(false)
  const [visible, setVisible] = React.useState(true)

  return (
    <div className="relative h-52 w-full max-w-sm border bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px]">
      <ContextMenu>
        <ContextMenuTrigger
          className={cn(
            "absolute top-10 left-10 flex size-28 items-center justify-center bg-linear-to-br from-violet-500 to-indigo-500 text-xs font-medium text-white ring-offset-2 ring-offset-background data-popup-open:ring-2 data-popup-open:ring-primary",
            !visible && "opacity-30"
          )}
        >
          {locked ? <LockIcon className="size-4" /> : "Hero card"}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuGroup>
            <ContextMenuItem disabled={locked}>
              Bring to front
              <ContextMenuShortcut>⇧⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled={locked}>
              Send to back
              <ContextMenuShortcut>⇧⌘[</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem disabled={locked}>
              Group selection
              <ContextMenuShortcut>⌘G</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled={locked}>
              Create component
              <ContextMenuShortcut>⌥⌘K</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuCheckboxItem
              checked={locked}
              onCheckedChange={setLocked}
            >
              Lock layer
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={visible}
              onCheckedChange={setVisible}
            >
              Show layer
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
