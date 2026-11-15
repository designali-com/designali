import {
  MedalIcon,
  MinusIcon,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react"

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
  { name: "Kira Volkov", score: 9820, trend: 2 },
  { name: "Mateo Silva", score: 9415, trend: -1 },
  { name: "Aisha Bello", score: 9102, trend: 1 },
  { name: "Lucas Moreau", score: 8760, trend: 0 },
  { name: "Yuna Choi", score: 8544, trend: -2 },
]

export default function LeaderboardTable() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Rank</TableHead>
            <TableHead>Player</TableHead>
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
                        ? "text-amber-500"
                        : i === 1
                          ? "text-zinc-400"
                          : "text-orange-700"
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
                  <TrendingUpIcon className="ms-auto size-4 text-emerald-600" />
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
