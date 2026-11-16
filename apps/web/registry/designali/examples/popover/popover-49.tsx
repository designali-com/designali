"use client"

import * as React from "react"
import {
  TicketPercent as TicketPercentIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"

const CODES: Record<string, number> = { WELCOME10: 10, FALL25: 25 }
const SUBTOTAL = 148

export default function CouponCodePopover() {
  const [open, setOpen] = React.useState(false)
  const [code, setCode] = React.useState("")
  const [error, setError] = React.useState<string | null>(null)
  const [applied, setApplied] = React.useState<string | null>(null)
  const discount = applied ? (SUBTOTAL * CODES[applied]!) / 100 : 0

  return (
    <div className="flex w-full max-w-xs flex-col gap-2 border p-4 text-xs">
      <div className="flex justify-between">
        <span className="text-muted-foreground">Subtotal</span>
        <span className="tabular-nums">${SUBTOTAL.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between">
        {applied ? (
          <Badge variant="secondary">
            <TicketPercentIcon /> {applied}
          </Badge>
        ) : (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              render={<Button variant="link" size="xs" className="px-0" />}
            >
              Add promo code
            </PopoverTrigger>
            <PopoverContent className="w-64" align="start">
              <form
                className="flex flex-col gap-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  const normalized = code.trim().toUpperCase()
                  if (!CODES[normalized]) {
                    setError("That code is invalid or has expired.")
                    return
                  }
                  setApplied(normalized)
                  setError(null)
                  setOpen(false)
                }}
              >
                <Field data-invalid={!!error}>
                  <FieldLabel htmlFor="promo">Promo code</FieldLabel>
                  <Input
                    id="promo"
                    placeholder="WELCOME10"
                    value={code}
                    aria-invalid={!!error}
                    onChange={(event) => (
                      setCode(event.target.value),
                      setError(null)
                    )}
                    className="h-8 uppercase"
                  />
                  {error && <FieldError>{error}</FieldError>}
                </Field>
                <Button type="submit" size="sm" disabled={!code.trim()}>
                  Apply
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        )}
        {applied && (
          <span className="text-primary tabular-nums dark:text-primary">
            -${discount.toFixed(2)}
          </span>
        )}
      </div>
      <Separator />
      <div className="flex justify-between text-sm font-medium">
        <span>Total</span>
        <span className="tabular-nums">
          ${(SUBTOTAL - discount).toFixed(2)}
        </span>
      </div>
    </div>
  )
}
