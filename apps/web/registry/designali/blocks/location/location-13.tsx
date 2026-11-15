"use client"

import { useState } from "react"
import { CircleCheck, CircleX, Truck } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const zones = [
  { name: "Zone 1", radius: 70, fee: "Free", time: "Same day", tone: "fill-emerald-500/25 stroke-emerald-500" },
  { name: "Zone 2", radius: 120, fee: "£2.95", time: "Next morning", tone: "fill-emerald-500/15 stroke-emerald-500/70" },
  { name: "Zone 3", radius: 170, fee: "£4.95", time: "Next day", tone: "fill-emerald-500/5 stroke-emerald-500/50" },
]

const postcodes: Record<string, number> = {
  BS1: 0,
  BS2: 0,
  BS3: 1,
  BS5: 1,
  BS6: 1,
  BS7: 2,
  BS8: 0,
  BS16: 2,
}

export default function Location13() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<number | null | "none">(null)

  function check(event: React.FormEvent) {
    event.preventDefault()
    const key = value.trim().toUpperCase().split(" ")[0] ?? ""
    setResult(key in postcodes ? postcodes[key]! : "none")
  }

  const zone = typeof result === "number" ? zones[result] : null

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            <Truck className="size-4" />
            Local delivery
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Do we deliver to you?
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Greenhouse Grocer delivers by electric cargo bike from our depot in
            central Bristol. Try BS1, BS6 or BS7.
          </p>

          <form onSubmit={check} className="mt-8 flex max-w-md gap-2">
            <Input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Enter your postcode"
              className="h-12 uppercase placeholder:normal-case"
              aria-label="Postcode"
            />
            <Button type="submit" size="lg" className="h-12">
              Check
            </Button>
          </form>

          <div aria-live="polite" className="mt-6 min-h-20 max-w-md">
            {zone && (
              <div className="flex gap-3 border border-emerald-500/40 bg-emerald-50 p-4 text-sm dark:bg-emerald-950/30">
                <CircleCheck className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p>
                  Good news, you&apos;re in <strong>{zone.name}</strong>. Delivery is{" "}
                  <strong>{zone.fee}</strong> and arrives <strong>{zone.time.toLowerCase()}</strong>.
                </p>
              </div>
            )}
            {result === "none" && (
              <div className="flex gap-3 border bg-muted p-4 text-sm">
                <CircleX className="size-5 shrink-0 text-muted-foreground" />
                <p>
                  We don&apos;t reach that postcode yet. Leave your email and
                  we&apos;ll tell you when we do.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border bg-muted/40 p-4">
          <svg viewBox="0 0 400 400" className="h-auto w-full" role="img" aria-label="Delivery zones">
            <g className="stroke-border" strokeWidth="1">
              {Array.from({ length: 11 }).map((_, i) => (
                <path key={`v${i}`} d={`M${i * 40} 0 V400`} />
              ))}
              {Array.from({ length: 11 }).map((_, i) => (
                <path key={`h${i}`} d={`M0 ${i * 40} H400`} />
              ))}
            </g>
            <path d="M0 260 C 90 240, 140 300, 230 250 S 350 200, 400 230" className="fill-none stroke-sky-300 dark:stroke-sky-800" strokeWidth="14" />
            {[...zones].reverse().map((z, i) => {
              const index = zones.length - 1 - i
              return (
                <circle
                  key={z.name}
                  cx="200"
                  cy="200"
                  r={z.radius}
                  strokeWidth="1.5"
                  strokeDasharray={index === 0 ? undefined : "4 4"}
                  className={cn(
                    z.tone,
                    "transition-opacity",
                    zone && result !== index && "opacity-40"
                  )}
                />
              )
            })}
            <circle cx="200" cy="200" r="9" className="fill-foreground" />
            <text x="214" y="196" className="fill-foreground text-[11px] font-medium">Depot</text>
            {zones.map((z) => (
              <text key={z.name} x="200" y={200 - z.radius + 14} textAnchor="middle" className="fill-muted-foreground text-[10px]">
                {z.name} &middot; {z.fee}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}
