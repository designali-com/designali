import {
  Download,
  RefreshCw,
  ShieldCheck,
  Star,
  Zap,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { IPhone } from "@/registry/designali/ui/apple/iphone"
import { Macbook } from "@/registry/designali/ui/apple/macbook"

const perks = [
  { icon: Download, title: "Instant download", text: "Files in your inbox the moment you check out." },
  { icon: RefreshCw, title: "Free updates", text: "Every new block and icon for 12 months." },
  { icon: ShieldCheck, title: "Commercial license", text: "Use it in client work, no questions." },
  { icon: Zap, title: "Built to ship", text: "Next.js, React, TypeScript and Tailwind CSS." },
]

const bundle = [
  { name: "Design Agency Template", price: 79 },
  { name: "Designali Icons Pro", price: 39 },
  { name: "Vectors Starter Pack", price: 19 },
]

export default function Ecommerce05() {
  const total = bundle.reduce((sum, item) => sum + item.price, 0)
  const discounted = Math.round(total * 0.85)

  return (
    <section className="w-full bg-background py-16 text-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid border border-border md:grid-cols-[1.2fr_1fr]">
          <div className="relative flex min-h-72 items-center justify-center overflow-hidden border-b border-border bg-muted p-6 pt-16 md:border-r md:border-b-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-primary/40" />
            <div className="relative flex w-full items-end justify-center">
              <Macbook variant="macbook-pro" color="black" size="sm" className="w-full! max-w-md">
                <img src="/images/templates/design-agency.jpg" alt="Design Agency Template" className="size-full object-cover object-top" />
              </Macbook>
              <IPhone size="sm" color="black" className="-ml-16 h-auto! w-1/5! max-w-full shrink-0 sm:-ml-20">
                <img src="/images/templates/dalim-icons-old.jpg" alt="Designali Icons Pro" className="size-full object-cover object-top" />
              </IPhone>
            </div>
            <span className="absolute top-6 left-6 bg-primary px-3 py-1 text-xs text-primary-foreground">
              Save 15%
            </span>
          </div>
          <div className="p-8 md:p-10">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Bundle
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight">The Studio Launch Set</h2>
            <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="size-4 fill-current text-primary" />
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
