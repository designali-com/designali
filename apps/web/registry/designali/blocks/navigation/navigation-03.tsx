"use client"

import { useState } from "react"
import {
  ChevronRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const crumbs = ["Designali", "Projects", "designali.com"]

const tabs = [
  { label: "Overview" },
  { label: "Deployments", count: 128 },
  { label: "Analytics" },
  { label: "Logs" },
  { label: "Domains", count: 3 },
  { label: "Settings" },
]

export default function Navigation03() {
  const [active, setActive] = useState("Deployments")

  return (
    <section className="w-full border-b bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                {crumbs.map((crumb, index) => (
                  <li key={crumb} className="flex items-center gap-1.5">
                    {index > 0 && <ChevronRight className="size-3.5" />}
                    {index === crumbs.length - 1 ? (
                      <span className="text-foreground">{crumb}</span>
                    ) : (
                      <a href="#" className="hover:text-foreground">
                        {crumb}
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <h2 className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
              designali.com
              <span className="flex items-center gap-1.5 border px-2 py-0.5 text-xs font-normal text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Production
              </span>
            </h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Visit site</Button>
            <Button>Redeploy</Button>
          </div>
        </div>

        <nav className="-mb-px flex gap-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActive(tab.label)}
              className={cn(
                "flex shrink-0 items-center gap-2 border-b-2 pb-3 text-sm transition-colors",
                active === tab.label
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="bg-muted px-1.5 text-xs tabular-nums text-muted-foreground">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </section>
  )
}
