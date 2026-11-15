import { Skeleton } from "@workspace/ui/components/skeleton"
import { Spinner } from "@workspace/ui/components/spinner"

const loaded = [
  { title: "Migrate auth to passkeys", owner: "Ola N." },
  { title: "Archive legacy webhooks", owner: "Ben T." },
  { title: "Audit S3 bucket policies", owner: "Rina P." },
]

export default function InfiniteScrollSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col border">
      {loaded.map((item) => (
        <div
          key={item.title}
          className="flex items-center justify-between border-b px-3 py-2.5 text-xs"
        >
          <span className="font-medium">{item.title}</span>
          <span className="text-muted-foreground">{item.owner}</span>
        </div>
      ))}
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between border-b px-3 py-3"
        >
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-12" />
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 py-3 text-xs text-muted-foreground">
        <Spinner />
        Loading more
      </div>
    </div>
  )
}
