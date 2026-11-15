import { Skeleton } from "@workspace/ui/components/skeleton"

export default function TimelineSkeleton() {
  return (
    <ol className="flex w-full max-w-sm flex-col">
      {Array.from({ length: 4 }).map((_, i) => (
        <li key={i} className="relative flex gap-3 pb-6 last:pb-0">
          {i < 3 && (
            <span className="absolute start-3 top-7 bottom-0 w-px bg-border" />
          )}
          <Skeleton className="size-6 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5 pt-0.5">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-2.5 w-20" />
          </div>
        </li>
      ))}
    </ol>
  )
}
