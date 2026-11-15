import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function CompactInlineOtp() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center justify-between gap-3 border p-3">
      <div>
        <p className="text-xs font-medium">Confirm new recovery phone</p>
        <p className="text-xs text-muted-foreground">
          Code sent to (555) 014-2290
        </p>
      </div>
      <div className="flex items-center gap-2">
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="size-7" />
            <InputOTPSlot index={1} className="size-7" />
            <InputOTPSlot index={2} className="size-7" />
            <InputOTPSlot index={3} className="size-7" />
          </InputOTPGroup>
        </InputOTP>
        <Button size="sm">Confirm</Button>
      </div>
    </div>
  )
}
