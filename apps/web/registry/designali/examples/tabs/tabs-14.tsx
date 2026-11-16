import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

const ranges = {
  "24h": { visitors: "1,284", revenue: "$3,920", change: "+4.1%" },
  "7d": { visitors: "9,610", revenue: "$27,450", change: "+12.6%" },
  "30d": { visitors: "41,022", revenue: "$118,300", change: "-2.3%" },
}

export default function DashboardRangeTabs() {
  return (
    <Card className="w-full max-w-sm">
      <Tabs defaultValue="7d">
        <CardHeader>
          <CardTitle>Designali store performance</CardTitle>
          <CardAction>
            <TabsList>
              {Object.keys(ranges).map((r) => (
                <TabsTrigger key={r} value={r}>
                  {r}
                </TabsTrigger>
              ))}
            </TabsList>
          </CardAction>
        </CardHeader>
        <CardContent>
          {Object.entries(ranges).map(([key, data]) => (
            <TabsContent
              key={key}
              value={key}
              className="grid grid-cols-2 gap-3"
            >
              <div>
                <p className="text-muted-foreground">Visitors</p>
                <p className="text-xl font-semibold tabular-nums">
                  {data.visitors}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Revenue</p>
                <p className="text-xl font-semibold tabular-nums">
                  {data.revenue}
                </p>
                <p
                  className={cn(
                    data.change.startsWith("-")
                      ? "text-destructive"
                      : "text-emerald-600"
                  )}
                >
                  {data.change}
                </p>
              </div>
            </TabsContent>
          ))}
        </CardContent>
      </Tabs>
    </Card>
  )
}
