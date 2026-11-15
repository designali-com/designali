import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Skeleton } from "@workspace/ui/components/skeleton"

export default function SkeletonMediaLoading() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <AspectRatio ratio={16 / 9}>
        <Skeleton className="absolute inset-0" />
      </AspectRatio>
      <div className="flex items-center gap-3">
        <Skeleton className="size-8 rounded-full" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  )
}
