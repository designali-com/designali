"use client"

import * as React from "react"
import {
  BarChart3Icon,
  FolderIcon,
  LayoutDashboardIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  SettingsIcon,
} from "lucide-react"

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

const links = [
  { label: "Overview", icon: LayoutDashboardIcon },
  { label: "Projects", icon: FolderIcon },
  { label: "Reports", icon: BarChart3Icon },
  { label: "Settings", icon: SettingsIcon },
]

export default function CollapsibleSidebarToggle() {
  const sidebarRef = React.useRef<PanelHandle | null>(null)
  const [collapsed, setCollapsed] = React.useState(false)

  const toggle = () => {
    const panel = sidebarRef.current
    if (!panel) return
    if (panel.isCollapsed()) panel.expand()
    else panel.collapse()
  }

  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-lg border"
    >
      <ResizablePanel
        panelRef={sidebarRef}
        defaultSize="30%"
        minSize="20%"
        maxSize="45%"
        collapsible
        onResize={(size) => setCollapsed(size.asPercentage === 0)}
      >
        <nav className="flex h-full flex-col gap-0.5 p-2">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 text-xs hover:bg-muted"
            >
              <link.icon className="size-3.5 shrink-0" />
              <span className="truncate">{link.label}</span>
            </a>
          ))}
        </nav>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="70%">
        <div className="flex h-full flex-col gap-3 p-4">
          <Button
            size="sm"
            variant="outline"
            className="self-start"
            onClick={toggle}
          >
            {collapsed ? (
              <PanelLeftOpenIcon data-icon="inline-start" />
            ) : (
              <PanelLeftCloseIcon data-icon="inline-start" />
            )}
            {collapsed ? "Show sidebar" : "Hide sidebar"}
          </Button>
          <p className="text-xs text-muted-foreground">
            Drag the handle past the minimum width or use the button to collapse
            the navigation.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
