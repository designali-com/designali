"use client"

import * as React from "react"
import {
  Lock as LockIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { Spinner } from "@workspace/ui/components/spinner"

export default function PlaceOrderButton() {
  const [placing, setPlacing] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex justify-between text-sm">
        <span>Designali Portfolio Template</span>
        <span className="tabular-nums">$64.00</span>
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <Separator />
      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span className="tabular-nums">$64.00</span>
      </div>
      <Button
        size="lg"
        disabled={placing}
        onClick={() => {
          setPlacing(true)
          setTimeout(() => setPlacing(false), 2000)
        }}
      >
        {placing ? (
          <Spinner data-icon="inline-start" />
        ) : (
          <LockIcon data-icon="inline-start" />
        )}
        {placing ? "Placing order..." : "Place order"}
      </Button>
    </div>
  )
}
