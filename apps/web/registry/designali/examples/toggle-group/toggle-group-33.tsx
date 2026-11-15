"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const rates: Record<string, { symbol: string; rate: number }> = {
  usd: { symbol: "$", rate: 1 },
  eur: { symbol: "€", rate: 0.92 },
  gbp: { symbol: "£", rate: 0.79 },
}

export default function CurrencyToggleGroup() {
  const [currency, setCurrency] = React.useState("usd")
  const { symbol, rate } = rates[currency]!

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-5">
      <ToggleGroup
        size="sm"
        spacing={0}
        variant="outline"
        value={[currency]}
        onValueChange={(next) => next[0] && setCurrency(next[0])}
      >
        {Object.keys(rates).map((c) => (
          <ToggleGroupItem key={c} value={c} className="uppercase">
            {c}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <span className="text-3xl font-semibold tabular-nums">
        {symbol}
        {(49 * rate).toFixed(2)}
      </span>
      <span className="text-xs text-muted-foreground">
        Studio plan, per month
      </span>
    </div>
  )
}
