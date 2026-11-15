"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const hotspots = [
  { id: "lamp", name: "Dome Table Lamp", price: 129, detail: "Opal glass, dimmable", x: 18, y: 38 },
  { id: "sofa", name: "Harbor 3-Seater Sofa", price: 1890, detail: "Boucle, oatmeal", x: 52, y: 66 },
  { id: "art", name: "Tidal Print, Framed", price: 210, detail: "70 x 50 cm, oak frame", x: 54, y: 24 },
  { id: "plant", name: "Terracotta Planter", price: 58, detail: "Large, with saucer", x: 86, y: 62 },
]

export default function Ecommerce14() {
  const [active, setActive] = useState<string>("sofa")
  const [cart, setCart] = useState<string[]>([])
  const current = hotspots.find((h) => h.id === active)
  const total = hotspots.reduce((s, h) => s + h.price, 0)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden border border-border bg-gradient-to-b from-stone-200 to-stone-300 dark:from-stone-800 dark:to-stone-900">
            {/* Room illustration */}
            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
              <rect x="0" y="215" width="400" height="85" className="fill-stone-400/60 dark:fill-stone-700/60" />
              <rect x="170" y="40" width="80" height="60" className="fill-sky-300 stroke-amber-800 dark:fill-sky-800" strokeWidth="4" />
              <path d="M170 85 Q 200 70 230 82 T 250 78 L250 100 L170 100Z" className="fill-sky-500/70" />
              <rect x="120" y="160" width="190" height="55" rx="10" className="fill-stone-100 dark:fill-stone-500" />
              <rect x="110" y="145" width="30" height="70" rx="10" className="fill-stone-50 dark:fill-stone-400" />
              <rect x="290" y="145" width="30" height="70" rx="10" className="fill-stone-50 dark:fill-stone-400" />
              <rect x="40" y="150" width="50" height="65" className="fill-amber-800/70" />
              <path d="M52 150 L 78 150 L 72 118 L 58 118 Z" className="fill-amber-50 dark:fill-amber-200" />
              <rect x="330" y="175" width="34" height="40" className="fill-orange-700" />
              <circle cx="347" cy="150" r="28" className="fill-emerald-700/80" />
              <circle cx="335" cy="132" r="16" className="fill-emerald-600/80" />
            </svg>

            {hotspots.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setActive(h.id)}
                aria-label={`Show ${h.name}`}
                aria-pressed={active === h.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                <span
                  className={cn(
                    "relative flex size-8 items-center justify-center rounded-full border-2 border-white shadow-lg transition-all",
                    active === h.id ? "scale-110 bg-foreground text-background" : "bg-white/90 text-black"
                  )}
                >
                  {active !== h.id && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/60" />
                  )}
                  <Plus className={cn("relative size-4 transition-transform", active === h.id && "rotate-45")} />
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Shop the room</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">The Seaview Living Room</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tap a marker to see each piece. Buy them together and save 10%.
            </p>

            <ul className="mt-6 divide-y divide-border border-y border-border">
              {hotspots.map((h) => {
                const added = cart.includes(h.id)
                return (
                  <li key={h.id}>
                    <div
                      className={cn(
                        "flex items-center gap-3 py-3 transition-colors",
                        active === h.id ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      <button type="button" onClick={() => setActive(h.id)} className="flex flex-1 items-center gap-3 text-left">
                        <span
                          className={cn(
                            "size-2 shrink-0 rounded-full",
                            active === h.id ? "bg-foreground" : "bg-border"
                          )}
                        />
                        <span className="flex-1">
                          <span className="block text-sm font-medium">{h.name}</span>
                          {active === h.id && current && (
                            <span className="block text-xs text-muted-foreground">{current.detail}</span>
                          )}
                        </span>
                        <span className="text-sm tabular-nums">${h.price.toLocaleString()}</span>
                      </button>
                      <Button
                        size="sm"
                        variant={added ? "secondary" : "outline"}
                        onClick={() =>
                          setCart((c) => (c.includes(h.id) ? c.filter((x) => x !== h.id) : [...c, h.id]))
                        }
                      >
                        {added ? "Added" : "Add"}
                      </Button>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="mt-auto pt-6">
              <div className="flex items-baseline justify-between text-sm">
                <span className="text-muted-foreground">Complete the room</span>
                <span>
                  <span className="mr-2 text-muted-foreground line-through tabular-nums">${total.toLocaleString()}</span>
                  <span className="text-lg font-medium tabular-nums">${Math.round(total * 0.9).toLocaleString()}</span>
                </span>
              </div>
              <Button size="lg" className="mt-4 w-full" onClick={() => setCart(hotspots.map((h) => h.id))}>
                Add all 4 pieces
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
