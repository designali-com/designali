import { Skeleton } from "@workspace/ui/components/skeleton"

export default function LineChartSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4 border p-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-6 w-32" />
        </div>
        <Skeleton className="h-7 w-24" />
      </div>
      <div className="relative h-36 animate-pulse">
        <div className="absolute inset-0 flex flex-col justify-between">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-px bg-muted" />
          ))}
        </div>
        <svg
          viewBox="0 0 300 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full text-muted"
        >
          <path
            d="M0 80 L40 60 L80 70 L120 40 L160 50 L200 25 L240 35 L300 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1.5">
          <Skeleton className="size-2.5" />
          <Skeleton className="h-2.5 w-14" />
        </div>
        <div className="flex items-center gap-1.5">
          <Skeleton className="size-2.5" />
          <Skeleton className="h-2.5 w-16" />
        </div>
      </div>
    </div>
  )
}
