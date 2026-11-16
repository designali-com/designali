import {
  CreditCard as CreditCardIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertPaymentFailed() {
  return (
    <Alert variant="error" className="max-w-md">
      <CreditCardIcon />
      <AlertTitle>Payment declined</AlertTitle>
      <AlertDescription>
        <p>
          We couldn&apos;t charge your Visa ending 4821 for the $48.00 Designali Pro
          renewal. Your template downloads stay active until Nov 22.
        </p>
        <div className="mt-2 flex gap-1.5">
          <Button size="xs">Update card</Button>
          <Button size="xs" variant="outline">
            Retry payment
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
