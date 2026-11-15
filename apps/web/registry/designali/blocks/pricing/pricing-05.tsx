"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const plans = [
  {
    name: "Starter",
    monthly: 0,
    description: "For individuals exploring the library.",
    features: ["40 free blocks", "Community support", "Personal projects"],
  },
  {
    name: "Pro",
    monthly: 24,
    description: "For freelancers shipping client work.",
    features: [
      "All 300+ blocks",
      "Figma source files",
      "Commercial license",
      "Priority updates",
    ],
    featured: true,
  },
  {
    name: "Team",
    monthly: 79,
    description: "For studios with shared libraries.",
    features: [
      "Everything in Pro",
      "10 seats included",
      "Private registry",
      "Dedicated Slack channel",
    ],
  },
]

export default function Pricing05() {
  const [yearly, setYearly] = useState(true)

  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Simple, honest pricing
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 text-sm">
            <span className={cn(!yearly && "font-medium")}>Monthly</span>
            <Switch
              checked={yearly}
              onCheckedChange={setYearly}
              aria-label="Toggle yearly billing"
            />
            <span className={cn(yearly && "font-medium")}>
              Yearly <span className="text-muted-foreground">(save 20%)</span>
            </span>
          </div>
        </div>
        <div className="mt-12 grid border-t border-l border-border md:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? Math.round(plan.monthly * 0.8) : plan.monthly
            return (
              <div
                key={plan.name}
                className={cn(
                  "flex flex-col border-r border-b border-border p-8",
                  plan.featured && "bg-muted/50"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{plan.name}</h3>
                  {plan.featured && (
                    <span className="bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      Popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <p className="mt-8 flex items-end gap-1">
                  <span className="text-5xl font-semibold tracking-tighter">
                    ${price}
                  </span>
                  <span className="mb-1 text-sm text-muted-foreground">
                    / month
                  </span>
                </p>
                <Button
                  className="mt-8 w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.monthly === 0
                    ? "Start for free"
                    : `Choose ${plan.name}`}
                </Button>
                <ul className="mt-8 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="size-4 text-muted-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
