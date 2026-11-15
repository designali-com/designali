"use client"

import * as React from "react"
import { TicketPercentIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Input } from "@workspace/ui/components/input"
import { Separator } from "@workspace/ui/components/separator"

export default function PromoCodeReveal() {
  const [code, setCode] = React.useState("")
  const [applied, setApplied] = React.useState<string | null>(null)
  return (
    <div className="w-full max-w-xs space-y-3 border p-4 text-sm">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Subtotal</span>
        <span>$148.00</span>
      </div>
      {applied && (
        <div className="flex justify-between text-primary">
          <span>Discount ({applied})</span>
          <span>-$14.80</span>
        </div>
      )}
      <Collapsible>
        <CollapsibleTrigger
          render={<Button variant="link" size="xs" className="h-auto px-0" />}
        >
          <TicketPercentIcon />
          Have a promo code?
        </CollapsibleTrigger>
        <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
          <form
            className="flex gap-2 p-px pt-2"
            onSubmit={(event) => {
              event.preventDefault()
              if (code) setApplied(code.toUpperCase())
            }}
          >
            <Input
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="AUTUMN10"
            />
            <Button type="submit" variant="secondary">
              Apply
            </Button>
          </form>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>{applied ? "$133.20" : "$148.00"}</span>
      </div>
    </div>
  )
}
