import { Skeleton } from "@workspace/ui/components/skeleton"

export default function StaggeredPulseSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {Array.from({ length: 5 }).map((_, i) => {
        const style = { animationDelay: i * 150 + "ms" }
        return (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-10 shrink-0" style={style} />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-3 w-3/4" style={style} />
              <Skeleton className="h-3 w-1/2" style={style} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
