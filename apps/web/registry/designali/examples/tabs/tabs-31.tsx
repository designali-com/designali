import { Badge } from "@workspace/ui/components/badge"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const orders = {
  pending: [
    { id: "#4821", customer: "Brand identity client", total: "$82.00" },
    { id: "#4822", customer: "Template buyer", total: "$19.50" },
  ],
  shipped: [{ id: "#4810", customer: "Web design client", total: "$240.00" }],
  issues: [{ id: "#4799", customer: "Icons Pro buyer", total: "$56.10" }],
}

export default function OrderStatusTabs() {
  return (
    <Tabs defaultValue="pending" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="pending">
          Pending <Badge variant="secondary">{orders.pending.length}</Badge>
        </TabsTrigger>
        <TabsTrigger value="shipped">Shipped</TabsTrigger>
        <TabsTrigger value="issues">
          Issues <Badge variant="destructive">{orders.issues.length}</Badge>
        </TabsTrigger>
      </TabsList>
      {Object.entries(orders).map(([key, list]) => (
        <TabsContent key={key} value={key} className="divide-y border">
          {list.map((o) => (
            <div
              key={o.id}
              className="flex items-center justify-between px-3 py-2"
            >
              <span>
                <span className="font-sans">{o.id}</span> · {o.customer}
              </span>
              <span className="font-medium tabular-nums">{o.total}</span>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
