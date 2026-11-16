import {
  Check as CheckIcon,
  ChevronRight as ChevronRightIcon,
  Rocket as RocketIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const steps = ["Brief", "Design", "Development", "Launch"]
const current = 2

export default function ShippingProgressBadges() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Designali project #48213</CardTitle>
        <CardDescription>Website launch estimated Friday, Apr 11</CardDescription>
        <CardAction>
          <Badge className="bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1">
            <RocketIcon data-icon="inline-start" />
            On track
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
