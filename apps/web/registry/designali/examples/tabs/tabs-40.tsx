import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

const boards = {
  week: [
    ["Sara Khan", 1840],
    ["Omar Ali", 1710],
    ["Zara Noor", 1505],
  ],
  month: [
    ["Omar Ali", 7420],
    ["Ali Imam", 6990],
    ["Sara Khan", 6610],
  ],
  all: [
    ["Ali Imam", 88210],
    ["Zara Noor", 80150],
    ["Omar Ali", 79020],
  ],
} as const

export default function LeaderboardPeriodTabs() {
  return (
    <Tabs defaultValue="week" className="w-full max-w-xs">
      <TabsList className="w-full">
        <TabsTrigger value="week">Week</TabsTrigger>
        <TabsTrigger value="month">Month</TabsTrigger>
        <TabsTrigger value="all">All time</TabsTrigger>
      </TabsList>
      {Object.entries(boards).map(([key, rows]) => (
        <TabsContent key={key} value={key} className="flex flex-col gap-1">
          {rows.map(([name, xp], i) => (
            <div
              key={name}
              className="flex items-center gap-3 border px-3 py-2"
            >
              <span
                className={cn(
                  "w-4 font-semibold tabular-nums",
                  i === 0 && "text-amber-500"
                )}
              >
                {i + 1}
              </span>
              <span className="flex-1">{name}</span>
              <span className="text-muted-foreground tabular-nums">
                {xp.toLocaleString()} XP
              </span>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
