import {
  Receipt as ReceiptIcon,
  Target as TargetIcon,
  Timer as TimerIcon,
  Users as UsersIcon,
} from "@designali/icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const stats = [
  {
    label: "designali.com visitors",
    value: "12,480",
    delta: "+8.1%",
    up: true,
    icon: UsersIcon,
  },
  {
    label: "Pro conversion",
    value: "3.42%",
    delta: "+0.4%",
    up: true,
    icon: TargetIcon,
  },
  {
    label: "Avg. time on /blocks",
    value: "4m 12s",
    delta: "-6.0%",
    up: false,
    icon: TimerIcon,
  },
  {
    label: "Template refunds",
    value: "$1,204",
    delta: "-2.3%",
    up: true,
    icon: ReceiptIcon,
  },
]

export default function KpiStatGrid() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3">
      {stats.map((s) => (
        <Card key={s.label} size="sm">
          <CardHeader>
            <CardDescription className="flex items-center gap-1.5">
              <s.icon className="size-3.5" />
              {s.label}
            </CardDescription>
            <CardTitle className="text-lg font-semibold tabular-nums">
              {s.value}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span
              className={cn(
                "text-xs font-medium",
                s.up
                  ? "text-primary dark:text-primary"
                  : "text-primary dark:text-primary"
              )}
            >
              {s.delta}
            </span>
            <span className="text-xs text-muted-foreground"> vs last week</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
