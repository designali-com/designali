"use client"

import * as React from "react"
import {
  Camera as CameraIcon,
  Play as PlayIcon,
  PowerOff as PowerOffIcon,
  RotateCw as RotateCwIcon,
  Server as ServerIcon,
  Square as SquareIcon,
  Terminal as TerminalIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

export default function CloudInstanceMenu() {
  const [state, setState] = React.useState<
    "running" | "stopped" | "terminated"
  >("running")

  return (
    <ContextMenu disabled={state === "terminated"}>
      <ContextMenuTrigger className="flex w-full max-w-xs flex-col gap-3 border p-4 text-xs">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-medium">
            <ServerIcon className="size-4" />
            designali-web-03
          </span>
          <Badge
            variant={
              state === "running"
                ? "secondary"
                : state === "terminated"
                  ? "destructive"
                  : "outline"
            }
          >
            <span
              className={cn(
                "size-1.5 rounded-full",
                state === "running"
                  ? "bg-emerald-500"
                  : state === "stopped"
                    ? "bg-amber-500"
                    : "bg-destructive"
              )}
            />
            {state}
          </Badge>
        </div>
        <dl className="grid grid-cols-2 gap-1 text-muted-foreground">
          <dt>Type</dt>
          <dd className="text-foreground">c6.large</dd>
          <dt>Region</dt>
          <dd className="text-foreground">eu-west-2</dd>
          <dt>IP</dt>
          <dd className="font-mono text-foreground">10.4.18.22</dd>
        </dl>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuItem
            disabled={state === "running"}
            onClick={() => setState("running")}
          >
            <PlayIcon />
            Start
          </ContextMenuItem>
          <ContextMenuItem
            disabled={state !== "running"}
            onClick={() => setState("stopped")}
          >
            <SquareIcon />
            Stop
          </ContextMenuItem>
          <ContextMenuItem disabled={state !== "running"}>
            <RotateCwIcon />
            Reboot
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <TerminalIcon />
            Copy SSH command
          </ContextMenuItem>
          <ContextMenuItem>
            <CameraIcon />
            Create snapshot
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem
            variant="destructive"
            onClick={() => setState("terminated")}
          >
            <PowerOffIcon />
            Terminate instance
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
