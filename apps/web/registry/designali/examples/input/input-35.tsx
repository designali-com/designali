"use client"

import * as React from "react"
import { TicketIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const codes: Record<string, string> = {
  SPRING20: "20% off your first year",
  WELCOME: "$10 off",
}

export default function CouponCodeInput() {
  const [code, setCode] = React.useState("")
  const [result, setResult] = React.useState<{
    ok: boolean
    text: string
  } | null>(null)

  return (
    <Field data-invalid={result?.ok === false} className="w-full max-w-sm">
      <FieldLabel htmlFor="coupon">Promo code</FieldLabel>
      <div className="flex gap-2">
        <Input
          id="coupon"
          placeholder="SPRING20"
          value={code}
          aria-invalid={result?.ok === false}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase())
            setResult(null)
          }}
          className="font-mono uppercase"
        />
        <Button
          variant="outline"
          disabled={!code}
          onClick={() =>
            setResult(
              codes[code]
                ? { ok: true, text: codes[code] }
                : { ok: false, text: "This code is invalid or expired." }
            )
          }
        >
          Apply
        </Button>
      </div>
      {result?.ok && (
        <FieldDescription className="flex items-center gap-1 text-emerald-600">
          <TicketIcon className="size-3.5" />
          {result.text} applied
        </FieldDescription>
      )}
      {result?.ok === false && <FieldError>{result.text}</FieldError>}
    </Field>
  )
}
