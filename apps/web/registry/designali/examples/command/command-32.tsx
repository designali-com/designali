"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import { cn } from "@workspace/ui/lib/utils"

const integrations = [
  {
    name: "Figma",
    category: "Design",
    installed: true,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Stripe",
    category: "Payments",
    installed: false,
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Notion",
    category: "Project management",
    installed: true,
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Vercel",
    category: "Deployments",
    installed: false,
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "GitHub",
    category: "Code",
    installed: false,
    color: "from-zinc-500 to-zinc-700",
  },
]

export default function IntegrationsMarketplace() {
  const [installed, setInstalled] = React.useState(
    integrations.filter((i) => i.installed).map((i) => i.name)
  )

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search integrations..." />
      <CommandList>
        <CommandEmpty>No integrations found.</CommandEmpty>
        <CommandGroup heading="Integrations">
          {integrations.map((app) => {
            const isInstalled = installed.includes(app.name)
            return (
              <CommandItem
                key={app.name}
                value={app.name + " " + app.category}
                onSelect={() =>
                  setInstalled((current) =>
                    isInstalled
                      ? current.filter((n) => n !== app.name)
                      : [...current, app.name]
                  )
                }
              >
                <span
                  className={cn(
                    "flex size-7 items-center justify-center bg-linear-to-br text-[11px] font-bold text-white",
                    app.color
                  )}
                >
                  {app.name[0]}
                </span>
                <div className="flex flex-col">
                  <span>{app.name}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {app.category}
                  </span>
                </div>
                <Badge
                  variant={isInstalled ? "secondary" : "outline"}
                  className="ms-auto"
                >
                  {isInstalled ? "Connected" : "Install"}
                </Badge>
              </CommandItem>
            )
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
