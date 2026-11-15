"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const rows = [
  { without: "Expenses chased over email for two weeks", with: "Receipts snapped and matched in seconds" },
  { without: "Month-end close takes 9 working days", with: "Books close on day two, automatically reconciled" },
  { without: "Cards shared across the whole team", with: "Virtual cards per vendor with hard limits" },
  { without: "Approvals stuck in someone's inbox", with: "Policy-based approvals routed in chat" },
]

export default function Features18() {
  const [mode, setMode] = useState<"without" | "with">("with")

  return (
    <section className="w-full bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-medium tracking-tight md:text-5xl">
          Finance ops, before and after Ledgerly.
        </h2>
        <div className="mx-auto mt-10 grid w-full max-w-xs grid-cols-2 border border-border bg-background p-1">
          {(["without", "with"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={cn(
                "py-2 text-sm transition-colors",
                mode === m ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {m === "with" ? "With Ledgerly" : "Without"}
            </button>
          ))}
        </div>
        <ul className="mt-10 space-y-3">
          {rows.map((row) => (
            <li
              key={row.with}
              className={cn(
                "flex items-center gap-4 border p-5 transition-colors",
                mode === "with"
                  ? "border-emerald-600/30 bg-background"
                  : "border-border bg-background/50"
              )}
            >
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center",
                  mode === "with"
                    ? "bg-emerald-600 text-white"
                    : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                )}
              >
                {mode === "with" ? <Check className="size-4" /> : <X className="size-4" />}
              </span>
              <span className={cn("text-sm md:text-base", mode === "without" && "text-muted-foreground")}>
                {mode === "with" ? row.with : row.without}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Based on median results from 640 finance teams in their first quarter.
        </p>
      </div>
    </section>
  )
}
