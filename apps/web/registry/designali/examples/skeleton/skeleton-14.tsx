import { Skeleton } from "@workspace/ui/components/skeleton"

export default function SidebarNavSkeleton() {
  return (
    <div className="flex h-96 w-60 flex-col border bg-sidebar">
      <div className="flex items-center gap-2 border-b p-3">
        <Skeleton className="size-8" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-2.5 w-14" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-3">
        {[4, 3].map((count, g) => (
          <div key={g} className="flex flex-col gap-2.5">
            <Skeleton className="h-2.5 w-16" />
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="size-4" />
                <Skeleton
                  className="h-3"
                  style={{ width: 60 + ((i * 23) % 50) + "px" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t p-3">
        <Skeleton className="size-7 rounded-full" />
        <Skeleton className="h-3 w-28" />
      </div>
    </div>
  )
}
