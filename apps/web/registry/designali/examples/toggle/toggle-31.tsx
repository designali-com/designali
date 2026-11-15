"use client"

import * as React from "react"
import {
  ChartBarIcon,
  FolderIcon,
  InboxIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  SettingsIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

const nav = [
  { label: "Inbox", icon: InboxIcon },
  { label: "Projects", icon: FolderIcon },
  { label: "Reports", icon: ChartBarIcon },
  { label: "Settings", icon: SettingsIcon },
]

export default function SidebarCollapseToggle() {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className="flex h-56 w-full max-w-sm border">
      <aside
        className={cn(
          "flex flex-col gap-1 border-e p-2 transition-all",
          collapsed ? "w-12" : "w-40"
        )}
      >
        {nav.map((n) => (
          <Button
            key={n.label}
            variant="ghost"
            size="sm"
            className={cn("justify-start", collapsed && "justify-center px-0")}
            aria-label={n.label}
          >
            <n.icon />
            {!collapsed && n.label}
          </Button>
        ))}
      </aside>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <Toggle
          size="sm"
          pressed={collapsed}
          onPressedChange={setCollapsed}
          aria-label="Collapse sidebar"
          className="self-start"
        >
          {collapsed ? <PanelLeftOpenIcon /> : <PanelLeftCloseIcon />}
        </Toggle>
        <p className="text-xs text-muted-foreground">Main content area</p>
      </div>
    </div>
  )
}
