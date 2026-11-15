import { Skeleton } from "@workspace/ui/components/skeleton"

export default function PlaylistSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-end gap-4">
        <Skeleton className="size-24 shrink-0" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-2.5 w-14" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 py-2">
            <span className="w-4 text-center text-xs text-muted-foreground tabular-nums">
              {i + 1}
            </span>
            <Skeleton className="size-9" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-2.5 w-24" />
            </div>
            <Skeleton className="h-2.5 w-8" />
          </div>
        ))}
      </div>
    </div>
  )
}
