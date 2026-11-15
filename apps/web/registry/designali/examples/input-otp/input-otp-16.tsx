import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function SpacedSlotBoxes() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="gap-2">
        <InputOTPSlot index={0} className="size-10 border text-sm" />
        <InputOTPSlot index={1} className="size-10 border text-sm" />
        <InputOTPSlot index={2} className="size-10 border text-sm" />
        <InputOTPSlot index={3} className="size-10 border text-sm" />
        <InputOTPSlot index={4} className="size-10 border text-sm" />
        <InputOTPSlot index={5} className="size-10 border text-sm" />
      </InputOTPGroup>
    </InputOTP>
  )
}
