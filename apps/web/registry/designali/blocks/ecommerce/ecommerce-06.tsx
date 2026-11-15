"use client"

import { useMemo, useState } from "react"
import { SlidersHorizontal, X } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

type Product = {
  name: string
  category: string
  price: number
  material: string
  tone: string
}

const products: Product[] = [
  { name: "Arc Floor Lamp", category: "Lighting", price: 340, material: "Brass", tone: "from-amber-300/70 to-yellow-100/30" },
  { name: "Pebble Side Table", category: "Tables", price: 210, material: "Oak", tone: "from-orange-300/60 to-amber-50/30" },
  { name: "Loop Pendant", category: "Lighting", price: 180, material: "Steel", tone: "from-zinc-400/70 to-zinc-100/30" },
  { name: "Low Lounge Chair", category: "Seating", price: 690, material: "Wool", tone: "from-stone-400/70 to-stone-100/30" },
  { name: "Trestle Desk", category: "Tables", price: 520, material: "Oak", tone: "from-yellow-700/40 to-amber-100/30" },
  { name: "Bistro Stool", category: "Seating", price: 145, material: "Steel", tone: "from-slate-500/60 to-slate-200/30" },
  { name: "Mushroom Lamp", category: "Lighting", price: 95, material: "Glass", tone: "from-rose-300/60 to-orange-100/30" },
  { name: "Bench, Long", category: "Seating", price: 410, material: "Oak", tone: "from-lime-700/40 to-lime-100/30" },
  { name: "Nest Tables, Set of 2", category: "Tables", price: 260, material: "Walnut", tone: "from-amber-900/50 to-orange-200/30" },
]

const categories = ["Lighting", "Tables", "Seating"]
const materials = ["Oak", "Walnut", "Brass", "Steel", "Glass", "Wool"]
const sorts = [
  { id: "featured", label: "Featured" },
  { id: "low", label: "Price: low to high" },
  { id: "high", label: "Price: high to low" },
]

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export default function Ecommerce06() {
  const [cats, setCats] = useState<string[]>([])
  const [mats, setMats] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState(700)
  const [sort, setSort] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  const visible = useMemo(() => {
    const list = products.filter(
      (p) =>
        (cats.length === 0 || cats.includes(p.category)) &&
        (mats.length === 0 || mats.includes(p.material)) &&
        p.price <= maxPrice
    )
    if (sort === "low") return [...list].sort((a, b) => a.price - b.price)
    if (sort === "high") return [...list].sort((a, b) => b.price - a.price)
    return list
  }, [cats, mats, maxPrice, sort])

  const active = [...cats, ...mats]
  const clear = () => {
    setCats([])
    setMats([])
    setMaxPrice(700)
  }

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">Furniture & lighting</h2>
            <p className="mt-1 text-sm text-muted-foreground">{visible.length} products</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters((s) => !s)}>
              <SlidersHorizontal />
              Filters
            </Button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              aria-label="Sort products"
              className="h-10 border border-border bg-background px-3 text-sm"
            >
              {sorts.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className={cn("space-y-8 text-sm", showFilters ? "block" : "hidden lg:block")}>
            <fieldset>
              <legend className="font-medium">Category</legend>
              <div className="mt-3 space-y-2">
                {categories.map((c) => (
                  <label key={c} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={cats.includes(c)}
                      onChange={() => setCats((l) => toggle(l, c))}
                      className="size-4 accent-foreground"
                    />
                    {c}
                    <span className="ml-auto text-xs text-muted-foreground">
                      {products.filter((p) => p.category === c).length}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-medium">Material</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {materials.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMats((l) => toggle(l, m))}
                    aria-pressed={mats.includes(m)}
                    className={cn(
                      "border px-3 py-1.5 text-xs transition-colors",
                      mats.includes(m) ? "border-foreground bg-foreground text-background" : "border-border hover:bg-muted"
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="flex w-full justify-between font-medium">
                Max price <span className="font-normal text-muted-foreground tabular-nums">${maxPrice}</span>
              </legend>
              <input
                type="range"
                min={100}
                max={700}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                aria-label="Maximum price"
                className="mt-4 w-full accent-foreground"
              />
            </fieldset>
          </aside>

          <div>
            {active.length > 0 && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                {active.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => {
                      setCats((l) => l.filter((v) => v !== f))
                      setMats((l) => l.filter((v) => v !== f))
                    }}
                    className="flex items-center gap-1 bg-muted px-2 py-1 text-xs"
                  >
                    {f}
                    <X className="size-3" />
                  </button>
                ))}
                <button type="button" onClick={clear} className="text-xs underline underline-offset-4">
                  Clear all
                </button>
              </div>
            )}

            {visible.length === 0 ? (
              <div className="border border-dashed border-border py-20 text-center text-sm text-muted-foreground">
                Nothing matches those filters.{" "}
                <button type="button" onClick={clear} className="text-foreground underline underline-offset-4">
                  Reset
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3">
                {visible.map((p) => (
                  <a key={p.name} href="#" className="group block">
                    <div className={cn("relative aspect-square overflow-hidden border border-border bg-gradient-to-br", p.tone)}>
                      <span className="absolute inset-x-[25%] top-[20%] bottom-[20%] rounded-t-full bg-background/50 transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="mt-3 text-sm font-medium">{p.name}</p>
                    <p className="mt-0.5 flex justify-between text-xs text-muted-foreground">
                      <span>{p.material}</span>
                      <span className="text-foreground tabular-nums">${p.price}</span>
                    </p>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
