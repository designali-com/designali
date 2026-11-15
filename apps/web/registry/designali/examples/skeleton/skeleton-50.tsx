import { Skeleton } from "@workspace/ui/components/skeleton"

export default function HeroSectionSkeleton() {
  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-4 py-6 text-center">
      <Skeleton className="h-5 w-28 rounded-full" />
      <div className="flex w-full flex-col items-center gap-2">
        <Skeleton className="h-8 w-11/12" />
        <Skeleton className="h-8 w-2/3" />
      </div>
      <div className="flex w-full flex-col items-center gap-1.5">
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-3/5" />
      </div>
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-28" />
      </div>
    </div>
  )
}
