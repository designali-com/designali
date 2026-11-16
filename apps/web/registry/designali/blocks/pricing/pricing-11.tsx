"use client"

import { useState } from "react"
import {
  Lock,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 9,
    detail: "1 site, 10k monthly visitors, basic analytics",
  },
  {
    id: "growth",
    name: "Growth",
    price: 29,
    detail: "5 sites, 100k visitors, A/B testing, form logic",
    tag: "Most chosen",
  },
  {
    id: "scale",
    name: "Scale",
    price: 79,
    detail: "Unlimited sites, 1M visitors, roles, priority support",
  },
]

export default function Pricing11() {
  const [selected, setSelected] = useState("growth")
  const [annual, setAnnual] = useState(true)
  const plan = plans.find((p) => p.id === selected)!
  const monthly = annual ? Math.round(plan.price * 0.8) : plan.price
  const dueToday = annual ? monthly * 12 : monthly

  return (
    <section className="w-full bg-muted/30 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Pick a plan and check out
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Switch plans or cancel anytime from your dashboard.
          </p>
          <div
            role="radiogroup"
            aria-label="Plan"
            className="mt-8 divide-y divide-border border border-border bg-background"
          >
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                role="radio"
                aria-checked={selected === p.id}
                onClick={() => setSelected(p.id)}
                className={cn(
                  "flex w-full items-start gap-4 p-5 text-start transition-colors md:p-6",
                  selected === p.id ? "bg-muted/60" : "hover:bg-muted/30"
                )}
              >
                <span
                  className={cn(
                    "mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border",
                    selected === p.id ? "border-foreground" : "border-border"
                  )}
                >
                  {selected === p.id && (
                    <span className="size-2 rounded-full bg-foreground" />
                  )}
                </span>
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-medium">{p.name}</span>
                    {p.tag && (
                      <span className="border border-border px-1.5 py-0.5 text-[10px] tracking-wider text-muted-foreground uppercase">
                        {p.tag}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {p.detail}
                  </span>
                </span>
                <span className="text-end">
                  <span className="block text-lg font-semibold">
                    ${annual ? Math.round(p.price * 0.8) : p.price}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    /mo
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <aside className="h-fit border border-border bg-background p-6 md:p-8 lg:sticky lg:top-24">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Order summary
          </p>
          <div className="mt-6 grid grid-cols-2 border border-border p-1 text-sm">
            {[
              { label: "Monthly", value: false },
              { label: "Yearly -20%", value: true },
            ].map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => setAnnual(option.value)}
                className={cn(
                  "py-2 transition-colors",
                  annual === option.value
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">{plan.name} plan</dt>
              <dd>${monthly}/mo</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Billing</dt>
              <dd>{annual ? "12 months" : "1 month"}</dd>
            </div>
            {annual && (
              <div className="flex justify-between text-emerald-600 dark:text-emerald-400">
                <dt>Annual saving</dt>
                <dd>-${(plan.price - monthly) * 12}</dd>
              </div>
            )}
          </dl>
          <div className="mt-6 flex items-baseline justify-between border-t border-border pt-6">
            <span className="text-sm font-medium">Due today</span>
            <span className="text-3xl font-semibold tracking-tight">
              ${dueToday}
            </span>
          </div>
          <Button size="lg" className="mt-6 w-full">
            Continue to payment
          </Button>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" />
            Secure checkout. Taxes calculated at next step.
          </p>
        </aside>
      </div>
    </section>
  )
}
