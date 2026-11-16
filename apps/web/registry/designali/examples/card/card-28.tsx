"use client"

import * as React from "react"

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const plans = [
  {
    value: "starter",
    name: "Starter",
    price: "$0",
    note: "Free blocks and icons",
  },
  {
    value: "pro",
    name: "Pro",
    price: "$18",
    note: "All templates, blocks and UI examples",
  },
  {
    value: "business",
    name: "Studio",
    price: "$49",
    note: "Team license and design-to-code support",
  },
]

export default function SelectablePlanCards() {
  const [plan, setPlan] = React.useState("pro")

  return (
    <RadioGroup
      value={plan}
      onValueChange={(v) => setPlan(v as string)}
      className="grid w-full max-w-sm gap-2"
    >
      {plans.map((p) => (
        <label key={p.value}>
          <Card
            size="sm"
            className={cn(
              "cursor-pointer transition-shadow hover:ring-foreground/30",
              plan === p.value &&
                "bg-muted/40 ring-2 ring-primary hover:ring-primary"
            )}
          >
            <CardHeader className="grid-cols-[auto_1fr_auto] items-center gap-x-3">
              <RadioGroupItem value={p.value} className="row-span-2" />
              <CardTitle>{p.name}</CardTitle>
              <CardDescription>{p.note}</CardDescription>
              <CardAction className="col-start-3 self-center">
                <span className="text-sm font-semibold">{p.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </CardAction>
            </CardHeader>
          </Card>
        </label>
      ))}
    </RadioGroup>
  )
}
