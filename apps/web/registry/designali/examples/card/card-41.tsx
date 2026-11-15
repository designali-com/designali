import { CheckIcon, PackageIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { label: "Order placed", detail: "Nov 14, 09:12", done: true },
  { label: "Packed", detail: "Nov 14, 16:40", done: true },
  {
    label: "In transit",
    detail: "Arrived at Rotterdam hub",
    done: true,
    current: true,
  },
  { label: "Out for delivery", detail: "Expected Nov 18" },
  { label: "Delivered", detail: "" },
]

export default function ShipmentTrackingCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PackageIcon className="size-4 text-muted-foreground" />
          Order #10482
        </CardTitle>
        <CardDescription>Tracking NL 4482 9910 22</CardDescription>
        <CardAction>
          <Badge variant="secondary">In transit</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ol className="grid">
          {steps.map((s, i) => (
            <li key={s.label} className="relative flex gap-3 pb-4 last:pb-0">
              {i < steps.length - 1 ? (
                <span
                  className={cn(
                    "absolute start-[7px] top-4 h-full w-px",
                    s.done && !s.current ? "bg-primary" : "bg-border"
                  )}
                />
              ) : null}
              <span
                className={cn(
                  "z-10 mt-0.5 flex size-[15px] shrink-0 items-center justify-center rounded-full border",
                  s.done
                    ? "border-primary bg-primary text-primary-foreground"
                    : "bg-card",
                  s.current && "ring-4 ring-primary/20"
                )}
              >
                {s.done ? <CheckIcon className="size-2.5" /> : null}
              </span>
              <div className="grid">
                <span
                  className={cn(
                    "font-medium",
                    !s.done && "text-muted-foreground"
                  )}
                >
                  {s.label}
                </span>
                {s.detail ? (
                  <span className="text-muted-foreground">{s.detail}</span>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
