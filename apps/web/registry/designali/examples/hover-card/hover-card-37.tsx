import {
  Star as StarIcon,
} from "@designali/icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const distribution = [
  { stars: 5, count: 812 },
  { stars: 4, count: 241 },
  { stars: 3, count: 64 },
  { stars: 2, count: 18 },
  { stars: 1, count: 22 },
]

export default function RatingDistributionHoverCard() {
  const total = distribution.reduce((sum, d) => sum + d.count, 0)

  return (
    <HoverCard>
      <HoverCardTrigger href="#" className="flex items-center gap-1.5 text-sm">
        <span className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon
              key={i}
              className={cn(
                "size-4",
                i < 4
                  ? "fill-primary text-primary"
                  : "text-muted-foreground"
              )}
            />
          ))}
        </span>
        <span className="font-medium">4.6</span>
        <span className="text-muted-foreground underline underline-offset-4">
          ({total.toLocaleString()} reviews)
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-60 flex-col gap-1.5">
        {distribution.map((d) => (
          <div key={d.stars} className="flex items-center gap-2">
            <span className="w-3">{d.stars}</span>
            <StarIcon className="size-3 fill-primary text-primary" />
            <div className="h-1.5 flex-1 bg-muted">
              <div
                className="h-full bg-primary"
                style={{ width: (d.count / total) * 100 + "%" }}
              />
            </div>
            <span className="w-8 text-right text-muted-foreground">
              {Math.round((d.count / total) * 100)}%
            </span>
          </div>
        ))}
      </HoverCardContent>
    </HoverCard>
  )
}
