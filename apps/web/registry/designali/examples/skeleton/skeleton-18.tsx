import { Skeleton } from "@workspace/ui/components/skeleton"

export default function InboxSkeleton() {
  return (
    <div className="w-full max-w-md border">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-3 border-b px-3 py-3 last:border-b-0">
          <div className="flex w-2 justify-center pt-1">
            {i < 2 && (
              <Skeleton className="size-2 rounded-full bg-primary/30" />
            )}
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="flex justify-between">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-2.5 w-10" />
            </div>
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-2.5 w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
