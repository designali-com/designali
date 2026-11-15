"use client"

import * as React from "react"
import { DownloadIcon, RefreshCwIcon, XIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const data = {
  "7d": [40, 62, 55, 70, 48, 80, 66],
  "30d": [30, 45, 50, 38, 60, 72, 58, 64, 70, 82, 76, 90],
  "90d": [20, 34, 41, 52, 49, 63, 70, 68, 75, 84, 88, 95],
}

export default function DashboardWidgetMenu() {
  const [range, setRange] = React.useState<keyof typeof data>("7d")
  const [removed, setRemoved] = React.useState(false)

  if (removed) {
    return (
      <div className="flex w-full max-w-sm flex-col items-center gap-2 border border-dashed p-6 text-xs text-muted-foreground">
        Widget removed
        <Button size="sm" variant="outline" onClick={() => setRemoved(false)}>
          Undo
        </Button>
      </div>
    )
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-sm flex-col gap-3 border p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">Active users</span>
          <span className="text-[11px] text-muted-foreground">
            Last {range}
          </span>
        </div>
        <span className="text-2xl font-semibold tabular-nums">12,480</span>
        <div className="flex h-20 items-end gap-1">
          {data[range].map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-primary/80"
              style={{ height: value + "%" }}
            />
          ))}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem>
            <RefreshCwIcon />
            Refresh
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup
          value={range}
          onValueChange={(value) => setRange(value as keyof typeof data)}
        >
          <ContextMenuLabel>Date range</ContextMenuLabel>
          <ContextMenuRadioItem value="7d">Last 7 days</ContextMenuRadioItem>
          <ContextMenuRadioItem value="30d">Last 30 days</ContextMenuRadioItem>
          <ContextMenuRadioItem value="90d">Last 90 days</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <DownloadIcon />
            Export
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-36">
            <ContextMenuGroup>
              <ContextMenuItem>CSV</ContextMenuItem>
              <ContextMenuItem>PNG image</ContextMenuItem>
              <ContextMenuItem>PDF report</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuGroup>
          <ContextMenuItem
            variant="destructive"
            onClick={() => setRemoved(true)}
          >
            <XIcon />
            Remove widget
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
