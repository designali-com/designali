"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Copy } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const DURATION = 1000 * 60 * 60 * 38 + 1000 * 60 * 17

function format(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000))
  return [
    { label: "Days", value: Math.floor(total / 86400) },
    { label: "Hours", value: Math.floor((total % 86400) / 3600) },
    { label: "Mins", value: Math.floor((total % 3600) / 60) },
    { label: "Secs", value: total % 60 },
  ]
}

export default function Ecommerce11() {
  const [remaining, setRemaining] = useState(DURATION)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const end = Date.now() + DURATION
    const id = setInterval(() => setRemaining(end - Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText("WINTER30")
    } catch {
      // ignore
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <section className="w-full bg-background px-6 py-16 text-foreground md:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden bg-foreground text-background">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 size-80 rounded-full opacity-40 blur-3xl md:size-[28rem]"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.2 30), transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-20 size-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.15 250), transparent 70%)" }}
        />

        <div className="relative grid gap-10 p-8 md:grid-cols-[1.2fr_1fr] md:items-center md:p-14">
          <div>
            <p className="text-xs tracking-widest text-background/60 uppercase">Winter sale · ends Sunday</p>
            <h2 className="mt-4 text-5xl leading-none font-semibold tracking-tight md:text-7xl">
              30% off
              <br />
              outerwear
            </h2>
            <p className="mt-5 max-w-sm text-background/70">
              Parkas, shells and down jackets from Tundra &amp; Pine. Discount applied at checkout,
              no minimum spend.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" variant="secondary" nativeButton={false} render={<a href="#" />}>
                Shop the sale
                <ArrowRight />
              </Button>
              <button
                type="button"
                onClick={copy}
                className="flex h-12 items-center gap-2 border border-dashed border-background/40 px-4 font-mono text-sm transition-colors hover:bg-background/10"
              >
                {copied ? "Copied" : "WINTER30"}
                <Copy className="size-3.5" />
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm text-background/60">Offer ends in</p>
            <div className="mt-3 grid grid-cols-4 gap-2" role="timer" aria-live="off">
              {format(remaining).map((unit) => (
                <div key={unit.label} className="border border-background/15 bg-background/5 py-4 text-center">
                  <span className="block text-3xl font-semibold tabular-nums md:text-5xl">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-[10px] tracking-widest text-background/60 uppercase">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-xs text-background/60">
                <span>Stock claimed</span>
                <span>72%</span>
              </div>
              <div className="mt-2 h-1.5 bg-background/15">
                <div className="h-full w-[72%] bg-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
