import {
  Star as StarIcon,
} from "@designali/icons"

import { Progress } from "@workspace/ui/components/progress"

const ratings = [
  { stars: 5, count: 1240 },
  { stars: 4, count: 410 },
  { stars: 3, count: 122 },
  { stars: 2, count: 41 },
  { stars: 1, count: 37 },
]

export default function ReviewRatingBreakdown() {
  const total = ratings.reduce((sum, r) => sum + r.count, 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold">4.5</span>
        <span className="text-sm text-muted-foreground">
          {total.toLocaleString("en-US")} reviews
        </span>
      </div>
      {ratings.map((r) => (
        <div key={r.stars} className="flex items-center gap-3 text-xs">
          <span className="flex w-8 items-center gap-0.5">
            {r.stars}
            <StarIcon className="size-3 fill-current" />
          </span>
          <Progress
            value={r.count}
            max={total}
            aria-label={r.stars + " star reviews"}
            className="flex-1 [&_[data-slot=progress-track]]:h-2"
          />
          <span className="w-10 text-end text-muted-foreground tabular-nums">
            {r.count}
          </span>
        </div>
      ))}
    </div>
  )
}
