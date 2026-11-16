"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AddToCartButton() {
  const [state, setState] = React.useState<"idle" | "adding" | "added">("idle")

  function add() {
    setState("adding")
    setTimeout(() => setState("added"), 800)
  }

  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-3 border p-3">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Design agency template</span>
        <span className="text-sm text-muted-foreground">$38.00</span>
      </div>
      <Button
        variant={state === "added" ? "secondary" : "default"}
        disabled={state === "adding"}
        onClick={state === "added" ? () => setState("idle") : add}
        className="w-32"
      >
        {state === "idle" && <ShoppingCartIcon data-icon="inline-start" />}
        {state === "adding" && <Spinner data-icon="inline-start" />}
        {state === "added" && <CheckIcon data-icon="inline-start" />}
        {state === "idle"
          ? "Add to cart"
          : state === "adding"
            ? "Adding"
            : "In cart"}
      </Button>
    </div>
  )
}
