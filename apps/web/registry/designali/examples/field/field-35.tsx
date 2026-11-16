"use client"

import * as React from "react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"

const tiers = [
  { gb: 50, price: 0 },
  { gb: 200, price: 3 },
  { gb: 1000, price: 9 },
  { gb: 2000, price: 15 },
]

export default function StorageTierSlider() {
  const [index, setIndex] = React.useState([1])
  const tier = tiers[index[0]!]!

  return (
    <Field className="w-full max-w-sm">
      <div className="flex items-baseline justify-between">
        <FieldLabel htmlFor="storage-tier">Designali asset storage</FieldLabel>
        <span className="text-sm font-semibold">
          {tier.price ? "$" + tier.price + "/mo" : "Free"}
        </span>
      </div>
      <Slider
        id="storage-tier"
        value={index}
        onValueChange={(v) => setIndex(v as number[])}
        min={0}
        max={3}
        step={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        {tiers.map((t, i) => (
          <span
            key={t.gb}
            className={cn(i === index[0] && "font-medium text-foreground")}
          >
            {t.gb >= 1000 ? t.gb / 1000 + " TB" : t.gb + " GB"}
          </span>
        ))}
      </div>
    </Field>
  )
}
