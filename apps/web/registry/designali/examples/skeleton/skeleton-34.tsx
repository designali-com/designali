import { Skeleton } from "@workspace/ui/components/skeleton"

export default function InlineTextSkeleton() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 text-sm">
      <p>
        Your available balance is{" "}
        <Skeleton className="inline-block h-4 w-16 align-middle" />.
      </p>
      <p>
        Next payout of{" "}
        <Skeleton className="inline-block h-4 w-12 align-middle" /> arrives on{" "}
        <Skeleton className="inline-block h-4 w-20 align-middle" />.
      </p>
      <p className="text-xs text-muted-foreground">
        Synced with <Skeleton className="inline-block h-3 w-24 align-middle" />{" "}
        moments ago.
      </p>
    </div>
  )
}
