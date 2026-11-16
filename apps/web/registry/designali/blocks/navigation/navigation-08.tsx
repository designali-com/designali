"use client"

import { useState } from "react"
import {
  ChartColumn as BarChart3,
  Calendar,
  ChevronsLeft,
  ChevronsRight,
  House,
  MessageSquare,
  Settings,
  Users,
  Wallet,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

import { CounterNumber } from "@/registry/designali/ui/counter-number"
import { GridPattern } from "@/registry/designali/ui/grid-pattern"
import { Logo } from "@/src/components/logo"

const items = [
  { icon: House, label: "Home" },
  { icon: BarChart3, label: "Analytics", badge: "New" },
  { icon: Calendar, label: "Schedule" },
  { icon: MessageSquare, label: "Messages", count: 4 },
  { icon: Users, label: "Clients" },
  { icon: Wallet, label: "Invoices" },
]

export default function Navigation08() {
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState("Home")

  return (
    <section className="w-full bg-muted/40">
      <div className="mx-auto flex h-[560px] max-w-7xl border-x bg-background">
        <aside
          className={cn(
            "flex shrink-0 flex-col border-e transition-[width] duration-300",
            expanded ? "w-56" : "w-16"
          )}
        >
          <div className="flex h-16 items-center gap-3 border-b px-4">
            <Logo className="h-6 w-8 shrink-0" />
            {expanded && <span className="truncate font-semibold">Designali Studio</span>}
          </div>
          <nav className="flex-1 space-y-1 p-3">
            {items.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(item.label)}
                className={cn(
                  "group relative flex h-10 w-full items-center gap-3 px-2.5 text-sm transition-colors",
                  active === item.label
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <item.icon className="size-5 shrink-0" />
                {expanded ? (
                  <>
                    <span className="flex-1 truncate text-start">{item.label}</span>
                    {item.count && (
                      <span className="bg-foreground px-1.5 text-xs text-background tabular-nums">
                        {item.count}
                      </span>
                    )}
                    {item.badge && (
                      <span className="border px-1.5 text-[10px] uppercase">{item.badge}</span>
                    )}
                  </>
                ) : (
                  <>
                    {item.count && (
                      <span className="absolute top-2 right-2 size-1.5 rounded-full bg-foreground" />
                    )}
                    <span className="pointer-events-none absolute start-full z-10 ms-3 hidden border bg-popover px-2 py-1 text-xs whitespace-nowrap text-popover-foreground group-hover:block">
                      {item.label}
                    </span>
                  </>
                )}
              </button>
            ))}
          </nav>
          <div className="space-y-1 border-t p-3">
            <button
              type="button"
              className="flex h-10 w-full items-center gap-3 px-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <Settings className="size-5 shrink-0" />
              {expanded && "Settings"}
            </button>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
              className="flex h-10 w-full items-center gap-3 px-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              {expanded ? (
                <ChevronsLeft className="size-5 shrink-0" />
              ) : (
                <ChevronsRight className="size-5 shrink-0" />
              )}
              {expanded && "Collapse"}
            </button>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-6 md:p-10">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">{active}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Good morning, Ali</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Projects this week", "Unpaid invoices", "New clients"].map((label, index) => (
              <div key={label} className="border p-5">
                <p className="text-xs text-muted-foreground">{label}</p>
                <CounterNumber
                  value={[38, 6, 12][index] ?? 0}
                  size="lg"
                  className="mt-2 block text-2xl font-semibold"
                />
              </div>
            ))}
          </div>
          <div className="relative mt-4 h-40 overflow-hidden border">
            <GridPattern width={48} height={48} className="stroke-muted" />
          </div>
        </div>
      </div>
    </section>
  )
}
