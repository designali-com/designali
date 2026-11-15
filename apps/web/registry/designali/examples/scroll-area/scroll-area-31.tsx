import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Spinner } from "@workspace/ui/components/spinner"

export default function SkeletonLoadingList() {
  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-xs text-muted-foreground">
        <Spinner />
        Loading contacts...
      </div>
      <ScrollArea className="h-64">
        <div className="flex flex-col gap-4 p-3">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-8 shrink-0 rounded-full" />
              <div className="flex flex-1 flex-col gap-1.5">
                <Skeleton
                  className="h-2.5"
                  style={{ width: 50 + ((i * 17) % 40) + "%" }}
                />
                <Skeleton className="h-2 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
