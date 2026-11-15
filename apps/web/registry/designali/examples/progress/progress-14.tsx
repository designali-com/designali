import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const segments = [
  { label: "Shipping", value: 100 },
  { label: "Payment", value: 100 },
  { label: "Review", value: 40 },
  { label: "Confirm", value: 0 },
]

export default function SegmentedStepBars() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="grid grid-cols-4 gap-1.5">
        {segments.map((segment) => (
          <Progress
            key={segment.label}
            value={segment.value}
            aria-label={segment.label}
            className="gap-1.5"
          >
            <span
              className={cn(
                "text-[11px]",
                segment.value > 0 ? "font-medium" : "text-muted-foreground"
              )}
            >
              {segment.label}
            </span>
          </Progress>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Check your order details before confirming.
      </p>
    </div>
  )
}
