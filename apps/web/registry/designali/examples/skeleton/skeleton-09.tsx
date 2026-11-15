import { Card, CardContent } from "@workspace/ui/components/card"
import { Skeleton } from "@workspace/ui/components/skeleton"

export default function StatCardsSkeleton() {
  return (
    <div className="grid w-full max-w-lg grid-cols-2 gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} size="sm">
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="size-4" />
            </div>
            <Skeleton className="h-7 w-24" />
            <Skeleton className="h-4 w-14" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
