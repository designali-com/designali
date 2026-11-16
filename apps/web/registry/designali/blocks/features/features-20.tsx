"use client"

import { useState } from "react"
import {
  Moon,
  Palette,
  SlidersHorizontal,
  Type,
} from "@designali/icons"

import { Slider } from "@workspace/ui/components/slider"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const swatches = [
  { name: "Ink", className: "bg-neutral-900 dark:bg-neutral-100" },
  { name: "Ocean", className: "bg-sky-600" },
  { name: "Moss", className: "bg-emerald-600" },
  { name: "Ember", className: "bg-orange-500" },
]
const accents: Record<string, string> = {
  Ink: "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900",
  Ocean: "bg-sky-600 text-white",
  Moss: "bg-emerald-600 text-white",
  Ember: "bg-orange-500 text-white",
}

export default function Features20() {
  const [accent, setAccent] = useState("Ocean")
  const [size, setSize] = useState(16)
  const [compact, setCompact] = useState(false)

  return (
    <section className="w-full bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          Make it yours without writing CSS.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          Every Designali template exposes the same handful of controls. Try
          them below; the preview updates the way your live site would.
        </p>
        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8 bg-background p-6 md:p-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <Palette className="size-4" /> Accent colour
              </div>
              <div className="mt-4 flex gap-2">
                {swatches.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    aria-label={s.name}
                    onClick={() => setAccent(s.name)}
                    className={cn(
                      "size-9 ring-offset-2 ring-offset-background transition",
                      s.className,
                      accent === s.name && "ring-2 ring-foreground"
                    )}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="flex items-center gap-2">
                  <Type className="size-4" /> Base font size
                </span>
                <span className="font-mono text-xs text-muted-foreground">{size}px</span>
              </div>
              <Slider
                className="mt-4"
                min={14}
                max={20}
                step={1}
                value={size}
                onValueChange={(v) => setSize(Array.isArray(v) ? v[0]! : v)}
              />
            </div>
            <label className="flex items-center justify-between text-sm font-medium">
              <span className="flex items-center gap-2">
                <SlidersHorizontal className="size-4" /> Compact spacing
              </span>
              <Switch checked={compact} onCheckedChange={setCompact} />
            </label>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Moon className="size-3.5" /> Dark mode follows the visitor&apos;s system setting.
            </div>
          </div>
          <div className="bg-muted/40 p-6 md:p-10">
            <div
              className={cn("border border-border bg-background", compact ? "p-4" : "p-8")}
              style={{ fontSize: size }}
            >
              <span className={cn("inline-block px-2 py-0.5 text-[0.7em]", accents[accent])}>
                New blog
              </span>
              <h3 className={cn("font-medium tracking-tight", compact ? "mt-2" : "mt-4")} style={{ fontSize: "1.6em", lineHeight: 1.2 }}>
                Design se code tak
              </h3>
              <p className={cn("leading-relaxed text-muted-foreground", compact ? "mt-2" : "mt-4")}>
                How I design and build digital experiences at Designali, from
                Figma to production-ready code.
              </p>
              <button type="button" className={cn("px-4 py-2 text-[0.85em]", compact ? "mt-3" : "mt-6", accents[accent])}>
                Read on Designali
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
