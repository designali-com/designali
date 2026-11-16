"use client"

import { useEffect, useState } from "react"
import {
  Play,
  X,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { CounterNumber } from "@/registry/designali/ui/counter-number"
import { GridPattern } from "@/registry/designali/ui/grid-pattern"

const stats = [
  { value: 460, label: "Production-ready blocks" },
  { value: 240, label: "Landing pages and templates" },
  { value: 4000, label: "Icons in @designali/icons" },
]

export default function Media19() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden bg-foreground px-6 py-16 text-background md:px-14 md:py-20">
          <GridPattern
            width={48}
            height={48}
            className="stroke-background opacity-20"
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs tracking-widest text-background/60 uppercase">Keynote replay - Designali Live</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Watch the launch in 4 minutes.</h2>
              <p className="mt-4 max-w-md text-background/70">
                New Designali blocks, templates and icons, demoed live by Ali Imam — design se code tak, in real time.
              </p>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-background/20 pt-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <CounterNumber
                        value={s.value}
                        suffix="+"
                        className="text-xl font-semibold tracking-normal text-background md:text-3xl"
                      />
                    </dd>
                    <p className="mt-1 text-xs text-background/60">{s.label}</p>
                  </div>
                ))}
              </dl>
            </div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Play keynote video"
              className="group relative aspect-video w-full overflow-hidden border border-background/20 text-left"
            >
              <img
                src="/img/hero-2.jpg"
                alt="Ali Imam presenting the Designali keynote"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform group-hover:scale-110">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
                <Play className="relative size-7 translate-x-0.5 fill-current" />
              </span>
              <span className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">Keynote - 4:06</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Keynote video" className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Button variant="outline" size="icon-lg" aria-label="Close" className="absolute -top-12 right-0 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" onClick={() => setOpen(false)}>
              <X />
            </Button>
            <div className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black">
              <img src="/img/hero-2.jpg" alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
                <Play className="size-4 fill-current" />
                <div className="h-1 flex-1 bg-white/25"><div className="h-full w-[6%] bg-white" /></div>
                <span className="font-sans text-xs tabular-nums">0:14 / 4:06</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
