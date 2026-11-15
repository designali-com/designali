import { Skeleton } from "@workspace/ui/components/skeleton"

export default function WeatherWidgetSkeleton() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 border p-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-10 w-16" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="size-14 rounded-full" />
      </div>
      <div className="grid grid-cols-5 gap-2 border-t pt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <Skeleton className="h-2.5 w-6" />
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="h-2.5 w-5" />
          </div>
        ))}
      </div>
    </div>
  )
}
