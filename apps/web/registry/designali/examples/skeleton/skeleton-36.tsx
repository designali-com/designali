import {
  Truck as TruckIcon,
} from "@designali/icons"

import { Skeleton } from "@workspace/ui/components/skeleton"

export default function OrderTrackingSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5 border p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-5 w-36" />
        </div>
        <TruckIcon className="size-5 text-muted-foreground/40" />
      </div>
      <div className="flex items-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-1 items-center last:flex-none">
            <Skeleton className="size-4 rounded-full" />
            {i < 3 && <Skeleton className="mx-1 h-0.5 flex-1" />}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-2.5 w-12" />
        ))}
      </div>
    </div>
  )
}
