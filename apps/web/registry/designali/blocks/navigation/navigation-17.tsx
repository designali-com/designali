"use client"

import { useState } from "react"
import {
  Bell,
  Check,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Plus,
  Search,
  Settings,
  User,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const workspaces = [
  { name: "Designali Studio", plan: "Team", initials: "DS" },
  { name: "Side project", plan: "Free", initials: "SP" },
  { name: "Dalim Agency", plan: "Pro", initials: "DA" },
]

const notifications = [
  { who: "Sara", what: "commented on Dalim UI landing page", when: "2m" },
  { who: "Build bot", what: "deployed designali.com@4f2a1c to production", when: "18m" },
  { who: "Omar", what: "invited you to Portfolio template", when: "1h" },
]

type Panel = "workspace" | "notifications" | "account" | null

export default function Navigation17() {
  const [panel, setPanel] = useState<Panel>(null)
  const [workspace, setWorkspace] = useState(workspaces[0]!)

  function toggle(next: Panel) {
    setPanel((current) => (current === next ? null : next))
  }

  return (
    <section className="w-full bg-muted/40 pb-72">
      <header className="relative border-b bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <span className="size-6 shrink-0 bg-foreground [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
          <span className="text-muted-foreground/50">/</span>

          <div className="relative min-w-0">
            <button
              type="button"
              onClick={() => toggle("workspace")}
              aria-expanded={panel === "workspace"}
              className="flex h-9 min-w-0 items-center gap-2 px-2 text-sm hover:bg-muted"
            >
              <span className="flex size-6 shrink-0 items-center justify-center bg-muted text-[10px] font-semibold">
                {workspace.initials}
              </span>
              <span className="truncate font-medium">{workspace.name}</span>
              <span className="hidden border px-1.5 text-[10px] text-muted-foreground sm:inline">
                {workspace.plan}
              </span>
              <ChevronsUpDown className="size-3.5 shrink-0 text-muted-foreground" />
            </button>
            {panel === "workspace" && (
              <div className="absolute start-0 top-full z-20 mt-1 w-64 border bg-popover p-1 text-sm text-popover-foreground">
                <p className="px-2 py-1.5 text-xs text-muted-foreground">Workspaces</p>
                {workspaces.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setWorkspace(item)
                      setPanel(null)
                    }}
                    className="flex w-full items-center gap-2 px-2 py-2 hover:bg-muted"
                  >
                    <span className="flex size-6 items-center justify-center bg-muted text-[10px] font-semibold">
                      {item.initials}
                    </span>
                    <span className="flex-1 text-start">{item.name}</span>
                    {item.name === workspace.name && <Check className="size-4" />}
                  </button>
                ))}
                <div className="my-1 h-px bg-border" />
                <button type="button" className="flex w-full items-center gap-2 px-2 py-2 text-muted-foreground hover:bg-muted hover:text-foreground">
                  <Plus className="size-4" />
                  New workspace
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="ms-auto hidden h-9 w-64 items-center gap-2 border px-3 text-sm text-muted-foreground hover:bg-muted md:flex"
          >
            <Search className="size-4" />
            Search projects
            <kbd className="ms-auto border bg-muted px-1.5 font-mono text-[10px]">/</kbd>
          </button>

          <div className="relative ms-auto md:ms-0">
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => toggle("notifications")}
              className="relative flex size-9 items-center justify-center hover:bg-muted"
            >
              <Bell className="size-4" />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-destructive ring-2 ring-background" />
            </button>
            {panel === "notifications" && (
              <div className="absolute end-0 top-full z-20 mt-1 w-[min(20rem,calc(100vw-2rem))] border bg-popover text-sm text-popover-foreground">
                <div className="flex items-center justify-between border-b px-4 py-3">
                  <span className="font-medium">Notifications</span>
                  <button type="button" className="text-xs text-muted-foreground hover:text-foreground">
                    Mark all read
                  </button>
                </div>
                <ul className="divide-y">
                  {notifications.map((item) => (
                    <li key={item.what} className="flex gap-3 px-4 py-3">
                      <span className="flex size-8 shrink-0 items-center justify-center bg-muted text-xs font-medium">
                        {item.who.slice(0, 1)}
                      </span>
                      <p className="flex-1 text-muted-foreground">
                        <span className="font-medium text-foreground">{item.who}</span> {item.what}
                      </p>
                      <span className="text-xs text-muted-foreground">{item.when}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              aria-label="Account menu"
              onClick={() => toggle("account")}
              className={cn(
                "flex size-9 items-center justify-center bg-gradient-to-br from-primary to-primary text-xs font-semibold text-white",
                panel === "account" && "ring-2 ring-foreground ring-offset-2 ring-offset-background"
              )}
            >
              AI
            </button>
            {panel === "account" && (
              <div className="absolute end-0 top-full z-20 mt-1 w-56 border bg-popover p-1 text-sm text-popover-foreground">
                <div className="px-2 py-2">
                  <p className="font-medium">Ali Imam</p>
                  <p className="text-xs text-muted-foreground">ali@designali.com</p>
                </div>
                <div className="my-1 h-px bg-border" />
                {[
                  { icon: User, label: "Profile" },
                  { icon: CreditCard, label: "Billing" },
                  { icon: Settings, label: "Settings" },
                  { icon: LogOut, label: "Sign out" },
                ].map((item) => (
                  <button key={item.label} type="button" className="flex w-full items-center gap-2 px-2 py-2 hover:bg-muted">
                    <item.icon className="size-4 text-muted-foreground" />
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
    </section>
  )
}
