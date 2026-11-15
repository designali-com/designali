import { Skeleton } from "@workspace/ui/components/skeleton"

const columns = [3, 2, 1]

export default function KanbanBoardSkeleton() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-3 gap-3">
      {columns.map((count, c) => (
        <div key={c} className="flex flex-col gap-2 bg-muted/40 p-2">
          <div className="flex items-center justify-between px-1 py-1">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-4 w-5" />
          </div>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 border bg-background p-2.5"
            >
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
              <div className="flex items-center justify-between pt-1">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="size-5 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
