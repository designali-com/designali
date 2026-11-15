import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import { cn } from "@workspace/ui/lib/utils"

const boards = {
  week: [
    ["Mateo Silva", 1840],
    ["Hana Mori", 1710],
    ["Aziz Karimi", 1505],
  ],
  month: [
    ["Hana Mori", 7420],
    ["Grace Liu", 6990],
    ["Mateo Silva", 6610],
  ],
  all: [
    ["Grace Liu", 88210],
    ["Aziz Karimi", 80150],
    ["Hana Mori", 79020],
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
