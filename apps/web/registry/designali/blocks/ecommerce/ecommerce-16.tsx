"use client"

import { useState } from "react"
import {
  CalendarClock,
  Check,
  CirclePause as PauseCircle,
  Star,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { IPad } from "@/registry/designali/ui/apple/ipad"
import { IPhone } from "@/registry/designali/ui/apple/iphone"
import { DotPattern } from "@/registry/designali/ui/dot-pattern"

const PRICE = 22

const plans = [
  { id: "once", label: "One-time purchase", discount: 0, note: "" },
  { id: "sub", label: "Subscribe & save", discount: 0.15, note: "Save 15% on every renewal" },
]

const frequencies = ["Monthly", "Quarterly", "Yearly"]
const grinds = ["Next.js", "React", "Figma", "HTML"]

export default function Ecommerce16() {
  const [plan, setPlan] = useState("sub")
  const [frequency, setFrequency] = useState(frequencies[1]!)
  const [grind, setGrind] = useState(grinds[0]!)
  const [bags, setBags] = useState(2)

  const discount = plans.find((p) => p.id === plan)?.discount ?? 0
  const unit = PRICE * (1 - discount)
  const total = unit * bags

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:gap-14">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-border bg-gradient-to-br from-primary/10 to-primary/20 dark:from-chart-5 dark:to-chart-5">
          <DotPattern className="text-primary/60 [mask-image:radial-gradient(circle,white,transparent_70%)]" />
          <div className="relative flex h-3/4 items-end">
            <IPad variant="ipad-pro" color="silver" size="sm" className="h-full! max-w-full drop-shadow-2xl">
              <img src="/images/templates/aliimam-comp.jpg" alt="Designali Pro blocks library" className="size-full object-cover object-top" />
            </IPad>
            <IPhone size="sm" color="silver" className="-ml-12 h-1/2! max-w-full drop-shadow-2xl">
              <img src="/img/chat-1-light.jpg" alt="" className="size-full object-cover object-top" />
            </IPhone>
          </div>
          <span className="absolute top-4 left-4 bg-background px-2 py-1 text-xs">Updated Monday</span>
        </div>

        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">Membership · Designali</p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">Designali Pro</h2>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Star className="size-4 fill-primary text-primary" />
            4.9 · 1,840 reviews · 460+ blocks, 4,000+ icons, every template
          </p>

          <fieldset className="mt-8 space-y-2">
            <legend className="sr-only">Purchase type</legend>
            {plans.map((p) => {
              const selected = plan === p.id
              return (
                <label
                  key={p.id}
                  className={cn(
                    "block cursor-pointer border p-4 transition-colors",
                    selected ? "border-foreground" : "border-border hover:bg-muted/40"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="e16-plan"
                      checked={selected}
                      onChange={() => setPlan(p.id)}
                      className="size-4 accent-foreground"
                    />
                    <span className="flex-1 text-sm font-medium">{p.label}</span>
                    <span className="text-sm tabular-nums">
                      {p.discount > 0 && (
                        <span className="mr-2 text-muted-foreground line-through">${PRICE}</span>
                      )}
                      ${(PRICE * (1 - p.discount)).toFixed(2)}
                    </span>
                  </span>
                  {p.note && (
                    <span className="mt-1 block pl-7 text-xs text-chart-3 dark:text-primary">{p.note}</span>
                  )}
                  {p.id === "sub" && selected && (
                    <span className="mt-4 block space-y-3 pl-7">
                      <span className="flex flex-wrap gap-2">
                        {frequencies.map((f) => (
                          <button
                            key={f}
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              setFrequency(f)
                            }}
                            className={cn(
                              "border px-3 py-1.5 text-xs transition-colors",
                              frequency === f ? "border-foreground bg-muted" : "border-border hover:bg-muted"
                            )}
                          >
                            {f}
                          </button>
                        ))}
                      </span>
                      <span className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-2"><Check className="size-3.5" /> New blocks every week</span>
                        <span className="flex items-center gap-2"><PauseCircle className="size-3.5" /> Pause, skip or cancel any time</span>
                      </span>
                    </span>
                  )}
                </label>
              )
            })}
          </fieldset>

          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-medium">Stack</p>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {grinds.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGrind(g)}
                    className={cn(
                      "border px-2 py-2 text-xs transition-colors",
                      grind === g ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"
                    )}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">Seats</p>
              <div className="mt-2 flex">
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setBags(n)}
                    className={cn(
                      "-ml-px size-9 border text-sm first:ml-0",
                      bags === n ? "relative border-foreground bg-foreground text-background" : "border-border hover:bg-muted"
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Button size="lg" className="mt-8 w-full">
            {plan === "sub" ? "Start subscription" : "Add to cart"} · ${total.toFixed(2)}
          </Button>
          {plan === "sub" && (
            <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <CalendarClock className="size-3.5" />
              {bags} x {grind.toLowerCase()}, {frequency.toLowerCase()}. First delivery Thursday.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
