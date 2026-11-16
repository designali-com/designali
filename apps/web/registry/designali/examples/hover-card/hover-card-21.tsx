import {
  Check as CheckIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const steps = ["Placed", "Packed", "Shipped", "Delivered"]
const orders = [
  { id: "#ORD-2041", customer: "Brand identity client", step: 2 },
  { id: "#ORD-2040", customer: "Templates customer", step: 3 },
  { id: "#ORD-2039", customer: "Icons Pro customer", step: 1 },
]

export default function OrderStatusHoverCard() {
  return (
    <div className="w-full max-w-xs divide-y border text-sm">
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between px-3 py-2"
        >
          <HoverCard>
            <HoverCardTrigger href="#" className="font-mono hover:underline">
              {order.id}
            </HoverCardTrigger>
            <HoverCardContent side="right" className="w-56">
              <p className="mb-2 font-medium">{order.customer}</p>
              <ol className="flex flex-col gap-1.5">
                {steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex size-4 items-center justify-center rounded-full border",
                        i <= order.step
                          ? "border-primary bg-primary text-primary-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {i <= order.step && <CheckIcon className="size-2.5" />}
                    </span>
                    <span
                      className={i <= order.step ? "" : "text-muted-foreground"}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </HoverCardContent>
          </HoverCard>
          <Badge variant="outline">{steps[order.step]}</Badge>
        </div>
      ))}
    </div>
  )
}
