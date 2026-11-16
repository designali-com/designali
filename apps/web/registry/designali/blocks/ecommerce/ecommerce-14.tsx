"use client"

import { useState } from "react"
import {
  Plus,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { IPad } from "@/registry/designali/ui/apple/ipad"
import { IPhone } from "@/registry/designali/ui/apple/iphone"
import { Macbook } from "@/registry/designali/ui/apple/macbook"
import { StudioDisplay } from "@/registry/designali/ui/apple/studio-display"
import { GridPattern } from "@/registry/designali/ui/grid-pattern"

const hotspots = [
  { id: "lamp", name: "iPhone Mockup", price: 19, detail: "PNG + Figma, light and dark", x: 18, y: 38 },
  { id: "sofa", name: "MacBook Mockup", price: 29, detail: "Next.js component + Figma", x: 52, y: 66 },
  { id: "art", name: "Studio Display Mockup", price: 25, detail: "5K frame, React component", x: 54, y: 24 },
  { id: "plant", name: "iPad Mockup", price: 19, detail: "Portrait and landscape", x: 86, y: 62 },
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
          <div className="relative aspect-[4/3] overflow-hidden border border-border bg-gradient-to-b from-muted to-border dark:from-card dark:to-card">
            <GridPattern className="[mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <div className="absolute top-[4%] left-1/2 w-[46%] -translate-x-1/2">
              <StudioDisplay color="light" size="sm" className="h-auto! w-full! max-w-full">
                <img src="/images/templates/design-agency.jpg" alt="Studio Display mockup" className="size-full object-cover object-top" />
              </StudioDisplay>
            </div>
            <div className="absolute bottom-[3%] left-1/2 w-[50%] -translate-x-1/2">
              <Macbook variant="macbook-pro" color="silver" size="sm" className="w-full! max-w-full">
                <img src="/img/dashboard-1-light.jpg" alt="MacBook mockup" className="size-full object-cover object-top" />
              </Macbook>
            </div>
            <div className="absolute top-[18%] left-[6%] w-[14%]">
              <IPhone size="sm" color="silver" className="h-auto! w-full! max-w-full">
                <img src="/img/chat-1-light.jpg" alt="iPhone mockup" className="size-full object-cover object-top" />
              </IPhone>
            </div>
            <div className="absolute right-[4%] bottom-[12%] w-[22%]">
              <IPad variant="ipad-pro" color="silver" size="sm" className="h-auto! w-full! max-w-full">
                <img src="/images/templates/portfolio-simple.jpg" alt="iPad mockup" className="size-full object-cover object-top" />
              </IPad>
            </div>

            {hotspots.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setActive(h.id)}
                aria-label={`Show ${h.name}`}
                aria-pressed={active === h.id}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
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
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Shop the mockups</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">The Designali Mockup Set</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tap a marker to see each Apple device mockup. Buy them together and save 10%.
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
                <span className="text-muted-foreground">Complete the set</span>
                <span>
                  <span className="mr-2 text-muted-foreground line-through tabular-nums">${total.toLocaleString()}</span>
                  <span className="text-lg font-medium tabular-nums">${Math.round(total * 0.9).toLocaleString()}</span>
                </span>
              </div>
              <Button size="lg" className="mt-4 w-full" onClick={() => setCart(hotspots.map((h) => h.id))}>
                Add all 4 mockups
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
