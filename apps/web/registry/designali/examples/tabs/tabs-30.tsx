import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const metrics = {
  revenue: {
    label: "Revenue",
    total: "$48.2k",
    bars: [40, 55, 48, 70, 62, 80, 74],
  },
  orders: {
    label: "Orders",
    total: "1,204",
    bars: [60, 50, 65, 58, 72, 68, 90],
  },
  refunds: { label: "Refunds", total: "23", bars: [10, 20, 8, 15, 12, 6, 9] },
}

export default function ChartMetricTabs() {
  return (
    <Tabs defaultValue="revenue" className="w-full max-w-md gap-0 border">
      <TabsList className="h-auto w-full p-0">
        {Object.entries(metrics).map(([key, m]) => (
          <TabsTrigger
            key={key}
            value={key}
            className="h-auto flex-col items-start gap-0 border-e px-3 py-2 last:border-e-0"
          >
            <span className="text-muted-foreground">{m.label}</span>
            <span className="text-base font-semibold tabular-nums">
              {m.total}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(metrics).map(([key, m]) => (
        <TabsContent
          key={key}
          value={key}
          className="flex h-32 items-end gap-2 p-3"
        >
          {m.bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-primary/80"
              style={{ height: h + "%" }}
            />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
