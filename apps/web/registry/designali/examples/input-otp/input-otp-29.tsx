import {
  BadgeCheck as BadgeCheckIcon,
} from "@designali/icons"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function VerifiedSuccessState() {
  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP
        maxLength={6}
        value="305918"
        disabled
        containerClassName="has-disabled:opacity-100"
      >
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="border-primary/60 bg-primary/10 text-chart-3 dark:text-chart-1"
          />
          <InputOTPSlot
            index={1}
            className="border-primary/60 bg-primary/10 text-chart-3 dark:text-chart-1"
          />
          <InputOTPSlot
            index={2}
            className="border-primary/60 bg-primary/10 text-chart-3 dark:text-chart-1"
          />
          <InputOTPSlot
            index={3}
            className="border-primary/60 bg-primary/10 text-chart-3 dark:text-chart-1"
          />
          <InputOTPSlot
            index={4}
            className="border-primary/60 bg-primary/10 text-chart-3 dark:text-chart-1"
          />
          <InputOTPSlot
            index={5}
            className="border-primary/60 bg-primary/10 text-chart-3 dark:text-chart-1"
          />
        </InputOTPGroup>
      </InputOTP>
      <p className="flex items-center gap-1.5 text-xs font-medium text-chart-3 dark:text-primary">
        <BadgeCheckIcon className="size-4" />
        Email verified
      </p>
    </div>
  )
}
