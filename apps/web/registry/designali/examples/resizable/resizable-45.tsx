"use client"

import * as React from "react"
import { CalendarIcon, HomeIcon, InboxIcon, UsersIcon } from "lucide-react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const items = [
  { label: "Home", icon: HomeIcon },
  { label: "Inbox", icon: InboxIcon },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Team", icon: UsersIcon },
]

export default function IconRailCollapsedSize() {
  const [compact, setCompact] = React.useState(false)

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-64 w-full max-w-lg border"
    >
      <ResizablePanel
        defaultSize="30%"
        minSize="22%"
        maxSize="40%"
        collapsible
        collapsedSize="48px"
        onResize={(size) => setCompact(size.inPixels <= 56)}
      >
        <nav className="flex h-full flex-col gap-1 p-2">
          {items.map((item) => (
            <a
              key={item.label}
              href="#"
              title={item.label}
              className={cn(
                "flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted",
                compact && "justify-center px-0"
              )}
            >
              <item.icon className="size-4 shrink-0" />
              {!compact && <span className="truncate">{item.label}</span>}
            </a>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full items-center justify-center p-4 text-center text-xs text-muted-foreground">
          Drag the sidebar narrower to snap it into an icon rail.
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
