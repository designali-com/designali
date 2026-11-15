import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function LargeOtpSlots() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} className="size-14 text-2xl font-semibold" />
        <InputOTPSlot index={1} className="size-14 text-2xl font-semibold" />
        <InputOTPSlot index={2} className="size-14 text-2xl font-semibold" />
        <InputOTPSlot index={3} className="size-14 text-2xl font-semibold" />
      </InputOTPGroup>
    </InputOTP>
  )
}
