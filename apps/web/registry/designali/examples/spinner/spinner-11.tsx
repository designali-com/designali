import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Spinner } from "@workspace/ui/components/spinner"

export default function CardLoadingOverlay() {
  return (
    <Card className="relative w-full max-w-sm">
      <CardHeader>
        <CardTitle>Template sales</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        <span className="text-3xl font-semibold tabular-nums">$48,210</span>
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
