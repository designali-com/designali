import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const assets = [
  {
    symbol: "ICN",
    name: "Icons",
    price: 1.284,
    change: 4.2,
    points: [4, 5, 4, 6, 7, 6, 8],
  },
  {
    symbol: "LGO",
    name: "Logos",
    price: 0.0912,
    change: -2.8,
    points: [8, 7, 7, 6, 5, 6, 4],
  },
  {
    symbol: "BLK",
    name: "Blocks",
    price: 42.17,
    change: 0.6,
    points: [5, 5, 6, 5, 6, 6, 6],
  },
]

function Sparkline({ points, up }: { points: number[]; up: boolean }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const d = points
    .map(
      (p, i) =>
        (i === 0 ? "M" : "L") +
        (i * 60) / (points.length - 1) +
        " " +
        (20 - ((p - min) / (max - min || 1)) * 18 - 1)
    )
    .join(" ")
  return (
    <svg
      viewBox="0 0 60 20"
      className={cn("h-5 w-16", up ? "text-emerald-500" : "text-destructive")}
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function CryptoWatchlistTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">24h</TableHead>
            <TableHead className="text-right">7d</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((a) => (
            <TableRow key={a.symbol}>
              <TableCell>
                <span className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-primary/30 text-[9px] font-bold text-primary-foreground">
                    {a.symbol[0]}
                  </span>
                  <span>
                    <span className="font-medium">{a.symbol}</span>{" "}
                    <span className="text-muted-foreground">{a.name}</span>
                  </span>
                </span>
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {"$" + a.price}
              </TableCell>
              <TableCell
                className={cn(
                  "text-right tabular-nums",
                  a.change >= 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-destructive"
                )}
              >
                {(a.change >= 0 ? "+" : "") + a.change + "%"}
              </TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <Sparkline points={a.points} up={a.change >= 0} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
