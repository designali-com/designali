"use client"

import * as React from "react"
import {
  Circle as CircleIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const tasks = [
  { title: "Design new pricing blocks", owner: "AI", due: "Nov 18", points: 3 },
  { title: "Export icon set to @designali/icons", owner: "AI", due: "Nov 20", points: 1 },
  { title: "Ship Next.js landing template", owner: "AI", due: "Nov 24", points: 5 },
]

export default function ListDisplayOptions() {
  const [show, setShow] = React.useState({
    owner: true,
    due: true,
    points: false,
  })

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-sm flex-col divide-y border">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center gap-2 px-3 py-2 text-xs"
          >
            <CircleIcon className="size-3.5 text-muted-foreground" />
            <span className="flex-1 truncate">{task.title}</span>
            {show.points ? (
              <Badge variant="outline">{task.points} pt</Badge>
            ) : null}
            {show.due ? (
              <span className="text-muted-foreground">{task.due}</span>
            ) : null}
            {show.owner ? (
              <Avatar className="size-5">
                <AvatarFallback className="text-[9px]">
                  {task.owner}
                </AvatarFallback>
              </Avatar>
            ) : null}
          </div>
        ))}
        <p className="px-3 py-1.5 text-[11px] text-muted-foreground">
          Right-click to change display options
        </p>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>Display properties</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={show.owner}
            onCheckedChange={(owner) => setShow((s) => ({ ...s, owner }))}
          >
            Owner
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={show.due}
            onCheckedChange={(due) => setShow((s) => ({ ...s, due }))}
          >
            Due date
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={show.points}
            onCheckedChange={(points) => setShow((s) => ({ ...s, points }))}
          >
            Estimate
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
