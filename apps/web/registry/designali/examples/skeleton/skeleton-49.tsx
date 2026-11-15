import { Skeleton } from "@workspace/ui/components/skeleton"

const groups = [
  { label: "Today", count: 2 },
  { label: "Yesterday", count: 3 },
]

export default function TransactionsSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col gap-3">
          <span className="text-xs font-medium text-muted-foreground">
            {g.label}
          </span>
          {Array.from({ length: g.count }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-9 rounded-full" />
              <div className="flex flex-1 flex-col gap-1.5">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-2.5 w-16" />
              </div>
              <Skeleton className="h-3.5 w-14" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
