import {
  Info as InfoIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const services = [
  { name: "designali.com", uptime: "99.98%", incidents: [12] },
  { name: "Icons CDN", uptime: "100%", incidents: [] as number[] },
  { name: "Template downloads", uptime: "99.71%", incidents: [4, 5, 22] },
]

export default function ServiceStatusCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Designali status</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
        <CardAction>
          <Badge variant="secondary" className="gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            Operational
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-4">
        {services.map((s) => (
          <div key={s.name} className="grid gap-1.5">
            <div className="flex justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground tabular-nums">
                {s.uptime}
              </span>
            </div>
            <div className="flex gap-px">
              {Array.from({ length: 30 }).map((_, i) => (
                <span
                  key={i}
                  title={s.incidents.includes(i) ? "Degraded" : "Operational"}
                  className={cn(
                    "h-6 flex-1",
                    s.incidents.includes(i)
                      ? "bg-amber-500"
                      : "bg-emerald-500/70"
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="gap-2 text-muted-foreground">
        <InfoIcon className="size-3.5 shrink-0" />
        Download delays on Nov 4-5 were resolved within 40 minutes.
      </CardFooter>
    </Card>
  )
}
