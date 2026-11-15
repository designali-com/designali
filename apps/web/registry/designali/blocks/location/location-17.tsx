"use client"

import { useState } from "react"
import { BedDouble, Coffee, ParkingCircle, TreePine, UtensilsCrossed } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

const categories = [
  { id: "coffee", label: "Coffee", icon: Coffee, color: "bg-amber-500" },
  { id: "food", label: "Food", icon: UtensilsCrossed, color: "bg-rose-500" },
  { id: "hotel", label: "Hotels", icon: BedDouble, color: "bg-sky-500" },
  { id: "parking", label: "Parking", icon: ParkingCircle, color: "bg-indigo-500" },
  { id: "park", label: "Parks", icon: TreePine, color: "bg-emerald-500" },
]

const places = [
  { name: "Ground Floor Espresso", cat: "coffee", walk: "2 min", x: 58, y: 34 },
  { name: "Third Wave Kiosk", cat: "coffee", walk: "6 min", x: 22, y: 62 },
  { name: "Osteria Nove", cat: "food", walk: "4 min", x: 70, y: 60 },
  { name: "Hawker Lane", cat: "food", walk: "7 min", x: 30, y: 24 },
  { name: "The Mercer Hotel", cat: "hotel", walk: "5 min", x: 78, y: 22 },
  { name: "Northgate Inn", cat: "hotel", walk: "9 min", x: 14, y: 40 },
  { name: "Garage P3", cat: "parking", walk: "1 min", x: 44, y: 66 },
  { name: "Riverside Gardens", cat: "park", walk: "8 min", x: 84, y: 78 },
]

export default function Location17() {
  const [active, setActive] = useState<string[]>(["coffee", "food"])

  function toggle(id: string) {
    setActive((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]))
  }

  const shown = places.filter((p) => active.includes(p.cat))

  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Neighbourhood guide
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Around the Assembly Rooms
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {categories.map((c) => {
              const on = active.includes(c.id)
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(c.id)}
                  className={cn(
                    "inline-flex h-9 items-center gap-2 border px-3 text-sm transition-colors",
                    on ? "border-foreground bg-foreground text-background" : "hover:bg-muted"
                  )}
                >
                  <c.icon className="size-4" />
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid border lg:grid-cols-[1fr_320px]">
          <div className="relative min-h-[380px] overflow-hidden border-b bg-muted lg:min-h-[480px] lg:border-e lg:border-b-0">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
              <rect x="74" y="70" width="26" height="30" className="fill-emerald-200/70 dark:fill-emerald-900/40" />
              <g className="stroke-background" fill="none">
                <path d="M0 50 L100 46" strokeWidth="3" />
                <path d="M50 0 L48 100" strokeWidth="3" />
                <path d="M0 20 L100 18 M0 80 L100 76 M20 0 L18 100 M80 0 L82 100" strokeWidth="1.2" />
              </g>
            </svg>
            <span className="absolute top-[48%] left-[49%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 bg-foreground px-2.5 py-1.5 text-xs font-medium text-background shadow-lg">
              <span className="size-2 rounded-full bg-orange-500" />
              Assembly Rooms
            </span>
            {shown.map((place) => {
              const cat = categories.find((c) => c.id === place.cat)!
              return (
                <span
                  key={place.name}
                  title={place.name}
                  style={{ left: `${place.x}%`, top: `${place.y}%` }}
                  className={cn(
                    "absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-background text-white shadow animate-in zoom-in-50",
                    cat.color
                  )}
                >
                  <cat.icon className="size-3.5" />
                </span>
              )
            })}
          </div>

          <ul className="max-h-[480px] divide-y overflow-y-auto">
            {shown.length === 0 && (
              <li className="p-6 text-sm text-muted-foreground">
                Choose a category to see nearby places.
              </li>
            )}
            {shown.map((place) => {
              const cat = categories.find((c) => c.id === place.cat)!
              return (
                <li key={place.name} className="flex items-center gap-3 p-4">
                  <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-full text-white", cat.color)}>
                    <cat.icon className="size-3.5" />
                  </span>
                  <span className="flex-1 text-sm">
                    <span className="block font-medium">{place.name}</span>
                    <span className="block text-xs text-muted-foreground">{cat.label}</span>
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">{place.walk}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
