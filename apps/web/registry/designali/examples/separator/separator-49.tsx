import { StarIcon } from "lucide-react"

import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const distribution = [
  { stars: 5, share: 68 },
  { stars: 4, share: 21 },
  { stars: 3, share: 7 },
  { stars: 2, share: 3 },
  { stars: 1, share: 1 },
]

export default function RatingBreakdownSplit() {
  return (
    <div className="flex w-full max-w-sm border p-4">
      <div className="flex w-24 shrink-0 flex-col items-center justify-center gap-1">
        <span className="text-3xl font-semibold">4.6</span>
        <div className="flex">
          {[0, 1, 2, 3, 4].map((index) => (
            <StarIcon
              key={index}
              className={cn(
                "size-3",
                index < 4
                  ? "fill-amber-400 text-amber-400"
                  : "text-muted-foreground"
              )}
            />
          ))}
        </div>
        <span className="text-[11px] text-muted-foreground">2,318 reviews</span>
      </div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="flex flex-1 flex-col gap-1.5">
        {distribution.map((row) => (
          <div key={row.stars} className="flex items-center gap-2 text-xs">
            <span className="w-2 text-muted-foreground">{row.stars}</span>
            <div className="h-1.5 flex-1 bg-muted">
              <div
                className="h-full bg-amber-400"
                style={{ width: row.share + "%" }}
              />
            </div>
            <span className="w-7 text-end text-muted-foreground tabular-nums">
              {row.share}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
