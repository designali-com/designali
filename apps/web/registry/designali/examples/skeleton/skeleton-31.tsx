import { Skeleton } from "@workspace/ui/components/skeleton"

export default function TeamMembersSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-8 w-24" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-9 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-2.5 w-40" />
          </div>
          <Skeleton className="h-5 w-16" />
          <Skeleton className="size-6" />
        </div>
      ))}
    </div>
  )
}
