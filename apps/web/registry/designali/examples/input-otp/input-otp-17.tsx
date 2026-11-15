import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function UnderlineSlots() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup className="gap-3">
        <InputOTPSlot
          index={0}
          className="size-9 border-0 border-b-2 bg-transparent text-lg first:border-s-0 data-[active=true]:ring-0 dark:bg-transparent"
        />
        <InputOTPSlot
          index={1}
          className="size-9 border-0 border-b-2 bg-transparent text-lg first:border-s-0 data-[active=true]:ring-0 dark:bg-transparent"
        />
        <InputOTPSlot
          index={2}
          className="size-9 border-0 border-b-2 bg-transparent text-lg first:border-s-0 data-[active=true]:ring-0 dark:bg-transparent"
        />
        <InputOTPSlot
          index={3}
          className="size-9 border-0 border-b-2 bg-transparent text-lg first:border-s-0 data-[active=true]:ring-0 dark:bg-transparent"
        />
        <InputOTPSlot
          index={4}
          className="size-9 border-0 border-b-2 bg-transparent text-lg first:border-s-0 data-[active=true]:ring-0 dark:bg-transparent"
        />
        <InputOTPSlot
          index={5}
          className="size-9 border-0 border-b-2 bg-transparent text-lg first:border-s-0 data-[active=true]:ring-0 dark:bg-transparent"
        />
      </InputOTPGroup>
    </InputOTP>
  )
}
