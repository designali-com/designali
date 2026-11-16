import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Spinner } from "@workspace/ui/components/spinner"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

export default function CardLoadingOverlay() {
  return (
    <Card className="relative w-full max-w-sm">
      <CardHeader>
        <CardTitle>Template sales</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <CounterNumber
          value={48210}
          prefix="$"
          size="lg"
          className="font-semibold tracking-normal"
        />
        <span className="text-xs text-muted-foreground">
          +12.4% from previous period
        </span>
      </CardContent>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background/70 backdrop-blur-[1px]">
        <Spinner className="size-6" />
        <span className="text-xs text-muted-foreground">Refreshing data</span>
      </div>
    </Card>
  )
}
