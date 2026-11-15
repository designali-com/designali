import { TrendingUpIcon } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const points = [32, 30, 34, 33, 38, 36, 41, 40, 44, 47]

export default function StockTickerHoverCard() {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const path = points
    .map(
      (p, i) =>
        (i === 0 ? "M" : "L") +
        (i * 100) / (points.length - 1) +
        " " +
        (40 - ((p - min) / (max - min)) * 36 - 2)
    )
    .join(" ")

  return (
    <p className="max-w-sm text-sm text-muted-foreground">
      Shares of{" "}
      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="font-mono font-medium text-foreground hover:underline"
        >
          $NOVA
        </HoverCardTrigger>
        <HoverCardContent className="w-60">
          <div className="flex items-baseline justify-between">
            <span className="font-medium">Novagrid Energy</span>
            <span className="font-mono text-muted-foreground">NOVA</span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-lg font-semibold">$47.12</span>
            <span className="flex items-center text-emerald-600 dark:text-emerald-400">
              <TrendingUpIcon className="mr-1 size-3.5" />
              +3.8%
            </span>
          </div>
          <svg
            viewBox="0 0 100 40"
            className="mt-2 h-12 w-full text-emerald-500"
            preserveAspectRatio="none"
          >
            <path
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <p className="text-muted-foreground">Market open · Vol 2.4M</p>
        </HoverCardContent>
      </HoverCard>{" "}
      rallied after the quarterly report.
    </p>
  )
}
