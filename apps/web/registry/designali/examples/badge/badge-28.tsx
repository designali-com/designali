"use client"

import * as React from "react"
import {
  Calendar as CalendarIcon,
  Cloud as CloudIcon,
  MessageSquare as MessageSquareIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const apps = [
  {
    id: "chat",
    name: "Studio chat",
    description: "Post Designali client updates to a channel",
    icon: MessageSquareIcon,
  },
  {
    id: "calendar",
    name: "Calendar sync",
    description: "Mirror project milestones",
    icon: CalendarIcon,
  },
  {
    id: "storage",
    name: "Figma files",
    description: "Attach design files to projects",
    icon: CloudIcon,
  },
]

export default function IntegrationConnectionBadges() {
  const [connected, setConnected] = React.useState<Record<string, boolean>>({
    chat: true,
  })

  return (
    <div className="w-full max-w-md divide-y border">
      {apps.map((app) => {
        const on = !!connected[app.id]
        return (
          <div key={app.id} className="flex items-center gap-3 p-3">
            <app.icon className="size-5 shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{app.name}</span>
                <Badge
                  variant={on ? "secondary" : "outline"}
                  className={cn(on && "text-chart-3 dark:text-primary")}
                >
                  {on ? "Connected" : "Not connected"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{app.description}</p>
            </div>
            <Switch
              checked={on}
              onCheckedChange={(value) =>
                setConnected((current) => ({ ...current, [app.id]: value }))
              }
              aria-label={"Toggle " + app.name}
            />
          </div>
        )
      })}
    </div>
  )
}
