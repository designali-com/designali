import { Skeleton } from "@workspace/ui/components/skeleton"

export default function ArticleSkeleton() {
  return (
    <article className="flex w-full max-w-md flex-col gap-4">
      <Skeleton className="h-3 w-20" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="size-7 rounded-full" />
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="aspect-[16/9] w-full" />
      {[100, 96, 92, 60].map((w, i) => (
        <Skeleton key={i} className="h-3" style={{ width: w + "%" }} />
      ))}
    </article>
  )
}
