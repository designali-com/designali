import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function CircularSlots() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup className="gap-3">
        <InputOTPSlot
          index={0}
          className="size-12 rounded-full border text-lg first:rounded-full last:rounded-full"
        />
        <InputOTPSlot
          index={1}
          className="size-12 rounded-full border text-lg first:rounded-full last:rounded-full"
        />
        <InputOTPSlot
          index={2}
          className="size-12 rounded-full border text-lg first:rounded-full last:rounded-full"
        />
        <InputOTPSlot
          index={3}
          className="size-12 rounded-full border text-lg first:rounded-full last:rounded-full"
        />
      </InputOTPGroup>
    </InputOTP>
  )
}
