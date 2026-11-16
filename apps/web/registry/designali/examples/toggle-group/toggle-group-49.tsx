"use client"

import * as React from "react"
import {
  Activity as ActivityIcon,
  Undo as UndoIcon,
  Users as UsersIcon,
} from "@designali/icons"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const metrics: Record<string, { value: string; label: string }> = {
  visitors: { value: "48.2k", label: "designali.com visitors this week" },
  sessions: { value: "71.9k", label: "Sessions this week" },
  bounce: { value: "38%", label: "Average bounce rate" },
}

export default function CardToolbarToggleGroup() {
  const [metric, setMetric] = React.useState("visitors")

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Traffic</CardTitle>
        <CardDescription>{metrics[metric]!.label}</CardDescription>
        <CardAction>
          <ToggleGroup
            size="sm"
            value={[metric]}
            onValueChange={(next) => next[0] && setMetric(next[0])}
          >
            <ToggleGroupItem value="visitors" aria-label="Visitors">
              <UsersIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="sessions" aria-label="Sessions">
              <ActivityIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="bounce" aria-label="Bounce rate">
              <UndoIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardAction>
      </CardHeader>
      <CardContent>
        <span className="text-3xl font-semibold">{metrics[metric]!.value}</span>
      </CardContent>
    </Card>
  )
}
