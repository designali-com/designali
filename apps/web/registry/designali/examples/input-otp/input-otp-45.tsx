"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { PencilIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function MagicCodeTwoStep() {
  const [email, setEmail] = React.useState("sam@parcelpost.dev")
  const [step, setStep] = React.useState<"email" | "code">("code")

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      {step === "email" ? (
        <>
          <Field>
            <FieldLabel htmlFor="magic-email">Email</FieldLabel>
            <Input
              id="magic-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Button onClick={() => setStep("code")}>Send sign-in code</Button>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="truncate text-muted-foreground">{email}</span>
            <Button
              variant="link"
              size="sm"
              className="px-0"
              onClick={() => setStep("email")}
            >
              <PencilIcon data-icon="inline-start" />
              Edit
            </Button>
          </div>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} autoFocus>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button>Sign in</Button>
        </>
      )}
    </div>
  )
}
