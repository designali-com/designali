import { Skeleton } from "@workspace/ui/components/skeleton"

const eventDays = new Set([3, 8, 9, 15, 22, 26, 30])

export default function CalendarMonthSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-32" />
        <div className="flex gap-1">
          <Skeleton className="size-7" />
          <Skeleton className="size-7" />
        </div>
      </div>
      <div className="grid grid-cols-7 border-s border-t">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={"h" + i}
            className="flex justify-center border-e border-b py-1.5"
          >
            <Skeleton className="h-2.5 w-6" />
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="flex h-12 flex-col gap-1 border-e border-b p-1"
          >
            <Skeleton className="h-2.5 w-3" />
            {eventDays.has(i) && (
              <Skeleton className="h-2 w-full bg-primary/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
