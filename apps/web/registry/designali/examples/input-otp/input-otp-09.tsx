import { LockIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function LockedAfterAttempts() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <InputOTP maxLength={6} disabled>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Alert variant="error">
        <LockIcon />
        <AlertTitle>Too many attempts</AlertTitle>
        <AlertDescription>
          For your security, code entry is paused for 15 minutes.
        </AlertDescription>
      </Alert>
    </div>
  )
}
