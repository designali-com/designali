import { Skeleton } from "@workspace/ui/components/skeleton"

export default function ProductGridSkeleton() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-4 sm:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      ))}
    </div>
  )
}
