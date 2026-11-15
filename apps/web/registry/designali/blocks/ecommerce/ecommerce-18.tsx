"use client"

import { useState } from "react"
import { BatteryFull, Bluetooth, Droplets, Weight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

const finishes = [
  { id: "graphite", label: "Graphite", body: "#2b2d31", accent: "#6b7280" },
  { id: "sage", label: "Sage", body: "#8a9a83", accent: "#d6dccf" },
  { id: "clay", label: "Clay", body: "#c4785a", accent: "#f1d3c2" },
]

const highlights = [
  { icon: BatteryFull, label: "40 hr battery" },
  { icon: Droplets, label: "IP67 rated" },
  { icon: Bluetooth, label: "Bluetooth 5.4" },
  { icon: Weight, label: "540 g" },
]

const specs = [
  { label: "Drivers", value: "2 x 48mm full-range, passive radiator" },
  { label: "Frequency response", value: "55 Hz - 20 kHz" },
  { label: "Charging", value: "USB-C, 0 - 100% in 2.5 hrs" },
  { label: "Dimensions", value: "182 x 74 x 70 mm" },
  { label: "Pairing", value: "Stereo pair with a second Drift" },
]

const inBox = ["Drift speaker", "USB-C cable, braided, 1m", "Carry strap", "Quick start guide"]

export default function Ecommerce18() {
  const [finish, setFinish] = useState(finishes[0]!)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 border border-border lg:grid-cols-2">
          <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-muted p-10 lg:min-h-[520px]">
            <div
              aria-hidden="true"
              className="absolute size-[70%] rounded-full opacity-40 blur-3xl transition-colors duration-500"
              style={{ background: finish.body }}
            />
            <svg viewBox="0 0 260 140" className="relative w-full max-w-md drop-shadow-2xl" aria-hidden="true">
              <rect x="10" y="20" width="240" height="100" rx="50" fill={finish.body} className="transition-[fill] duration-500" />
              <rect x="30" y="34" width="200" height="72" rx="36" fill={finish.accent} opacity="0.25" />
              {Array.from({ length: 9 }).map((_, row) =>
                Array.from({ length: 30 }).map((__, col) => (
                  <circle key={`${row}-${col}`} cx={44 + col * 6} cy={46 + row * 6} r="1.2" fill={finish.accent} opacity="0.6" />
                ))
              )}
              <rect x="110" y="8" width="40" height="14" rx="7" fill={finish.body} />
            </svg>
          </div>

          <div className="p-6 pt-0 md:p-10 lg:pt-10 lg:pl-0">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Portable speaker</p>
            <div className="mt-2 flex items-baseline justify-between gap-4">
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Fjord Drift</h2>
              <span className="text-2xl tabular-nums">$179</span>
            </div>

            <div className="mt-6">
              <p className="text-sm">
                Finish: <span className="text-muted-foreground">{finish.label}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {finishes.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    aria-label={f.label}
                    aria-pressed={finish.id === f.id}
                    onClick={() => setFinish(f)}
                    className={cn(
                      "size-9 rounded-full ring-offset-2 ring-offset-background transition-shadow",
                      finish.id === f.id ? "ring-2 ring-foreground" : "ring-1 ring-border"
                    )}
                    style={{ background: f.body }}
                  />
                ))}
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {highlights.map((h) => (
                <li key={h.label} className="flex flex-col items-center gap-2 bg-background p-3 text-center text-xs">
                  <h.icon className="size-4" />
                  {h.label}
                </li>
              ))}
            </ul>

            <Tabs defaultValue="overview" className="mt-8">
              <TabsList variant="line" className="w-full justify-start gap-5 border-b border-border">
                <TabsTrigger value="overview" className="flex-none px-0 text-sm">Overview</TabsTrigger>
                <TabsTrigger value="specs" className="flex-none px-0 text-sm">Specs</TabsTrigger>
                <TabsTrigger value="box" className="flex-none px-0 text-sm">In the box</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-4 text-sm leading-6 text-muted-foreground">
                Drift is built for wet decks and sandy bags. A sealed aluminium frame,
                a strap that clips to anything, and enough battery for a long weekend
                without the charger.
              </TabsContent>
              <TabsContent value="specs" className="pt-2 text-sm">
                <dl className="divide-y divide-border">
                  {specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-4 py-2.5">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="text-right">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>
              <TabsContent value="box" className="pt-4 text-sm">
                <ul className="space-y-2">
                  {inBox.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="size-1.5 bg-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>

            <Button size="lg" className="mt-8 w-full">
              Add {finish.label} Drift to bag
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
