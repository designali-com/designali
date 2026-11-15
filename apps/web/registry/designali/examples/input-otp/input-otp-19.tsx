"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

const rows = [
  { label: "To", value: "Harbor Lane Studio" },
  { label: "Account", value: "•••• 7730" },
  { label: "Amount", value: "$2,450.00" },
]

export default function BankTransferConfirmation() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Confirm transfer</CardTitle>
        <CardDescription>
          Enter the code sent to your banking app.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <dl className="divide-y border text-xs">
          {rows.map((row) => (
            <div key={row.label} className="flex justify-between px-3 py-2">
              <dt className="text-muted-foreground">{row.label}</dt>
              <dd className="font-medium">{row.value}</dd>
            </div>
          ))}
        </dl>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          containerClassName="justify-center"
        >
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
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">
          Cancel
        </Button>
        <Button className="flex-1">Send $2,450</Button>
      </CardFooter>
    </Card>
  )
}
