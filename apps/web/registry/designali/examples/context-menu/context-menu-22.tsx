"use client"

import * as React from "react"
import {
  Plus as PlusIcon,
  RotateCw as RotateCwIcon,
  ScrollText as ScrollTextIcon,
  Server as ServerIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

export default function ActivityLogMenu() {
  const [log, setLog] = React.useState<string[]>([])
  const add = (entry: string) =>
    setLog((current) =>
      [new Date().toLocaleTimeString() + " — " + entry, ...current].slice(0, 4)
    )

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <ContextMenu>
        <ContextMenuTrigger className="flex items-center gap-3 border p-3">
          <div className="flex size-10 items-center justify-center bg-muted">
            <ServerIcon className="size-5" />
          </div>
          <div className="flex flex-col text-xs">
            <span className="font-medium">designali-web-prod</span>
            <span className="text-muted-foreground">
              us-east-1 · 3 replicas
            </span>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-44">
          <ContextMenuGroup>
            <ContextMenuItem onClick={() => add("Scaled to 4 replicas")}>
              <PlusIcon />
              Scale up
            </ContextMenuItem>
            <ContextMenuItem onClick={() => add("Rolling restart started")}>
              <RotateCwIcon />
              Restart
            </ContextMenuItem>
            <ContextMenuItem onClick={() => add("Logs opened")}>
              <ScrollTextIcon />
              View logs
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <div className="flex min-h-20 flex-col gap-1 border bg-muted/30 p-2 font-sans text-[11px] text-muted-foreground">
        {log.length ? (
          log.map((entry) => <span key={entry}>{entry}</span>)
        ) : (
          <span>No activity yet.</span>
        )}
      </div>
    </div>
  )
}
