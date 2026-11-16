"use client"

import { useState } from "react"
import {
  PhoneCall,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const codes = [
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+49", label: "DE" },
  { code: "+61", label: "AU" },
  { code: "+91", label: "IN" },
]

const windows = ["Morning", "Lunchtime", "Afternoon", "Evening"]

export default function Contact19() {
  const [when, setWhen] = useState("Afternoon")
  const [asap, setAsap] = useState(false)

  return (
    <section className="w-full bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 border bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-10 lg:grid-cols-[1fr_1.4fr] lg:items-center dark:from-chart-5/40 dark:to-chart-5/30">
          <div className="flex gap-5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <PhoneCall className="size-5" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Rather talk it through?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Leave your number and Ali Imam from Designali will call
                you, free of charge, at a time that suits.
              </p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex h-12 min-w-0 flex-1 border bg-background focus-within:border-ring">
                <select
                  aria-label="Country code"
                  defaultValue="+44"
                  className="border-e bg-transparent px-3 text-sm outline-none"
                >
                  {codes.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="Your number"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
                />
              </div>
              <Button type="submit" size="lg" className="h-12">
                Request callback
              </Button>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div
                className={cn(
                  "grid grid-cols-4 border bg-background transition-opacity",
                  asap && "pointer-events-none opacity-40"
                )}
              >
                {windows.map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setWhen(w)}
                    className={cn(
                      "h-9 px-2 text-xs transition-colors not-last:border-e sm:px-3",
                      when === w ? "bg-foreground text-background" : "hover:bg-muted"
                    )}
                  >
                    {w}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={asap}
                  onChange={(event) => setAsap(event.target.checked)}
                  className="size-4 accent-primary"
                />
                Call me in the next 15 minutes
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
