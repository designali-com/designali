"use client"

import * as React from "react"
import {
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "@workspace/ui/components/button-group"

export default function QuantityStepperButtons() {
  const [qty, setQty] = React.useState(1)

  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3 border p-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Portfolio template license</span>
        <span className="text-xs text-muted-foreground">Max 5 per order</span>
      </div>
      <ButtonGroup>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Decrease quantity"
          disabled={qty <= 1}
          onClick={() => setQty(qty - 1)}
        >
          <MinusIcon />
        </Button>
        <ButtonGroupText className="h-7 w-9 justify-center tabular-nums">
          {qty}
        </ButtonGroupText>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Increase quantity"
          disabled={qty >= 5}
          onClick={() => setQty(qty + 1)}
        >
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
