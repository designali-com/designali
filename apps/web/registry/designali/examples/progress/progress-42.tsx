import { PackageIcon } from "lucide-react"

import { Progress } from "@workspace/ui/components/progress"

export default function FreeShippingThreshold() {
  const subtotal = 63
  const threshold = 75
  const remaining = threshold - subtotal

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <p className="flex items-center gap-2 text-sm">
        <PackageIcon className="size-4 text-muted-foreground" />
        <span>
          You&apos;re{" "}
          <span className="font-semibold">{"$" + remaining.toFixed(2)}</span>{" "}
          away from free shipping
        </span>
      </p>
      <Progress
        value={subtotal}
        max={threshold}
        aria-label="Progress to free shipping"
        className="[&_[data-slot=progress-track]]:h-1.5"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Subtotal {"$" + subtotal.toFixed(2)}</span>
        <span>{"$" + threshold} goal</span>
      </div>
    </div>
  )
}
