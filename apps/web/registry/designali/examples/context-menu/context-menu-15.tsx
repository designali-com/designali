"use client"

import * as React from "react"
import {
  Globe as GlobeIcon,
  VolumeX as VolumeXIcon,
} from "@designali/icons"

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

const initialTabs = [
  { id: 1, title: "designali.com", pinned: true, muted: false },
  { id: 2, title: "Designali Blocks", pinned: false, muted: false },
  { id: 3, title: "Figma: brand kit", pinned: false, muted: true },
]

export default function BrowserTabStripMenu() {
  const [tabs, setTabs] = React.useState(initialTabs)

  const patch = (id: number, changes: Partial<(typeof initialTabs)[number]>) =>
    setTabs((list) => list.map((t) => (t.id === id ? { ...t, ...changes } : t)))

  return (
    <div className="flex w-full max-w-md items-end gap-px overflow-hidden border-b bg-muted/50 px-1 pt-1">
      {tabs.map((tab) => (
        <ContextMenu key={tab.id}>
          <ContextMenuTrigger
            className={cn(
              "flex min-w-0 items-center gap-1.5 border border-b-0 bg-background px-2 py-1.5 text-xs data-popup-open:bg-muted",
              tab.pinned ? "w-9 shrink-0 justify-center" : "max-w-36 flex-1"
            )}
          >
            <GlobeIcon className="size-3.5 shrink-0" />
            {tab.pinned ? null : <span className="truncate">{tab.title}</span>}
            {tab.muted ? (
              <VolumeXIcon className="size-3 shrink-0 text-muted-foreground" />
            ) : null}
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuGroup>
              <ContextMenuItem>New tab to the right</ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() =>
                  setTabs((list) => [
                    ...list,
                    { ...tab, id: Date.now(), pinned: false },
                  ])
                }
              >
                Duplicate
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuCheckboxItem
                checked={tab.pinned}
                onCheckedChange={(pinned) => patch(tab.id, { pinned })}
              >
                Pin tab
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={tab.muted}
                onCheckedChange={(muted) => patch(tab.id, { muted })}
              >
                Mute site
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() =>
                  setTabs((list) => list.filter((t) => t.id !== tab.id))
                }
              >
                Close tab
                <ContextMenuShortcut>⌘W</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem
                disabled={tabs.length < 2}
                onClick={() => setTabs([tab])}
              >
                Close other tabs
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
