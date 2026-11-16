import {
  TrendingUp as TrendingUpIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function RevenueStatCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardDescription>Designali Pro recurring revenue</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums">
          $48,290
        </CardTitle>
        <CardAction>
          <Badge
            variant="outline"
            className="text-primary dark:text-primary"
          >
            <TrendingUpIcon data-icon="inline-start" />
            +12.4%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1">
        <span className="flex items-center gap-1 font-medium">
          Up $5,340 from last month <TrendingUpIcon className="size-3.5" />
        </span>
        <span className="text-muted-foreground">
          142 new Pro licenses, 9 churned
        </span>
      </CardFooter>
    </Card>
  )
}
