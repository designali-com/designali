"use client"

import * as React from "react"
import {
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function QuantityStepperLabel() {
  const [qty, setQty] = React.useState(2)

  return (
    <div className="grid w-fit gap-2">
      <Label htmlFor="seat-qty">Seats</Label>
      <div className="flex">
        <Button
          variant="outline"
          size="icon"
          aria-label="Remove seat"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
        >
          <MinusIcon />
        </Button>
        <Input
          id="seat-qty"
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value) || 1)}
          className="w-16 border-x-0 text-center"
        />
        <Button
          variant="outline"
          size="icon"
          aria-label="Add seat"
          onClick={() => setQty((q) => q + 1)}
        >
          <PlusIcon />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        {"$" + qty * 12}/month billed annually
      </p>
    </div>
  )
}
