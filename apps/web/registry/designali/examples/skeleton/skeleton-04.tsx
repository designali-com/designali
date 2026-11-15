import { Skeleton } from "@workspace/ui/components/skeleton"

export default function ProfileHeaderSkeleton() {
  return (
    <div className="w-full max-w-md border">
      <Skeleton className="h-24 w-full" />
      <div className="flex flex-col gap-3 px-4 pb-4">
        <div className="-mt-8 flex items-end justify-between">
          <Skeleton className="size-16 rounded-full border-4 border-background" />
          <Skeleton className="h-8 w-24" />
        </div>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-3 w-24" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>
      </div>
    </div>
  )
}
