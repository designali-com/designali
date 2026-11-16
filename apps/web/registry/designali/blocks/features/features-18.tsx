"use client"

import { useState } from "react"
import {
  Check,
  X,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const rows = [
  { without: "Designing every section from a blank canvas", with: "460+ ready-made blocks to start from" },
  { without: "Hand-off files lost between design and code", with: "Figma designs shipped as production-ready Next.js" },
  { without: "Mixing icon sets from five different sources", with: "4000+ consistent icons in @designali/icons" },
  { without: "Weeks spent on a landing page", with: "240+ landing pages you can launch today" },
]

export default function Features18() {
  const [mode, setMode] = useState<"without" | "with">("with")

  return (
    <section className="w-full bg-muted/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-medium tracking-tight md:text-5xl">
          Building websites, before and after Designali.
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
              {m === "with" ? "With Designali" : "Without"}
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
                  ? "border-chart-2/30 bg-background"
                  : "border-border bg-background/50"
              )}
            >
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center",
                  mode === "with"
                    ? "bg-chart-2 text-white"
                    : "bg-destructive/10 text-destructive dark:bg-destructive/15 dark:text-destructive"
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
          Design se code tak — from first idea to launch.
        </p>
      </div>
    </section>
  )
}
