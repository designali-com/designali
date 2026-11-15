"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Minus, Sparkles } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

type Billing = "monthly" | "yearly"

type Plan = {
  id: string
  name: string
  tagline: string
  monthly: number | null
  yearly: number | null
  oneTime?: number
  cta: string
  href: string
  featured?: boolean
  features: string[]
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Everything you need to explore and ship side projects.",
    monthly: 0,
    yearly: 0,
    cta: "Start for free",
    href: "/blocks",
    features: [
      "Free blocks, patterns & UI designs",
      "All icons, logos & vectors",
      "Copy code & open in v0",
      "Personal & commercial use",
      "Community updates",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For designers and developers shipping client work.",
    monthly: 19,
    yearly: 149,
    cta: "Get Pro",
    href: "/signup?plan=pro",
    featured: true,
    features: [
      "Everything in Free",
      "All 100+ landing page templates",
      "All premium blocks & sections",
      "Figma source files",
      "Full-project templates",
      "Priority access to new releases",
      "Email support",
    ],
  },
  {
    id: "team",
    name: "Team",
    tagline: "Shared access for studios and product teams.",
    monthly: 49,
    yearly: 399,
    cta: "Get Team",
    href: "/signup?plan=team",
    features: [
      "Everything in Pro",
      "Up to 10 team seats",
      "Organization dashboard",
      "Unlimited client projects",
      "Shared Figma library",
      "Priority support",
    ],
  },
  {
    id: "lifetime",
    name: "Lifetime",
    tagline: "Pay once. Every current and future resource, forever.",
    monthly: null,
    yearly: null,
    oneTime: 299,
    cta: "Get Lifetime",
    href: "/signup?plan=lifetime",
    features: [
      "Everything in Pro, forever",
      "All future templates & blocks",
      "Lifetime updates",
      "1 personal seat",
      "Early access to new tools",
    ],
  },
]

type Row = { label: string; values: (boolean | string)[] }

const comparison: { group: string; rows: Row[] }[] = [
  {
    group: "Library",
    rows: [
      { label: "Free blocks & UI designs", values: [true, true, true, true] },
      { label: "Patterns (1,500+)", values: [true, true, true, true] },
      { label: "Icons, logos & vectors", values: [true, true, true, true] },
      { label: "Premium blocks", values: [false, true, true, true] },
      { label: "Landing page templates", values: ["Selected", "All", "All", "All"] },
      { label: "Figma source files", values: [false, true, true, true] },
    ],
  },
  {
    group: "Usage",
    rows: [
      { label: "Commercial use", values: [true, true, true, true] },
      { label: "Client projects", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Seats", values: ["1", "1", "Up to 10", "1"] },
      { label: "Future releases", values: [false, "While subscribed", "While subscribed", "Forever"] },
    ],
  },
  {
    group: "Support",
    rows: [
      { label: "Community updates", values: [true, true, true, true] },
      { label: "Email support", values: [false, true, true, true] },
      { label: "Priority support", values: [false, false, true, false] },
    ],
  },
]

function formatPrice(plan: Plan, billing: Billing) {
  if (plan.oneTime !== undefined) {
    return { amount: `$${plan.oneTime}`, suffix: "one-time" }
  }

  if (plan.monthly === 0) {
    return { amount: "$0", suffix: "forever" }
  }

  if (billing === "yearly" && plan.yearly) {
    return {
      amount: `$${Math.round(plan.yearly / 12)}`,
      suffix: `/mo · billed $${plan.yearly}/yr`,
    }
  }

  return { amount: `$${plan.monthly}`, suffix: "/month" }
}

export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("yearly")

  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-center">
        <div
          role="radiogroup"
          aria-label="Billing period"
          className="inline-flex border bg-background p-1"
        >
          {(["monthly", "yearly"] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={billing === option}
              onClick={() => setBilling(option)}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 text-xs font-medium capitalize transition-colors",
                billing === option
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {option}
              {option === "yearly" && (
                <span
                  className={cn(
                    "text-[10px]",
                    billing === option ? "opacity-80" : "text-primary"
                  )}
                >
                  Save 35%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid border-t border-l sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => {
          const price = formatPrice(plan, billing)

          return (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col gap-6 border-r border-b p-6",
                plan.featured && "bg-muted/40"
              )}
            >
              {plan.featured && (
                <div className="absolute inset-x-0 top-0 h-0.5 bg-primary" />
              )}

              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold tracking-wide uppercase">
                  {plan.name}
                </h3>
                {plan.featured && (
                  <Badge>
                    <Sparkles data-icon="inline-start" />
                    Most popular
                  </Badge>
                )}
                {plan.oneTime !== undefined && (
                  <Badge variant="outline">Best value</Badge>
                )}
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight">
                    {price.amount}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {price.suffix}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {plan.tagline}
                </p>
              </div>

              <Button
                size="lg"
                variant={plan.featured ? "default" : "outline"}
                className="w-full"
                render={<Link href={plan.href} />}
              >
                {plan.cta}
              </Button>

              <ul className="flex flex-col gap-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function PricingComparison() {
  return (
    <div className="overflow-x-auto border">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="border-b bg-muted/40">
            <th className="w-1/3 p-4 text-left font-medium">Compare plans</th>
            {plans.map((plan) => (
              <th
                key={plan.id}
                className={cn(
                  "p-4 text-center font-medium",
                  plan.featured && "text-primary"
                )}
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        {comparison.map((section) => (
          <tbody key={section.group}>
            <tr className="border-b">
              <td
                colSpan={plans.length + 1}
                className="px-4 pt-6 pb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
              >
                {section.group}
              </td>
            </tr>
            {section.rows.map((row) => (
              <tr key={row.label} className="border-b last:border-b-0">
                <td className="p-4 text-muted-foreground">{row.label}</td>
                {row.values.map((value, index) => (
                  <td key={index} className="p-4 text-center">
                    {value === true ? (
                      <Check className="mx-auto size-4 text-primary" />
                    ) : value === false ? (
                      <Minus className="mx-auto size-4 text-muted-foreground/50" />
                    ) : (
                      <span className="text-xs">{value}</span>
                    )}
                    <span className="sr-only">
                      {value === true
                        ? "Included"
                        : value === false
                          ? "Not included"
                          : ""}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  )
}
