"use client"

import { CreditCardIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

function chargeCard() {
  return new Promise<void>((_, reject) =>
    setTimeout(
      () => reject(new Error("Your card was declined (insufficient funds).")),
      1800
    )
  )
}

export default function PaymentFailedPromiseToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Order total</span>
          <span className="font-semibold">$128.40</span>
        </div>
        <div className="flex items-center gap-2 border bg-muted/40 px-3 py-2 text-sm">
          <CreditCardIcon className="size-4 text-muted-foreground" />
          Visa ending in 4242
        </div>
        <Button
          onClick={() =>
            notify
              .promise(chargeCard(), {
                loading: "Processing payment...",
                success: "Payment received",
                error: (err: Error) => ({
                  title: "Payment failed",
                  description: err.message,
                  priority: "high",
                }),
              })
              .catch(() => {})
          }
        >
          Pay now
        </Button>
      </div>
    </Toaster>
  )
}
