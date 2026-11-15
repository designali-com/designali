"use client"

import * as React from "react"
import { HeartIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const presets = ["10", "25", "50", "100"]

export default function DonationAmountPicker() {
  const [amount, setAmount] = React.useState("25")
  const [custom, setCustom] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <p className="text-sm font-medium">Choose an amount</p>
      <RadioGroup
        value={amount}
        onValueChange={(v) => setAmount(v as string)}
        className="grid grid-cols-4 gap-2"
      >
        {presets.map((p) => (
          <label
            key={p}
            htmlFor={"donate-" + p}
            className="flex h-10 cursor-pointer items-center justify-center border text-sm font-medium has-data-checked:border-primary has-data-checked:bg-primary has-data-checked:text-primary-foreground"
          >
            <RadioGroupItem value={p} id={"donate-" + p} className="sr-only" />
            {"$" + p}
          </label>
        ))}
        <label
          htmlFor="donate-custom"
          className="col-span-4 flex cursor-pointer items-center gap-3 border p-2 has-data-checked:border-primary"
        >
          <RadioGroupItem value="custom" id="donate-custom" />
          <span className="text-sm">Other</span>
          <Input
            aria-label="Custom amount"
            inputMode="decimal"
            placeholder="$ Amount"
            value={custom}
            onFocus={() => setAmount("custom")}
            onChange={(event) => setCustom(event.target.value)}
            className="h-8 flex-1"
          />
        </label>
      </RadioGroup>
      <Button>
        <HeartIcon data-icon="inline-start" />
        Donate{" "}
        {amount === "custom" ? (custom ? "$" + custom : "") : "$" + amount}
      </Button>
    </div>
  )
}
