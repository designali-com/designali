"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function ChangeEmailConfirmation() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center gap-2 border bg-muted/40 p-3 text-xs">
        <span className="truncate text-muted-foreground line-through">
          jonah@oldmail.dev
        </span>
        <ArrowRightIcon className="size-3.5 shrink-0" />
        <span className="truncate font-medium">jonah.reyes@fieldnotes.io</span>
      </div>
      <Field>
        <FieldLabel htmlFor="change-email-otp">
          Code sent to your new address
        </FieldLabel>
        <InputOTP
          id="change-email-otp"
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Field>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          Cancel change
        </Button>
        <Button size="sm">Confirm email</Button>
      </div>
    </div>
  )
}
