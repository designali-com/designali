"use client"

import * as React from "react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"
import { Label } from "@workspace/ui/components/label"

export default function AmountLabelWithBalance() {
  const [amount, setAmount] = React.useState("")

  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="amount">Designali payout</Label>
        <span className="text-xs text-muted-foreground">
          Available:{" "}
          <span className="font-medium text-foreground">$3,218.40</span>
        </span>
      </div>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="amount"
          inputMode="decimal"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="xs" onClick={() => setAmount("3218.40")}>
            Max
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
