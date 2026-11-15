"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const currencies = [
  { label: "USD", value: "USD", name: "US Dollar", symbol: "$", rate: 1 },
  { label: "EUR", value: "EUR", name: "Euro", symbol: "€", rate: 0.92 },
  {
    label: "GBP",
    value: "GBP",
    name: "British Pound",
    symbol: "£",
    rate: 0.79,
  },
  {
    label: "JPY",
    value: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    rate: 151.4,
  },
]

export default function CurrencyConverterSelect() {
  const [code, setCode] = React.useState<string | null>("USD")
  const currency =
    currencies.find((item) => item.value === code) ?? currencies[0]!
  const amount = 49 * currency.rate

  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3 border p-4">
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">
          Team plan, monthly
        </span>
        <span className="text-2xl font-semibold tabular-nums">
          {currency.symbol}
          {currency.value === "JPY" ? Math.round(amount) : amount.toFixed(2)}
        </span>
      </div>
      <Select items={currencies} value={code} onValueChange={setCode}>
        <SelectTrigger size="sm" aria-label="Currency">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className="w-4 text-center text-muted-foreground">
                {item.symbol}
              </span>
              {item.label}
              <span className="text-muted-foreground">{item.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
