"use client"

import * as React from "react"
import {
  LaptopIcon,
  LogOutIcon,
  MonitorIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
} from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const initial = [
  {
    id: "1",
    device: "MacBook Pro · Chrome",
    place: "Berlin, DE",
    icon: LaptopIcon,
    current: true,
  },
  {
    id: "2",
    device: "Pixel 8 · App",
    place: "Berlin, DE",
    icon: SmartphoneIcon,
  },
  { id: "3", device: "Windows · Edge", place: "Warsaw, PL", icon: MonitorIcon },
]

export default function ActiveSessionsSheet() {
  const [sessions, setSessions] = React.useState(initial)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ShieldCheckIcon data-icon="inline-start" />
        Active sessions
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Where you&apos;re signed in</SheetTitle>
          <SheetDescription>
            Revoke any session you don&apos;t recognize.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          {sessions.map((s) => (
            <div key={s.id} className="flex items-center gap-3 border p-3">
              <s.icon className="size-4 text-muted-foreground" />
              <div className="flex flex-1 flex-col">
                <span className="font-medium">{s.device}</span>
                <span className="text-muted-foreground">
                  {s.place} · {s.current ? "This device" : "Active 2d ago"}
                </span>
              </div>
              {s.current ? (
                <Badge variant="secondary">Current</Badge>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setSessions((prev) => prev.filter((p) => p.id !== s.id))
                  }
                >
                  Revoke
                </Button>
              )}
            </div>
          ))}
        </div>
        <SheetFooter>
          <Button
            variant="destructive"
            disabled={sessions.length === 1}
            onClick={() => setSessions((prev) => prev.filter((p) => p.current))}
          >
            <LogOutIcon data-icon="inline-start" />
            Sign out all other sessions
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
