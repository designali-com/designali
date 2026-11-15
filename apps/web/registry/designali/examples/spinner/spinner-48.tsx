import { Skeleton } from "@workspace/ui/components/skeleton"
import { Spinner } from "@workspace/ui/components/spinner"

export default function SkeletonWithSpinner() {
  return (
    <div className="relative flex w-full max-w-sm items-center gap-3 border p-4">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-3.5 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <span className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-muted-foreground">
        <Spinner className="size-3" />
        Fetching
      </span>
    </div>
  )
}
