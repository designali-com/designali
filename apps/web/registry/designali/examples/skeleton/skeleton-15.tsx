import { Skeleton } from "@workspace/ui/components/skeleton"

export default function NotificationListSkeleton() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex gap-3 p-3">
          <Skeleton className="size-9 shrink-0" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/5" />
          </div>
          <Skeleton className="h-2.5 w-8" />
        </div>
      ))}
    </div>
  )
}
