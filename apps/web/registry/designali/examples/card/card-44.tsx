"use client"

import * as React from "react"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

const data = {
  visitors: { total: "24.8k", bars: [30, 45, 38, 60, 52, 70, 64] },
  signups: { total: "1,284", bars: [20, 28, 35, 30, 42, 55, 48] },
  revenue: { total: "$18.4k", bars: [40, 35, 50, 48, 62, 58, 75] },
}
const days = ["M", "T", "W", "T", "F", "S", "S"]

export default function TabbedAnalyticsCard() {
  const [metric, setMetric] = React.useState<keyof typeof data>("visitors")
  const current = data[metric]

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardDescription>This week</CardDescription>
        <CardTitle className="text-xl font-semibold tabular-nums">
          {current.total}
        </CardTitle>
        <CardAction>
          <Tabs
            value={metric}
            onValueChange={(v) => setMetric(v as keyof typeof data)}
          >
            <TabsList>
              <TabsTrigger value="visitors">Visitors</TabsTrigger>
              <TabsTrigger value="signups">Signups</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-end gap-2">
          {current.bars.map((h, i) => (
            <div
              key={i}
              className="flex h-full flex-1 flex-col justify-end gap-1 text-center"
            >
              <div
                className="bg-primary/80 transition-all duration-300"
                style={{ height: h + "%" }}
              />
              <span className="text-[10px] text-muted-foreground">
                {days[i]}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
