"use client"

import * as React from "react"
import {
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const widths: Record<string, string> = {
  desktop: "w-full",
  tablet: "w-2/3",
  mobile: "w-1/3",
}

export default function ResponsivePreviewToggleGroup() {
  const [device, setDevice] = React.useState("desktop")

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={[device]}
        onValueChange={(next) => next[0] && setDevice(next[0])}
      >
        <ToggleGroupItem value="desktop" aria-label="Desktop">
          <MonitorIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="tablet" aria-label="Tablet">
          <TabletIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="mobile" aria-label="Mobile">
          <SmartphoneIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="flex h-36 w-full justify-center bg-muted/40 p-2">
        <div
          className={cn(
            "flex flex-col gap-1.5 border bg-background p-2 transition-all",
            widths[device]
          )}
        >
          <div className="h-2 w-1/2 bg-muted" />
          <div className="h-12 bg-gradient-to-br from-primary/20 to-primary/20 dark:from-chart-5 dark:to-chart-5" />
          <div className="h-2 bg-muted" />
          <div className="h-2 w-3/4 bg-muted" />
        </div>
      </div>
    </div>
  )
}
