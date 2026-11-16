import {
  Medal as MedalIcon,
  Minus as MinusIcon,
  TrendingDown as TrendingDownIcon,
  TrendingUp as TrendingUpIcon,
} from "@designali/icons"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const players = [
  { name: "Sara Khan", score: 9820, trend: 2 },
  { name: "Omar Ali", score: 9415, trend: -1 },
  { name: "Priya Shah", score: 9102, trend: 1 },
  { name: "Daniel Roy", score: 8760, trend: 0 },
  { name: "Zara Malik", score: 8544, trend: -2 },
]

export default function LeaderboardTable() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Rank</TableHead>
            <TableHead>Designer</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="w-12 text-right">Trend</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player, i) => (
            <TableRow key={player.name}>
              <TableCell>
                {i < 3 ? (
                  <MedalIcon
                    className={cn(
                      "size-4",
                      i === 0
                        ? "text-primary"
                        : i === 1
                          ? "text-muted-foreground"
                          : "text-chart-3"
                    )}
                  />
                ) : (
                  <span className="ps-1 text-muted-foreground">{i + 1}</span>
                )}
              </TableCell>
              <TableCell className="font-medium">{player.name}</TableCell>
              <TableCell className="text-right tabular-nums">
                {player.score.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                {player.trend > 0 ? (
                  <TrendingUpIcon className="ms-auto size-4 text-primary" />
                ) : player.trend < 0 ? (
                  <TrendingDownIcon className="ms-auto size-4 text-destructive" />
                ) : (
                  <MinusIcon className="ms-auto size-4 text-muted-foreground" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
