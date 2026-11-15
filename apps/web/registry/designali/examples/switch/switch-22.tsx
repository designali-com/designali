"use client"

import * as React from "react"
import { WebhookIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Switch } from "@workspace/ui/components/switch"

const events = [
  { name: "order.created", on: true },
  { name: "order.refunded", on: true },
  { name: "customer.updated", on: false },
  { name: "invoice.payment_failed", on: true },
  { name: "subscription.canceled", on: false },
]

export default function WebhookEventSubscriptions() {
  const [state, setState] = React.useState(() =>
    Object.fromEntries(events.map((e) => [e.name, e.on]))
  )
  const count = Object.values(state).filter(Boolean).length

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <WebhookIcon className="size-4" />
          <span className="text-sm font-medium">Events</span>
        </div>
        <Badge variant="secondary">{count} subscribed</Badge>
      </div>
      {events.map((event) => (
        <div
          key={event.name}
          className="flex items-center justify-between border-b px-4 py-2.5 last:border-b-0"
        >
          <code className="font-mono text-xs">{event.name}</code>
          <Switch
            size="sm"
            checked={state[event.name]}
            onCheckedChange={(checked) =>
              setState((s) => ({ ...s, [event.name]: checked }))
            }
            aria-label={event.name}
          />
        </div>
      ))}
    </div>
  )
}
