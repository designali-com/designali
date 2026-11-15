import { Leaf, Package, RefreshCw, ShieldCheck, Star } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const perks = [
  { icon: Package, title: "Free shipping", text: "On every order over $75, worldwide." },
  { icon: RefreshCw, title: "60-day returns", text: "Changed your mind? Send it back free." },
  { icon: ShieldCheck, title: "Two-year warranty", text: "Repairs or replacements, no questions." },
  { icon: Leaf, title: "Carbon neutral", text: "Offset deliveries and recycled packaging." },
]

const bundle = [
  { name: "Ceramic Planter, Large", price: 64 },
  { name: "Watering Can, Brass", price: 48 },
  { name: "Plant Mister", price: 22 },
]

export default function Ecommerce05() {
  const total = bundle.reduce((sum, item) => sum + item.price, 0)
  const discounted = Math.round(total * 0.85)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid border border-border md:grid-cols-[1.2fr_1fr]">
          <div className="relative min-h-72 overflow-hidden border-b border-border bg-muted md:border-r md:border-b-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/40 via-transparent to-amber-400/40" />
            <span className="absolute top-6 left-6 bg-primary px-3 py-1 text-xs text-primary-foreground">
              Save 15%
            </span>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Bundle
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">The Plant Care Set</h2>
            <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="size-4 fill-current text-amber-500" />
              4.9 from 1,204 reviews
            </p>
            <ul className="mt-6 divide-y divide-border border-y border-border text-sm">
              {bundle.map((item) => (
                <li key={item.name} className="flex justify-between py-3">
                  <span>{item.name}</span>
                  <span className="text-muted-foreground tabular-nums">${item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-semibold">${discounted}</span>
              <span className="text-muted-foreground line-through">${total}</span>
            </div>
            <Button size="lg" className="mt-6 w-full">
              Add bundle to cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 border-x border-b border-border sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.title} className="flex gap-4 border-border p-6 not-last:border-b sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:not-last:border-r">
              <perk.icon className="mt-0.5 size-5 shrink-0" />
              <div>
                <p className="text-sm font-medium">{perk.title}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{perk.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
