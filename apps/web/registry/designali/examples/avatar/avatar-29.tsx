import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const leaders = [
  { name: "Templates", initials: "TP", amount: "$84,200" },
  { name: "Blocks", initials: "BL", amount: "$71,950" },
  { name: "UI Designs", initials: "UI", amount: "$66,300" },
  { name: "Icons", initials: "IC", amount: "$52,780" },
  { name: "Logos", initials: "LG", amount: "$48,010" },
]

const medals = ["ring-primary", "ring-border", "ring-chart-3"]

export default function SalesLeaderboard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Top Designali products this quarter</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {leaders.map((leader, index) => (
          <div key={leader.name} className="flex items-center gap-3">
            <span className="w-4 text-xs text-muted-foreground tabular-nums">
              {index + 1}
            </span>
            <Avatar
              className={cn(
                index < 3 && "ring-2 ring-offset-2 ring-offset-card",
                medals[index]
              )}
            >
              <AvatarFallback>{leader.initials}</AvatarFallback>
            </Avatar>
            <span className="flex-1 truncate text-sm">{leader.name}</span>
            <span className="text-sm font-medium tabular-nums">
              {leader.amount}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
