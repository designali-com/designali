import { Card, CardContent, CardHeader } from "@workspace/ui/components/card"
import { Skeleton } from "@workspace/ui/components/skeleton"

const heights = [40, 65, 50, 80, 35, 90, 70, 55, 75, 45, 60, 85]

export default function BarChartSkeleton() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-48" />
      </CardHeader>
      <CardContent>
        <div className="flex h-40 items-end gap-2 border-s border-b ps-2">
          {heights.map((h, i) => (
            <Skeleton key={i} className="flex-1" style={{ height: h + "%" }} />
          ))}
        </div>
        <div className="mt-2 flex justify-between ps-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-2.5 w-6" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
