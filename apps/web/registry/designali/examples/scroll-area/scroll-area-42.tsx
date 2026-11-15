import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const kpis = [
  { label: "MRR", value: "$84.2k", delta: "+6.1%", up: true },
  { label: "Active users", value: "12,480", delta: "+3.4%", up: true },
  { label: "Churn", value: "2.1%", delta: "-0.4%", up: true },
  { label: "ARPU", value: "$41", delta: "-1.2%", up: false },
  { label: "Trials", value: "318", delta: "+12%", up: true },
  { label: "Tickets", value: "96", delta: "+8%", up: false },
]

export default function KpiCardsCarousel() {
  return (
    <ScrollArea className="w-full max-w-md">
      <div className="flex w-max gap-3 pb-3">
        {kpis.map((k) => (
          <div key={k.label} className="flex w-36 flex-col gap-1 border p-3">
            <span className="text-xs text-muted-foreground">{k.label}</span>
            <span className="text-xl font-semibold tabular-nums">
              {k.value}
            </span>
            <span
              className={cn(
                "flex items-center gap-1 text-xs",
                k.up
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
              )}
            >
              {k.up ? (
                <TrendingUpIcon className="size-3.5" />
              ) : (
                <TrendingDownIcon className="size-3.5" />
              )}
              {k.delta}
            </span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
