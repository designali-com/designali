"use client"

import { useState } from "react"
import {
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Star,
  Truck,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { name: "Light", value: "#e5e7eb" },
  { name: "Dark", value: "#1f2937" },
  { name: "Designali Blue", value: "#00A8FF" },
]

const sizes = ["Solo", "Pro", "Team", "Studio", "Agency"]

export default function Ecommerce02() {
  const [color, setColor] = useState(colors[0]?.name ?? "")
  const [size, setSize] = useState("Pro")
  const [quantity, setQuantity] = useState(1)
  const [view, setView] = useState(0)
  const swatch = colors.find((c) => c.name === color)?.value

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <div className="flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex gap-3 sm:flex-col">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setView(i)}
                aria-label={`Show image ${i + 1}`}
                className={cn(
                  "size-16 shrink-0 border transition-colors",
                  view === i ? "border-foreground" : "border-border"
                )}
                style={{ background: `linear-gradient(${i * 60}deg, ${swatch}, transparent)` }}
              />
            ))}
          </div>
          <div
            className="aspect-[4/5] flex-1 border border-border transition-colors"
            style={{
              background: `linear-gradient(${view * 60 + 160}deg, ${swatch} 0%, transparent 90%)`,
            }}
          />
        </div>

        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Templates
          </p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
            Design Agency Template
          </h2>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="text-2xl">$79</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Star className="size-4 fill-current text-amber-500" />
              4.8 · 326 reviews
            </span>
          </div>
          <p className="mt-6 leading-7 text-muted-foreground">
            A Next.js, React and Tailwind CSS template with a matching Figma file.
            Launch a studio site in a day and customise every block.
          </p>

          <div className="mt-8">
            <p className="text-sm">
              Color: <span className="text-muted-foreground">{color}</span>
            </p>
            <div className="mt-3 flex gap-2">
              {colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  aria-label={c.name}
                  onClick={() => setColor(c.name)}
                  className={cn(
                    "size-8 rounded-full border-2 ring-offset-2 ring-offset-background",
                    color === c.name ? "border-background ring-1 ring-foreground" : "border-transparent"
                  )}
                  style={{ background: c.value }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between text-sm">
              <span>License</span>
              <a href="#" className="text-xs text-muted-foreground underline underline-offset-4">
                Compare licenses
              </a>
            </div>
            <div className="mt-3 grid grid-cols-5 border-t border-l border-border">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={cn(
                    "border-r border-b border-border py-3 text-sm transition-colors",
                    size === s ? "bg-foreground text-background" : "hover:bg-muted"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <div className="flex items-center border border-border">
              <button type="button" aria-label="Decrease" className="px-3 py-3" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center text-sm tabular-nums">{quantity}</span>
              <button type="button" aria-label="Increase" className="px-3 py-3" onClick={() => setQuantity((q) => q + 1)}>
                <Plus className="size-4" />
              </button>
            </div>
            <Button size="lg" className="flex-1">
              Add to cart · ${189 * quantity}
            </Button>
            <Button size="lg" variant="outline" aria-label="Save to wishlist" className="px-4">
              <Heart />
            </Button>
          </div>

          <ul className="mt-8 divide-y divide-border border-y border-border text-sm">
            <li className="flex items-center gap-3 py-3">
              <Truck className="size-4 text-muted-foreground" />
              Instant download after checkout
            </li>
            <li className="flex items-center gap-3 py-3">
              <RotateCcw className="size-4 text-muted-foreground" />
              Free updates for 12 months
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
