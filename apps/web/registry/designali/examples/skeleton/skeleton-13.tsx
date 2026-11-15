import { Skeleton } from "@workspace/ui/components/skeleton"

export default function FormSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-3 w-56" />
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-full" />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-20 w-full" />
      </div>
      <div className="flex justify-end gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-28" />
      </div>
    </div>
  )
}
