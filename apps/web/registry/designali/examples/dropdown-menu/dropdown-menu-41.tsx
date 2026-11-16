"use client"

import * as React from "react"
import {
  Info as InfoIcon,
  Laptop as LaptopIcon,
  LogOut as LogOutIcon,
  Ellipsis as MoreHorizontalIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const initialSessions = [
  {
    id: "a",
    device: "MacBook Pro · Safari",
    place: "Lisbon, PT",
    current: true,
    icon: LaptopIcon,
  },
  {
    id: "b",
    device: "Pixel 9 · Chrome",
    place: "Porto, PT",
    current: false,
    icon: SmartphoneIcon,
  },
  {
    id: "c",
    device: "iPad Air · App",
    place: "Madrid, ES",
    current: false,
    icon: TabletIcon,
  },
]

export default function ActiveSessionsMenu() {
  const [sessions, setSessions] = React.useState(initialSessions)

  return (
    <div className="w-full max-w-sm divide-y border">
      {sessions.map((s) => (
        <div key={s.id} className="flex items-center gap-3 p-3 text-xs">
          <s.icon className="size-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="font-medium">{s.device}</p>
            <p className="text-muted-foreground">
              {s.place} · {s.current ? "This device" : "Active 3 days ago"}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Session options"
                />
              }
            >
              <MoreHorizontalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem>
                <InfoIcon />
                View details
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                disabled={s.current}
                onClick={() =>
                  setSessions((prev) => prev.filter((p) => p.id !== s.id))
                }
              >
                <LogOutIcon />
                Sign out device
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}
