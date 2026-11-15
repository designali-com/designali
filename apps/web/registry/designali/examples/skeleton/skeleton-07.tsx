import { Skeleton } from "@workspace/ui/components/skeleton"
import { cn } from "@workspace/ui/lib/utils"

const bubbles = [
  { mine: false, w: "w-48" },
  { mine: false, w: "w-32" },
  { mine: true, w: "w-56" },
  { mine: false, w: "w-40" },
  { mine: true, w: "w-24" },
  { mine: true, w: "w-44" },
]

export default function ChatMessagesSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={cn("flex items-end gap-2", b.mine && "flex-row-reverse")}
        >
          {!b.mine && <Skeleton className="size-6 shrink-0 rounded-full" />}
          <Skeleton className={cn("h-8", b.w, b.mine && "bg-primary/20")} />
        </div>
      ))}
      <div className="mt-2 flex gap-2 border-t pt-3">
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="size-8" />
      </div>
    </div>
  )
}
