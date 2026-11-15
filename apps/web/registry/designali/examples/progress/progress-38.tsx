import { CreditCardIcon, ShoppingCartIcon, TruckIcon } from "lucide-react"

import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { label: "Cart", icon: ShoppingCartIcon },
  { label: "Shipping", icon: TruckIcon },
  { label: "Payment", icon: CreditCardIcon },
]

export default function CheckoutStepHeader() {
  const current = 1

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <span
            key={step.label}
            className={cn(
              "flex items-center gap-1.5 text-xs",
              i <= current ? "text-foreground" : "text-muted-foreground"
            )}
          >
            <step.icon className="size-3.5" />
            {step.label}
          </span>
        ))}
      </div>
      <Progress
        value={50}
        aria-label="Checkout progress"
        className="[&_[data-slot=progress-track]]:h-0.5"
      />
      <p className="text-sm font-medium">Where should we send your order?</p>
    </div>
  )
}
