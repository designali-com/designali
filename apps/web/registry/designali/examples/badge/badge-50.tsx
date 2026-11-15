import { CheckIcon, ChevronRightIcon, TruckIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const steps = ["Ordered", "Packed", "In transit", "Delivered"]
const current = 2

export default function ShippingProgressBadges() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Order #48213</CardTitle>
        <CardDescription>Estimated delivery Friday, Apr 11</CardDescription>
        <CardAction>
          <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <TruckIcon data-icon="inline-start" />
            On the way
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-1">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-1">
            <Badge
              variant={
                index < current
                  ? "secondary"
                  : index === current
                    ? "default"
                    : "outline"
              }
            >
              {index < current && <CheckIcon data-icon="inline-start" />}
              {step}
            </Badge>
            {index < steps.length - 1 && (
              <ChevronRightIcon className="size-3 text-muted-foreground" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
