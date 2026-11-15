import { Skeleton } from "@workspace/ui/components/skeleton"

export default function StoriesRowSkeleton() {
  return (
    <div className="flex w-full max-w-md gap-3 overflow-x-auto pb-1">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex shrink-0 flex-col items-center gap-1.5">
          <div className="rounded-full border-2 border-muted p-0.5">
            <Skeleton className="size-12 rounded-full" />
          </div>
          <Skeleton className="h-2.5 w-10" />
        </div>
      ))}
    </div>
  )
}
