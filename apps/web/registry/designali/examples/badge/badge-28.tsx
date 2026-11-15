"use client"

import * as React from "react"
import { CalendarIcon, CloudIcon, MessageSquareIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const apps = [
  {
    id: "chat",
    name: "Team chat",
    description: "Post alerts to a channel",
    icon: MessageSquareIcon,
  },
  {
    id: "calendar",
    name: "Calendar sync",
    description: "Mirror due dates",
    icon: CalendarIcon,
  },
  {
    id: "storage",
    name: "Cloud storage",
    description: "Attach shared files",
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
                  className={cn(on && "text-emerald-700 dark:text-emerald-400")}
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
