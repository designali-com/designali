import { MapPinIcon } from "lucide-react"

import { Skeleton } from "@workspace/ui/components/skeleton"

export default function LocationCardSkeleton() {
  return (
    <div className="w-full max-w-sm border">
      <div className="relative">
        <Skeleton className="h-36 w-full" />
        <MapPinIcon className="absolute inset-0 m-auto size-6 text-muted-foreground/40" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <Skeleton className="h-4 w-40" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-1/2" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 flex-1" />
        </div>
      </div>
    </div>
  )
}
