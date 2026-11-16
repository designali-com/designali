"use client"

import { useRef, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Heart,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { Macbook } from "@/registry/designali/ui/apple/macbook"

const products = [
  { name: "Design Agency Template", brand: "Designali", price: 79, was: 0, swatches: ["var(--primary)", "black"], image: "/images/templates/design-agency.jpg" },
  { name: "Portfolio Simple Template", brand: "Designali", price: 39, was: 49, swatches: ["white", "black"], image: "/images/templates/portfolio-simple.jpg" },
  { name: "Resort Template", brand: "Designali", price: 69, was: 0, swatches: ["var(--primary)", "var(--chart-3)"], image: "/images/templates/resort.jpg" },
  { name: "AI Startup Template", brand: "Designali", price: 79, was: 0, swatches: ["black", "var(--chart-1)"], image: "/images/templates/ai.jpg" },
  { name: "Dalim UI Kit", brand: "Dalim", price: 29, was: 39, swatches: ["var(--chart-5)", "white"], image: "/images/templates/dalim-ui-old.jpg" },
  { name: "Vercel Starter Template", brand: "Designali", price: 59, was: 0, swatches: ["var(--primary)", "white"], image: "/images/templates/vercel.jpg" },
]

function Preview({ color, image, name }: { color: string; image: string; name: string }) {
  return (
    <div
      className="flex size-full items-center justify-center p-4"
      style={{ background: `radial-gradient(circle at 50% 60%, ${color}, transparent 75%)` }}
    >
      <Macbook variant="macbook-air" color="silver" size="sm" className="w-full! max-w-full">
        <img src={image} alt={name} className="size-full object-cover object-top" />
      </Macbook>
    </div>
  )
}

export default function Ecommerce07() {
  const track = useRef<HTMLDivElement>(null)
  const [picked, setPicked] = useState<Record<string, number>>({})
  const [saved, setSaved] = useState<string[]>([])

  const scroll = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.75, behavior: "smooth" })

  return (
    <section className="w-full overflow-hidden bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">You might also like</h2>
            <p className="mt-1 text-sm text-muted-foreground">Based on the Design Agency Template you viewed</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon-lg" aria-label="Scroll left" onClick={() => scroll(-1)}>
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon-lg" aria-label="Scroll right" onClick={() => scroll(1)}>
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div
          ref={track}
          className="-mx-6 mt-8 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p) => {
            const swatch = picked[p.name] ?? 0
            const isSaved = saved.includes(p.name)
            return (
              <div key={p.name} className="w-[70%] shrink-0 snap-start sm:w-[42%] md:w-[30%] lg:w-[23%]">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden border border-border bg-muted">
                  <Preview color={p.swatches[swatch] ?? "var(--muted)"} image={p.image} name={p.name} />
                  {p.was > 0 && (
                    <span className="absolute top-3 left-3 bg-destructive px-2 py-0.5 text-[10px] font-medium text-white">
                      -{Math.round((1 - p.price / p.was) * 100)}%
                    </span>
                  )}
                  <button
                    type="button"
                    aria-label={isSaved ? `Remove ${p.name} from wishlist` : `Save ${p.name}`}
                    aria-pressed={isSaved}
                    onClick={() =>
                      setSaved((s) => (s.includes(p.name) ? s.filter((n) => n !== p.name) : [...s, p.name]))
                    }
                    className="absolute top-3 right-3 flex size-8 items-center justify-center bg-background"
                  >
                    <Heart className={cn("size-4", isSaved && "fill-destructive text-destructive")} />
                  </button>
                </div>
                <div className="mt-3 flex gap-1.5">
                  {p.swatches.map((c, i) => (
                    <button
                      key={c}
                      type="button"
                      aria-label={`Colour ${i + 1}`}
                      onClick={() => setPicked((s) => ({ ...s, [p.name]: i }))}
                      className={cn(
                        "size-4 rounded-full border border-border ring-offset-2 ring-offset-background",
                        swatch === i && "ring-1 ring-foreground"
                      )}
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">{p.brand}</p>
                <a href="#" className="mt-0.5 block text-sm font-medium hover:underline">
                  {p.name}
                </a>
                <p className="mt-1 flex gap-2 text-sm tabular-nums">
                  <span className={cn(p.was > 0 && "text-destructive dark:text-destructive")}>${p.price}</span>
                  {p.was > 0 && <span className="text-muted-foreground line-through">${p.was}</span>}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
