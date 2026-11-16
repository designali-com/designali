import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const meters = [
  { label: "Template downloads", used: 812, limit: 1000, unit: "" },
  { label: "Asset storage", used: 42, limit: 50, unit: " GB" },
  { label: "Icon exports", used: 1350, limit: 3000, unit: "" },
]

export default function UsageBillingCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Designali Pro usage</CardTitle>
        <CardDescription>Billing period resets in 9 days.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            View invoices
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-4">
        {meters.map((m) => {
          const pct = Math.round((m.used / m.limit) * 100)
          return (
            <div key={m.label} className="grid gap-1.5">
              <div className="flex justify-between text-xs">
                <span>{m.label}</span>
                <span
                  className={cn(
                    "text-muted-foreground tabular-nums",
                    pct >= 80 && "text-amber-600 dark:text-amber-400"
                  )}
                >
                  {m.used.toLocaleString()}
                  {m.unit} / {m.limit.toLocaleString()}
                  {m.unit}
                </span>
              </div>
              <Progress value={pct} aria-label={m.label} />
            </div>
          )
        })}
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground">Projected invoice</span>
        <span className="text-sm font-semibold tabular-nums">$186.40</span>
      </CardFooter>
    </Card>
  )
}
