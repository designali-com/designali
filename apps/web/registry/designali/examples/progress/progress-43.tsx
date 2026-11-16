"use client"

import {
  Zap as ZapIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

const usage = [
  { label: "Projects", value: 8, max: 10 },
  { label: "Members", value: 3, max: 5 },
]

export default function SidebarPlanUsage() {
  return (
    <div className="flex w-full max-w-60 flex-col gap-3 border bg-muted/30 p-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium">Starter plan</span>
        <Badge variant="outline">Free</Badge>
      </div>
      {usage.map((item) => (
        <Progress
          key={item.label}
          value={item.value}
          max={item.max}
          className="gap-1.5"
        >
          <ProgressLabel className="text-muted-foreground">
            {item.label}
          </ProgressLabel>
          <ProgressValue>{(_, value) => value + "/" + item.max}</ProgressValue>
        </Progress>
      ))}
      <Button size="xs" variant="outline" className="w-full">
        <ZapIcon data-icon="inline-start" />
        Upgrade
      </Button>
    </div>
  )
}
