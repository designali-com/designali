"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Toggle } from "@workspace/ui/components/toggle"

export default function AnnualBillingToggle() {
  const [annual, setAnnual] = React.useState(false)
  const price = annual ? 16 : 20

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Team plan</span>
        <Toggle
          variant="outline"
          size="sm"
          pressed={annual}
          onPressedChange={setAnnual}
        >
          Pay yearly
          <Badge variant={annual ? "default" : "secondary"} className="ms-1">
            -20%
          </Badge>
        </Toggle>
      </div>
      <p>
        <span className="text-3xl font-semibold">{"$" + price}</span>
        <span className="text-sm text-muted-foreground"> / seat / month</span>
      </p>
      <p className="text-xs text-muted-foreground">
        {annual
          ? "Billed $192 per seat each year."
          : "Billed monthly. Cancel anytime."}
      </p>
    </div>
  )
}
