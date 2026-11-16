"use client"

import * as React from "react"
import {
  CalendarRange as CalendarRangeIcon,
  TrendingDown as TrendingDownIcon,
  TrendingUp as TrendingUpIcon,
} from "@designali/icons"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

const data: Record<string, { visitors: string; change: number }> = {
  "7d": { visitors: "12,480", change: 4.2 },
  "30d": { visitors: "51,930", change: -1.8 },
  "90d": { visitors: "148,212", change: 12.6 },
}

export default function AnalyticsRangeMenubar() {
  const [range, setRange] = React.useState("30d")
  const [compare, setCompare] = React.useState(true)
  const current = data[range]!

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <CalendarRangeIcon className="me-1.5 size-3.5" /> Range
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={range} onValueChange={setRange}>
              <MenubarRadioItem value="7d">Last 7 days</MenubarRadioItem>
              <MenubarRadioItem value="30d">Last 30 days</MenubarRadioItem>
              <MenubarRadioItem value="90d">Last 90 days</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarCheckboxItem
                checked={compare}
                onCheckedChange={setCompare}
              >
                Compare to previous period
              </MenubarCheckboxItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Export</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>Download CSV</MenubarItem>
              <MenubarItem>Email report</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="border p-3">
        <p className="text-xs text-muted-foreground">designali.com unique visitors</p>
        <p className="text-2xl font-semibold tabular-nums">
          {current.visitors}
        </p>
        {compare && (
          <p
            className={cn(
              "flex items-center gap-1 text-xs",
              current.change >= 0
                ? "text-primary dark:text-primary"
                : "text-destructive dark:text-destructive"
            )}
          >
            {current.change >= 0 ? (
              <TrendingUpIcon className="size-3.5" />
            ) : (
              <TrendingDownIcon className="size-3.5" />
            )}
            {Math.abs(current.change)}% vs previous period
          </p>
        )}
      </div>
    </div>
  )
}
