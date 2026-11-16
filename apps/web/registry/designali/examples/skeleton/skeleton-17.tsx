import {
  Play as PlayIcon,
} from "@designali/icons"

import { Skeleton } from "@workspace/ui/components/skeleton"

export default function VideoCardSkeleton() {
  return (
    <div className="grid w-full max-w-lg grid-cols-1 gap-4 sm:grid-cols-2">
      {[0, 1].map((i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="relative">
            <Skeleton className="aspect-video w-full" />
            <PlayIcon className="absolute inset-0 m-auto size-6 text-muted-foreground/40" />
            <Skeleton className="absolute end-2 bottom-2 h-4 w-10 bg-foreground/10" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="size-8 shrink-0 rounded-full" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
              <Skeleton className="h-2.5 w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
