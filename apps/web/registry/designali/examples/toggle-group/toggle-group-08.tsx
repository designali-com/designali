"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function BillingCycleToggleGroup() {
  const [cycle, setCycle] = React.useState("yearly")
  const price = cycle === "yearly" ? 16 : 20

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4 border p-5">
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={[cycle]}
        onValueChange={(next) => next[0] && setCycle(next[0])}
      >
        <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
        <ToggleGroupItem value="yearly">
          Yearly
          <Badge variant="secondary" className="ms-1">
            -20%
          </Badge>
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="text-center">
        <p className="text-xs text-muted-foreground">Team plan</p>
        <p className="text-3xl font-semibold">
          ${price}
          <span className="text-sm font-normal text-muted-foreground">
            /seat/mo
          </span>
        </p>
        <p className="text-xs text-muted-foreground">
          {cycle === "yearly"
            ? "Billed $192 per seat annually"
            : "Billed monthly, cancel anytime"}
        </p>
      </div>
    </div>
  )
}
