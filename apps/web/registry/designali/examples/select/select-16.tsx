"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const ranges = [
  { label: "Last 24 hours", value: "24h", visitors: "1,284", change: "+4.1%" },
  { label: "Last 7 days", value: "7d", visitors: "9,870", change: "+12.6%" },
  { label: "Last 30 days", value: "30d", visitors: "41,302", change: "-2.3%" },
  {
    label: "Last 12 months",
    value: "12m",
    visitors: "502,118",
    change: "+38.0%",
  },
]

export default function AnalyticsRangeSelect() {
  const [range, setRange] = React.useState<string | null>("7d")
  const current = ranges.find((item) => item.value === range) ?? ranges[1]!

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardDescription>Unique visitors</CardDescription>
        <CardTitle className="text-2xl tabular-nums">
          {current.visitors}
        </CardTitle>
        <CardAction>
          <Select items={ranges} value={range} onValueChange={setRange}>
            <SelectTrigger size="sm" aria-label="Date range">
              <CalendarIcon className="text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end" alignItemWithTrigger={false}>
              {ranges.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Badge
          variant={current.change.startsWith("-") ? "destructive" : "secondary"}
        >
          {current.change} vs previous period
        </Badge>
      </CardContent>
    </Card>
  )
}
