import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Skeleton } from "@workspace/ui/components/skeleton"

export default function PartialLoadSkeleton() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Helios redesign</CardTitle>
        <CardDescription>Marketing site · updated 2h ago</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {["Tasks", "Open", "Done"].map((label) => (
            <div key={label} className="flex flex-col gap-1.5">
              <span className="text-xs text-muted-foreground">{label}</span>
              <Skeleton className="h-6 w-10" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-muted-foreground">Members</span>
          <div className="flex -space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                className="size-7 rounded-full border-2 border-card"
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
