"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

const plans = [
  { name: "Starter", monthly: 12 },
  { name: "Team", monthly: 29 },
]

export default function BillingCycleSwitch() {
  const [yearly, setYearly] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-center gap-3 text-sm">
        <span className={cn(!yearly ? "font-medium" : "text-muted-foreground")}>
          Monthly
        </span>
        <Switch
          checked={yearly}
          onCheckedChange={setYearly}
          aria-label="Bill yearly"
        />
        <span className={cn(yearly ? "font-medium" : "text-muted-foreground")}>
          Yearly
        </span>
        <Badge variant="secondary">Save 20%</Badge>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {plans.map((plan) => {
          const price = yearly ? Math.round(plan.monthly * 0.8) : plan.monthly
          return (
            <div key={plan.name} className="border p-4">
              <p className="text-sm font-medium">{plan.name}</p>
              <p className="mt-2 text-2xl font-semibold">
                {"$" + price}
                <span className="text-xs font-normal text-muted-foreground">
                  {" "}
                  /mo
                </span>
              </p>
              <p className="text-xs text-muted-foreground">
                {yearly
                  ? "Billed " + "$" + price * 12 + " yearly"
                  : "Billed monthly"}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
