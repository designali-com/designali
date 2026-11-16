import { Badge } from "@workspace/ui/components/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const plans = [
  { name: "Designali Pro", monthly: 9, yearly: 90 },
  { name: "Designali Team", monthly: 29, yearly: 290 },
]

export default function BillingCycleTabs() {
  return (
    <Tabs defaultValue="monthly" className="w-full max-w-sm items-center">
      <TabsList>
        <TabsTrigger value="monthly">Monthly</TabsTrigger>
        <TabsTrigger value="yearly">
          Yearly
          <Badge variant="secondary">-17%</Badge>
        </TabsTrigger>
      </TabsList>
      {(["monthly", "yearly"] as const).map((cycle) => (
        <TabsContent
          key={cycle}
          value={cycle}
          className="grid w-full grid-cols-2 gap-3"
        >
          {plans.map((plan) => (
            <div key={plan.name} className="border p-4">
              <p className="font-medium">{plan.name}</p>
              <p className="mt-2 text-2xl font-semibold tabular-nums">
                ${plan[cycle]}
              </p>
              <p className="text-muted-foreground">
                per {cycle === "monthly" ? "month" : "year"}
              </p>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
