import { CreditCardIcon } from "lucide-react"

import { Card, CardContent } from "@workspace/ui/components/card"
import { Spinner } from "@workspace/ui/components/spinner"

export default function PaymentProcessingCard() {
  return (
    <Card className="w-full max-w-xs text-center">
      <CardContent className="flex flex-col items-center gap-4 py-4">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
          <Spinner className="size-7 text-primary" />
        </div>
        <div>
          <div className="text-2xl font-semibold tabular-nums">$249.00</div>
          <div className="text-sm text-muted-foreground">
            Processing payment
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CreditCardIcon className="size-3.5" />
          Visa ending in 4821
        </div>
        <p className="text-xs text-muted-foreground">
          Please don&apos;t close or refresh this window.
        </p>
      </CardContent>
    </Card>
  )
}
