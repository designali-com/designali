"use client"

import { useState } from "react"
import { Check, ChevronDown, Minus } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

const plans = [
  { name: "Launch", price: "$0" },
  { name: "Grow", price: "$32" },
  { name: "Scale", price: "$96" },
]

type Value = boolean | string

const groups: { name: string; rows: { feature: string; values: Value[] }[] }[] = [
  {
    name: "Publishing",
    rows: [
      { feature: "Sites", values: ["1", "10", "Unlimited"] },
      { feature: "Custom domains", values: [false, true, true] },
      { feature: "Scheduled publishing", values: [false, true, true] },
    ],
  },
  {
    name: "Collaboration",
    rows: [
      { feature: "Editors", values: ["1", "5", "25"] },
      { feature: "Comments and approvals", values: [false, true, true] },
      { feature: "Branching", values: [false, false, true] },
    ],
  },
  {
    name: "Security",
    rows: [
      { feature: "Two-factor auth", values: [true, true, true] },
      { feature: "SAML SSO", values: [false, false, true] },
      { feature: "Audit log retention", values: ["-", "30 days", "1 year"] },
    ],
  },
]

function Cell({ value }: { value: Value }) {
  if (value === true) return <Check className="size-4" aria-label="Included" />
  if (value === false || value === "-")
    return (
      <Minus className="size-4 text-muted-foreground" aria-label="Not included" />
    )
  return <span>{value}</span>
}

export default function Pricing17() {
  const [mobilePlan, setMobilePlan] = useState(1)

  return (
    <section className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Every feature, side by side
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Expand a category to see what each plan includes.
        </p>

        <div className="mt-8 grid grid-cols-3 border border-border md:hidden">
          {plans.map((plan, index) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setMobilePlan(index)}
              className={cn(
                "py-3 text-sm transition-colors",
                mobilePlan === index
                  ? "bg-foreground text-background"
                  : "text-muted-foreground"
              )}
            >
              {plan.name}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-[1fr_6rem] border-b border-border pb-6 md:mt-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <span />
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(index !== mobilePlan && "hidden md:block")}
            >
              <p className="text-sm font-medium">{plan.name}</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">
                {plan.price}
                <span className="text-xs font-normal text-muted-foreground">
                  /mo
                </span>
              </p>
              <Button
                size="sm"
                variant={index === 1 ? "default" : "outline"}
                className="mt-3 hidden md:inline-flex"
              >
                Choose
              </Button>
            </div>
          ))}
        </div>

        {groups.map((group, groupIndex) => (
          <Collapsible
            key={group.name}
            defaultOpen={groupIndex === 0}
            className="border-b border-border"
          >
            <CollapsibleTrigger className="group flex w-full items-center justify-between py-4 text-start text-sm font-medium">
              {group.name}
              <ChevronDown className="size-4 text-muted-foreground transition-transform group-data-[panel-open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="pb-4">
                {group.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-[1fr_6rem] items-center py-2.5 text-sm md:grid-cols-[1.4fr_repeat(3,1fr)]"
                  >
                    <span className="text-muted-foreground">{row.feature}</span>
                    {row.values.map((value, index) => (
                      <span
                        key={index}
                        className={cn(index !== mobilePlan && "hidden md:block")}
                      >
                        <Cell value={value} />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
        <Button size="lg" className="mt-8 w-full md:hidden">
          Choose {plans[mobilePlan]!.name}
        </Button>
      </div>
    </section>
  )
}
