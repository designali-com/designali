"use client"

import { useState } from "react"
import {
  ArrowRight,
  Lock,
  Plus,
  Search,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const workspaces = [
  { name: "Designali Studio", slug: "designali", role: "Owner", members: 42, color: "from-primary to-chart-2", sso: true },
  { name: "Designali Templates", slug: "designali-templates", role: "Admin", members: 9, color: "from-primary to-chart-2", sso: false },
  { name: "Dalim Works", slug: "dalim-works", role: "Member", members: 128, color: "from-primary to-chart-3", sso: true },
  { name: "Ali Imam Portfolio", slug: "aliimam", role: "Owner", members: 3, color: "from-primary to-chart-2", sso: false },
  { name: "Client Projects", slug: "clients", role: "Guest", members: 61, color: "from-primary to-chart-3", sso: false },
]

export default function Authentication20() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(workspaces[0]!.slug)

  const filtered = workspaces.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Signed in as ali@designali.com</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">Pick a workspace</h2>
          </div>
          <label className="flex h-10 items-center gap-2 border px-3 md:w-64">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter workspaces"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>

        <div role="radiogroup" aria-label="Workspaces" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <button
              key={item.slug}
              type="button"
              role="radio"
              aria-checked={selected === item.slug}
              onClick={() => setSelected(item.slug)}
              className={cn(
                "flex flex-col items-start gap-4 border p-5 text-start transition-colors",
                selected === item.slug ? "border-foreground bg-muted/40" : "hover:bg-muted/30"
              )}
            >
              <span className="flex w-full items-start justify-between">
                <span className={cn("flex size-11 items-center justify-center bg-gradient-to-br text-sm font-bold text-white", item.color)}>
                  {item.name.split(" ").map((word) => word[0]).join("").slice(0, 2)}
                </span>
                {item.sso && (
                  <span className="flex items-center gap-1 border px-1.5 py-0.5 text-[10px] text-muted-foreground uppercase">
                    <Lock className="size-3" />
                    SSO
                  </span>
                )}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-medium">{item.name}</span>
                <span className="block truncate font-sans text-xs text-muted-foreground">{item.slug}.designali.com</span>
              </span>
              <span className="flex w-full justify-between text-xs text-muted-foreground">
                <span>{item.role}</span>
                <span className="tabular-nums">{item.members} members</span>
              </span>
            </button>
          ))}
          <button
            type="button"
            className="flex min-h-[176px] flex-col items-center justify-center gap-2 border border-dashed p-5 text-sm text-muted-foreground hover:bg-muted/30 hover:text-foreground"
          >
            <Plus className="size-5" />
            Create a new workspace
          </button>
        </div>

        {filtered.length === 0 && (
          <p className="mt-4 text-sm text-muted-foreground">No workspaces match &ldquo;{query}&rdquo;.</p>
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Sign in with a different account</a>
          <Button size="lg" className="w-full sm:w-auto">
            Continue to {workspaces.find((item) => item.slug === selected)?.name}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
