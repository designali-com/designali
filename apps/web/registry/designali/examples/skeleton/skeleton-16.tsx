import { Skeleton } from "@workspace/ui/components/skeleton"
import { cn } from "@workspace/ui/lib/utils"

export default function PricingCardsSkeleton() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            "flex flex-col gap-4 border p-4",
            i === 1 && "border-primary/40"
          )}
        >
          <Skeleton className="h-4 w-16" />
          <div className="flex items-end gap-1">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-3 w-8" />
          </div>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="flex items-center gap-2">
                <Skeleton className="size-3 rounded-full" />
                <Skeleton className="h-3 flex-1" />
              </div>
            ))}
          </div>
          <Skeleton className={cn("h-8 w-full", i === 1 && "bg-primary/20")} />
        </div>
      ))}
    </div>
  )
}
