import {
  Trophy as TrophyIcon,
} from "@designali/icons"

import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const players = [
  "Nova",
  "Kestrel",
  "Juniper",
  "Atlas",
  "Wren",
  "Orion",
  "Sable",
  "Indigo",
  "Marlow",
  "Quill",
  "Rhea",
  "Tobin",
].map((name, i) => ({ name, points: 9800 - i * 430 - (i % 3) * 55 }))

export default function LeaderboardRanking() {
  return (
    <div className="w-full max-w-xs border">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-sm font-medium">
        <TrophyIcon className="size-4 text-primary" />
        Weekly leaderboard
      </div>
      <ScrollArea className="h-60">
        {players.map((p, i) => (
          <div
            key={p.name}
            className="flex items-center gap-3 px-3 py-2 text-xs"
          >
            <span
              className={cn(
                "flex size-6 items-center justify-center font-semibold tabular-nums",
                i === 0 && "bg-primary text-chart-5",
                i === 1 && "bg-border text-foreground",
                i === 2 && "bg-chart-1 text-chart-5",
                i > 2 && "text-muted-foreground"
              )}
            >
              {i + 1}
            </span>
            <span className="flex-1 font-medium">{p.name}</span>
            <span className="tabular-nums">
              {p.points.toLocaleString("en-US")}
            </span>
          </div>
        ))}
      </ScrollArea>
      <div className="flex items-center gap-3 border-t bg-muted/50 px-3 py-2 text-xs">
        <span className="flex size-6 items-center justify-center font-semibold">
          27
        </span>
        <span className="flex-1 font-medium">You</span>
        <span className="tabular-nums">3,120</span>
      </div>
    </div>
  )
}
