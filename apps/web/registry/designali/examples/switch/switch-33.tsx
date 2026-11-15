"use client"

import * as React from "react"

import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const services = [
  { id: "api", name: "API gateway", region: "us-east-1", on: true },
  { id: "worker", name: "Queue worker", region: "eu-west-2", on: false },
  { id: "cron", name: "Scheduler", region: "us-east-1", on: true },
]

export default function ServiceStatusSwitches() {
  const [running, setRunning] = React.useState(() =>
    Object.fromEntries(services.map((s) => [s.id, s.on]))
  )

  return (
    <div className="w-full max-w-sm divide-y border">
      {services.map((service) => (
        <div key={service.id} className="flex items-center gap-3 px-4 py-3">
          <span
            className={cn(
              "size-2 rounded-full",
              running[service.id] ? "bg-emerald-500" : "bg-muted-foreground/40"
            )}
          />
          <div className="flex-1">
            <p className="text-sm font-medium">{service.name}</p>
            <p className="font-mono text-xs text-muted-foreground">
              {service.region}
            </p>
          </div>
          <span className="text-xs text-muted-foreground">
            {running[service.id] ? "Running" : "Stopped"}
          </span>
          <Switch
            className="data-checked:bg-emerald-600"
            checked={running[service.id]}
            onCheckedChange={(checked) =>
              setRunning((r) => ({ ...r, [service.id]: checked }))
            }
            aria-label={service.name}
          />
        </div>
      ))}
    </div>
  )
}
