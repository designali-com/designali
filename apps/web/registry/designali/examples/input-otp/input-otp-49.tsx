"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { CircleHelpIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function VerificationWithTooltipHelp() {
  return (
    <Field className="w-fit">
      <div className="flex items-center gap-1.5">
        <FieldLabel htmlFor="otp-help">Device code</FieldLabel>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Where is my code?"
              />
            }
          >
            <CircleHelpIcon />
          </TooltipTrigger>
          <TooltipContent>
            Open Settings → Devices on your phone to see the code.
          </TooltipContent>
        </Tooltip>
      </div>
      <InputOTP id="otp-help" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}
