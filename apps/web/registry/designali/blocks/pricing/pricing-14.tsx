"use client"

import { useState } from "react"
import {
  Check,
  Plus,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const base = {
  name: "Core workspace",
  price: 39,
  features: ["5 editors", "Unlimited viewers", "Shared component library", "Version history"],
}

const addons = [
  { id: "seats", name: "Extra 5 editors", description: "Grow without changing plans.", price: 25 },
  { id: "sso", name: "SAML SSO", description: "Okta, Entra ID and Google Workspace.", price: 30 },
  { id: "ai", name: "AI layout assistant", description: "Generate pages from a prompt or brief.", price: 15 },
  { id: "storage", name: "1 TB asset storage", description: "Video, 3D and raw image uploads.", price: 10 },
  { id: "support", name: "Priority support", description: "1-hour response, shared Slack channel.", price: 49 },
]

export default function Pricing14() {
  const [chosen, setChosen] = useState<string[]>(["sso"])
  const toggle = (id: string) =>
    setChosen((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    )
  const total =
    base.price +
    addons.filter((a) => chosen.includes(a.id)).reduce((sum, a) => sum + a.price, 0)

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Start with the core. Add only what you need.
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr_0.9fr]">
          <div className="border border-border p-6 md:p-8">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Included
            </p>
            <h3 className="mt-3 text-lg font-medium">{base.name}</h3>
            <p className="mt-4 text-4xl font-semibold tracking-tight">
              ${base.price}
              <span className="text-sm font-normal text-muted-foreground">
                /mo
              </span>
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {base.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="size-4 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border">
            <p className="flex items-center gap-2 border-b border-border px-6 py-4 text-xs tracking-widest text-muted-foreground uppercase">
              <Plus className="size-3.5" />
              Add-ons
            </p>
            <ul className="divide-y divide-border">
              {addons.map((addon) => (
                <li key={addon.id}>
                  <label
                    className={cn(
                      "flex cursor-pointer items-start gap-4 px-6 py-4 transition-colors",
                      chosen.includes(addon.id) ? "bg-muted/50" : "hover:bg-muted/30"
                    )}
                  >
                    <Checkbox
                      className="mt-0.5"
                      checked={chosen.includes(addon.id)}
                      onCheckedChange={() => toggle(addon.id)}
                    />
                    <span className="flex-1">
                      <span className="block text-sm font-medium">
                        {addon.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {addon.description}
                      </span>
                    </span>
                    <span className="text-sm whitespace-nowrap">
                      +${addon.price}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-fit flex-col bg-foreground p-6 text-background md:p-8 lg:sticky lg:top-24">
            <p className="text-xs tracking-widest text-background/60 uppercase">
              Your monthly total
            </p>
            <CounterNumber
              value={total}
              prefix="$"
              className="mt-4 block text-5xl font-semibold tracking-tight text-background"
            />
            <p className="mt-2 text-sm text-background/60">
              Core + {chosen.length} add-on{chosen.length === 1 ? "" : "s"}
            </p>
            <Button
              size="lg"
              className="mt-8 w-full bg-background text-foreground hover:bg-background/90"
            >
              Start free trial
            </Button>
            <p className="mt-4 text-xs text-background/60">
              Add or remove add-ons any time. Changes are prorated daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
