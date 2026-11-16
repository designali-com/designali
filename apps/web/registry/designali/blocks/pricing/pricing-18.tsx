"use client"

import { useState } from "react"
import {
  Check,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const currencies = {
  USD: { symbol: "$", rate: 1 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  INR: { symbol: "₹", rate: 83 },
} as const

type Currency = keyof typeof currencies

const tiers = [
  {
    name: "Basic",
    usd: 0,
    for: "Try it out",
    features: ["1 inbox", "100 contacts", "Email channel"],
  },
  {
    name: "Starter",
    usd: 15,
    for: "Solo support",
    features: ["2 inboxes", "2,500 contacts", "Email and chat", "Saved replies"],
  },
  {
    name: "Team",
    usd: 45,
    for: "Growing support teams",
    features: ["10 inboxes", "25,000 contacts", "All channels", "SLA rules", "Reports"],
    featured: true,
  },
  {
    name: "Scale",
    usd: 120,
    for: "Multi-brand operations",
    features: ["Unlimited inboxes", "Unlimited contacts", "Custom roles", "SSO", "Sandbox"],
  },
]

export default function Pricing18() {
  const [currency, setCurrency] = useState<Currency>("USD")
  const [yearly, setYearly] = useState(true)
  const { symbol, rate } = currencies[currency]

  const format = (usd: number) => {
    const value = Math.round(usd * rate * (yearly ? 0.83 : 1))
    return `${symbol}${value.toLocaleString("en-US")}`
  }

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Plans and pricing
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prices shown per agent, excluding local taxes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-3 text-sm">
              <Switch checked={yearly} onCheckedChange={setYearly} />
              Billed yearly
              <span className="text-xs text-primary dark:text-primary">
                2 months free
              </span>
            </label>
            <div className="flex border border-border">
              {(Object.keys(currencies) as Currency[]).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  aria-pressed={currency === code}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium transition-colors",
                    currency === code
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col border-b border-border py-8 sm:px-6 lg:border-b-0",
                index % 2 === 1 && "sm:border-l",
                index > 0 && "lg:border-l",
                tier.featured && "bg-muted/50"
              )}
            >
              <p className="text-sm font-medium">{tier.name}</p>
              <p className="text-xs text-muted-foreground">{tier.for}</p>
              <p className="mt-6 text-4xl font-semibold tracking-tight tabular-nums">
                {format(tier.usd)}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                per agent / month
              </p>
              <Button
                className="mt-6 w-full"
                variant={tier.featured ? "default" : "outline"}
              >
                {tier.usd === 0 ? "Start free" : "Start trial"}
              </Button>
              <ul className="mt-6 space-y-2.5 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <Check className="size-3.5 shrink-0 text-muted-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
