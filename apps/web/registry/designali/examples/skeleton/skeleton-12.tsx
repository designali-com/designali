import { Skeleton } from "@workspace/ui/components/skeleton"

export default function DataTableSkeleton() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <div className="flex justify-between gap-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 w-20" />
      </div>
      <div className="border">
        <div className="flex items-center gap-3 border-b bg-muted/40 px-3 py-2.5">
          <Skeleton className="size-4" />
          <Skeleton className="h-3 w-24" />
          <Skeleton className="ms-auto h-3 w-16" />
          <Skeleton className="h-3 w-12" />
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 border-b px-3 py-3 last:border-b-0"
          >
            <Skeleton className="size-4" />
            <Skeleton className="size-6 rounded-full" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="ms-auto h-5 w-16" />
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-3 w-24" />
        <div className="flex gap-1">
          <Skeleton className="size-7" />
          <Skeleton className="size-7" />
        </div>
      </div>
    </div>
  )
}
