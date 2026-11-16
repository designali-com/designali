import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

const weeks = Array.from({ length: 12 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => (w * 7 + d * 3) % 9)
)
const shade = (n: number) =>
  n === 0
    ? "bg-muted"
    : n < 3
      ? "bg-primary/20 dark:bg-primary/10"
      : n < 6
        ? "bg-primary dark:bg-chart-3"
        : "bg-chart-2 dark:bg-primary"

export default function ContributionHeatmapTooltip() {
  return (
    <TooltipProvider>
      <div className="flex gap-1">
        {weeks.map((week, w) => (
          <div key={w} className="flex flex-col gap-1">
            {week.map((count, d) => (
              <Tooltip key={d}>
                <TooltipTrigger
                  render={
                    <button
                      type="button"
                      aria-label={count + " contributions"}
                      className={cn("size-3.5", shade(count))}
                    />
                  }
                />
                <TooltipContent>
                  {count === 0 ? "No contributions" : count + " contributions"}{" "}
                  · week {w + 1}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
