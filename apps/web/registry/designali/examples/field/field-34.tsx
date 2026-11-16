"use client"

import * as React from "react"
import {
  BadgePercent as BadgePercentIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function CouponCodeField() {
  const [code, setCode] = React.useState("")
  const [result, setResult] = React.useState<"idle" | "ok" | "bad">("idle")

  return (
    <Field data-invalid={result === "bad"} className="w-full max-w-xs">
      <FieldLabel htmlFor="promo-code">Promo code</FieldLabel>
      <div className="flex gap-2">
        <Input
          id="promo-code"
          value={code}
          placeholder="DESIGNALI25"
          aria-invalid={result === "bad"}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase())
            setResult("idle")
          }}
          className="font-sans"
        />
        <Button
          variant="outline"
          disabled={!code}
          onClick={() => setResult(code === "SPRING25" ? "ok" : "bad")}
        >
          Apply
        </Button>
      </div>
      {result === "ok" && (
        <FieldDescription className="flex items-center gap-1 text-primary">
          <BadgePercentIcon className="size-3.5" />
          25% off applied to your order.
        </FieldDescription>
      )}
      {result === "bad" && (
        <FieldError>That code is invalid or has expired.</FieldError>
      )}
      {result === "idle" && <FieldDescription>Try SPRING25.</FieldDescription>}
    </Field>
  )
}
