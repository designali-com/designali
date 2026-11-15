import { Skeleton } from "@workspace/ui/components/skeleton"
import { cn } from "@workspace/ui/lib/utils"

export default function FileGridSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-1.5">
        <Skeleton className="h-3 w-12" />
        <span className="text-muted-foreground">/</span>
        <Skeleton className="h-3 w-20" />
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2 border p-3">
            <Skeleton className={cn(i < 3 ? "h-8 w-10" : "h-10 w-8")} />
            <Skeleton className="h-2.5 w-14" />
            <Skeleton className="h-2 w-8" />
          </div>
        ))}
      </div>
    </div>
  )
}
