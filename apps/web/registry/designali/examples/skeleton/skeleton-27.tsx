import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { cn } from "@workspace/ui/lib/utils"

export default function CheckoutSummarySkeleton() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Skeleton className="h-4 w-28" />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-12 shrink-0" />
            <div className="flex flex-1 flex-col gap-1.5">
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-2.5 w-1/3" />
            </div>
            <Skeleton className="h-3 w-12" />
          </div>
        ))}
        <Separator />
        {["w-16", "w-20", "w-12"].map((w, i) => (
          <div key={i} className="flex justify-between">
            <Skeleton className={cn("h-3", w)} />
            <Skeleton className="h-3 w-14" />
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  )
}
