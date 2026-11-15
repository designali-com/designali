import {
  ChevronRightIcon,
  ExternalLinkIcon,
  TrendingUpIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { cn } from "@workspace/ui/lib/utils"

const channels = [
  { name: "Organic search", value: 18420, color: "bg-chart-1" },
  { name: "Direct", value: 9310, color: "bg-chart-2" },
  { name: "Referral", value: 5120, color: "bg-chart-3" },
  { name: "Social", value: 3870, color: "bg-chart-4" },
  { name: "Email", value: 2240, color: "bg-chart-5" },
]

export default function MetricBreakdownDrawer() {
  const total = channels.reduce((sum, channel) => sum + channel.value, 0)
  const max = Math.max(...channels.map((channel) => channel.value))

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-60 flex-col gap-1 border bg-background p-4 text-start hover:bg-muted/50"
      >
        <span className="flex items-center justify-between text-muted-foreground">
          Visitors · 30 days
          <ChevronRightIcon className="size-4" />
        </span>
        <span className="font-heading text-2xl font-semibold tabular-nums">
          {total.toLocaleString("en-US")}
        </span>
        <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
          <TrendingUpIcon className="size-3.5" />
          +12.4% vs last period
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Visitors by channel</DrawerTitle>
          <DrawerDescription>Oct 16 – Nov 15, 2026</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          {channels.map((channel) => (
            <div key={channel.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <span>{channel.name}</span>
                <span className="tabular-nums">
                  {channel.value.toLocaleString("en-US")}{" "}
                  <span className="text-muted-foreground">
                    {Math.round((channel.value / total) * 100)}%
                  </span>
                </span>
              </div>
              <div className="h-2 bg-muted">
                <div
                  className={cn("h-full", channel.color)}
                  style={{ width: (channel.value / max) * 100 + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
        <DrawerFooter className="border-t pt-4">
          <Button variant="outline">
            <ExternalLinkIcon data-icon="inline-start" />
            Open full report
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
