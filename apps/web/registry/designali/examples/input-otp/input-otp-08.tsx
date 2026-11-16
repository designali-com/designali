import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function InvalidCodeError() {
  return (
    <Field className="w-fit" data-invalid>
      <FieldLabel htmlFor="otp-invalid">designali.com verification code</FieldLabel>
      <InputOTP id="otp-invalid" maxLength={6} defaultValue="482913">
        <InputOTPGroup>
          <InputOTPSlot index={0} aria-invalid />
          <InputOTPSlot index={1} aria-invalid />
          <InputOTPSlot index={2} aria-invalid />
          <InputOTPSlot index={3} aria-invalid />
          <InputOTPSlot index={4} aria-invalid />
          <InputOTPSlot index={5} aria-invalid />
        </InputOTPGroup>
      </InputOTP>
      <FieldError>That Designali code is incorrect or has expired.</FieldError>
    </Field>
  )
}
