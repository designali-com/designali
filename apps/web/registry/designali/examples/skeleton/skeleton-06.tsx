import { Skeleton } from "@workspace/ui/components/skeleton"
import { cn } from "@workspace/ui/lib/utils"

const rows = [
  { indent: false, lines: 2 },
  { indent: true, lines: 1 },
  { indent: true, lines: 2 },
  { indent: false, lines: 1 },
]

export default function CommentListSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      {rows.map((row, i) => (
        <div key={i} className={cn("flex gap-3", row.indent && "ms-10")}>
          <Skeleton className="size-8 shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex gap-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-10" />
            </div>
            {Array.from({ length: row.lines }).map((_, j) => (
              <Skeleton
                key={j}
                className={cn("h-3", j === row.lines - 1 ? "w-2/3" : "w-full")}
              />
            ))}
            <div className="flex gap-3">
              <Skeleton className="h-2.5 w-8" />
              <Skeleton className="h-2.5 w-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
