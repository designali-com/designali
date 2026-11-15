import { Skeleton } from "@workspace/ui/components/skeleton"

export default function CourseCardSkeleton() {
  return (
    <div className="flex w-full max-w-sm gap-4 border p-3">
      <Skeleton className="h-20 w-28 shrink-0" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3 w-2/3" />
        <div className="mt-auto flex flex-col gap-1.5">
          <div className="flex justify-between">
            <Skeleton className="h-2.5 w-16" />
            <Skeleton className="h-2.5 w-8" />
          </div>
          <Skeleton className="h-1 w-full" />
        </div>
      </div>
    </div>
  )
}
