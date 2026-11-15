import { Skeleton } from "@workspace/ui/components/skeleton"

export default function AppShellSkeleton() {
  return (
    <div className="flex h-72 w-full max-w-xl border">
      <div className="hidden w-36 flex-col gap-3 border-e p-3 sm:flex">
        <Skeleton className="h-6 w-20" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-3 w-full" />
        ))}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b p-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="size-7 rounded-full" />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-3">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-14" />
            ))}
          </div>
          <Skeleton className="flex-1" />
        </div>
      </div>
    </div>
  )
}
