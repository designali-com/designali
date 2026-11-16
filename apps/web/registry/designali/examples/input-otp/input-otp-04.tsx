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
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function EmailVerificationCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Check your inbox</CardTitle>
        <CardDescription>
          We sent a 6-digit code to{" "}
          <span className="font-medium text-foreground">
            ali@designali.com
          </span>
          .
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} autoFocus>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button className="w-full">Verify email</Button>
      </CardContent>
      <CardFooter className="justify-center text-xs text-muted-foreground">
        Didn&apos;t get it?
        <Button variant="link" size="sm" className="px-1">
          Resend code
        </Button>
      </CardFooter>
    </Card>
  )
}
