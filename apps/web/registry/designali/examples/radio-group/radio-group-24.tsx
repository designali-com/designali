"use client"

import * as React from "react"

import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const tips = ["15", "18", "20", "25"]

export default function RestaurantTipSelector() {
  const [tip, setTip] = React.useState("18")
  const bill = 64.4

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Bill</span>
        <span className="tabular-nums">{"$" + bill.toFixed(2)}</span>
      </div>
      <RadioGroup
        value={tip}
        onValueChange={(v) => setTip(v as string)}
        aria-label="Tip"
        className="grid grid-cols-4 gap-0 border"
      >
        {tips.map((t) => (
          <label
            key={t}
            htmlFor={"tip-" + t}
            className="flex h-12 cursor-pointer flex-col items-center justify-center border-e text-sm last:border-e-0 has-data-checked:bg-primary has-data-checked:text-primary-foreground"
          >
            <RadioGroupItem value={t} id={"tip-" + t} className="sr-only" />
            <span className="font-medium">{t}%</span>
            <span className="text-[10px] opacity-70">
              {"$" + ((bill * Number(t)) / 100).toFixed(2)}
            </span>
          </label>
        ))}
      </RadioGroup>
      <div className="flex justify-between text-sm font-medium">
        <span>Total</span>
        <span className="tabular-nums">
          {"$" + (bill * (1 + Number(tip) / 100)).toFixed(2)}
        </span>
      </div>
    </div>
  )
}
