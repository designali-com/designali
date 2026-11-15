"use client"

import * as React from "react"
import {
  CalendarIcon,
  CheckIcon,
  CloudIcon,
  MessageSquareIcon,
  RefreshCwIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const initial = [
  { name: "Calendar sync", icon: CalendarIcon, status: "connected" },
  { name: "Team chat", icon: MessageSquareIcon, status: "disconnected" },
  { name: "Cloud storage", icon: CloudIcon, status: "error" },
]

export default function IntegrationConnectButtons() {
  const [items, setItems] = React.useState(initial)

  function connect(name: string) {
    setItems(
      items.map((item) =>
        item.name === name ? { ...item, status: "connected" } : item
      )
    )
  }

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {items.map((item) => (
        <div key={item.name} className="flex items-center gap-3 p-3">
          <div className="flex size-8 items-center justify-center bg-muted">
            <item.icon className="size-4" />
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium">{item.name}</span>
            {item.status === "error" && (
              <span className="text-xs text-destructive">Token expired</span>
            )}
          </div>
          {item.status === "connected" && (
            <Button variant="ghost" size="sm" disabled>
              <CheckIcon data-icon="inline-start" />
              Connected
            </Button>
          )}
          {item.status === "disconnected" && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => connect(item.name)}
            >
              Connect
            </Button>
          )}
          {item.status === "error" && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => connect(item.name)}
            >
              <RefreshCwIcon data-icon="inline-start" />
              Reconnect
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}
