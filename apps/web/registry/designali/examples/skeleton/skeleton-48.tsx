import {
  Star as StarIcon,
} from "@designali/icons"

import { Skeleton } from "@workspace/ui/components/skeleton"

export default function ReviewsSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-9 w-12" />
          <div className="flex gap-0.5 text-muted">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-3 fill-current" />
            ))}
          </div>
          <Skeleton className="h-2.5 w-14" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          {[90, 60, 30, 15, 8].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 text-[10px] text-muted-foreground">
                {5 - i}
              </span>
              <Skeleton className="h-1.5" style={{ width: w + "%" }} />
            </div>
          ))}
        </div>
      </div>
      {[0, 1].map((i) => (
        <div key={i} className="flex flex-col gap-2 border-t pt-4">
          <div className="flex items-center gap-2">
            <Skeleton className="size-6 rounded-full" />
            <Skeleton className="h-3 w-24" />
            <Skeleton className="ms-auto h-2.5 w-12" />
          </div>
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      ))}
    </div>
  )
}
