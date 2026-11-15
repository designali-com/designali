import { TruckIcon } from "lucide-react"

import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const milestones = ["Ordered", "Packed", "Shipped", "Delivered"]

export default function OrderShipmentTracker() {
  const current = 2

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Order #48213</p>
          <p className="text-xs text-muted-foreground">
            Arriving Tuesday, Nov 18
          </p>
        </div>
        <TruckIcon className="size-5 text-muted-foreground" />
      </div>
      <Progress
        value={current}
        max={milestones.length - 1}
        aria-label="Shipment progress"
      />
      <div className="flex justify-between text-[11px]">
        {milestones.map((m, i) => (
          <span
            key={m}
            className={cn(
              i <= current ? "font-medium" : "text-muted-foreground"
            )}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}
