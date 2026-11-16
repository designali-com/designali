"use client"

import { useState } from "react"
import {
  Code,
  Download,
  Layers,
  Zap,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

const finishes = [
  { id: "graphite", label: "Outline", body: "#000000", accent: "#00A8FF" },
  { id: "sage", label: "Duotone", body: "#155DFC", accent: "#8EC5FF" },
  { id: "clay", label: "Solid", body: "#00A8FF", accent: "#FFFFFF" },
]

const highlights = [
  { icon: Layers, label: "4,000+ icons" },
  { icon: Zap, label: "Tree-shakeable" },
  { icon: Code, label: "React + SVG" },
  { icon: Download, label: "Figma file" },
]

const specs = [
  { label: "Icons", value: "4,000+ in outline and solid" },
  { label: "Formats", value: "SVG, React, Figma" },
  { label: "Install", value: "npm i @designali/icons" },
  { label: "Grid", value: "24 x 24 px, 1.5px stroke" },
  { label: "Pairs with", value: "@designali/logos and @designali/vectors" },
]

const inBox = ["@designali/icons package", "Figma library", "SVG source files", "Quick start guide"]

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
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Icon pack</p>
            <div className="mt-2 flex items-baseline justify-between gap-4">
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Designali Icons Pro</h2>
              <span className="text-2xl tabular-nums">$39</span>
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
                <TabsTrigger value="box" className="flex-none px-0 text-sm">What&apos;s included</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-4 text-sm leading-6 text-muted-foreground">
                Designali Icons Pro is built for design engineers. Lucide-compatible names,
                a Figma library that matches the code, and enough icons for every
                product you ship.
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
              Add {finish.label} Designali Icons to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
