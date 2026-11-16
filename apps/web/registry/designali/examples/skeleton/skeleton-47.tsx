import { Skeleton } from "@workspace/ui/components/skeleton"

export default function AccessibleSkeleton() {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="flex w-full max-w-sm flex-col gap-3 border p-4"
    >
      <span className="sr-only">Loading your recent Designali invoices…</span>
      <div aria-hidden="true" className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-2.5 w-16" />
            </div>
            <Skeleton className="h-4 w-14" />
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Placeholders are hidden from assistive tech; a status message is
        announced instead.
      </p>
    </div>
  )
}
