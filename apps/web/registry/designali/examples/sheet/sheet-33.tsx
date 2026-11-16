"use client"

import * as React from "react"
import {
  Calendar as CalendarIcon,
  Cloud as CloudIcon,
  GitBranch as GitBranchIcon,
  MessageSquare as MessageSquareIcon,
  Plug as PlugIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const initial = [
  {
    id: "chat",
    name: "Relay Chat",
    hint: "Post alerts to channels",
    icon: MessageSquareIcon,
    connected: true,
  },
  {
    id: "git",
    name: "Forge Git",
    hint: "Link commits to issues",
    icon: GitBranchIcon,
    connected: false,
  },
  {
    id: "cal",
    name: "Daybook Calendar",
    hint: "Sync due dates",
    icon: CalendarIcon,
    connected: false,
  },
  {
    id: "drive",
    name: "Cloudbox Drive",
    hint: "Attach files from storage",
    icon: CloudIcon,
    connected: true,
  },
]

export default function IntegrationsSheet() {
  const [apps, setApps] = React.useState(initial)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <PlugIcon data-icon="inline-start" />
        Integrations
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Integrations</SheetTitle>
          <SheetDescription>
            {apps.filter((a) => a.connected).length} of {apps.length} connected
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          {apps.map((app) => (
            <div key={app.id} className="flex items-center gap-3 border p-3">
              <span className="flex size-8 items-center justify-center bg-muted">
                <app.icon className="size-4" />
              </span>
              <div className="flex flex-1 flex-col">
                <span className="font-medium">{app.name}</span>
                <span className="text-muted-foreground">{app.hint}</span>
              </div>
              <Button
                size="sm"
                variant={app.connected ? "outline" : "default"}
                onClick={() =>
                  setApps((prev) =>
                    prev.map((a) =>
                      a.id === app.id ? { ...a, connected: !a.connected } : a
                    )
                  )
                }
              >
                {app.connected ? "Disconnect" : "Connect"}
              </Button>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
