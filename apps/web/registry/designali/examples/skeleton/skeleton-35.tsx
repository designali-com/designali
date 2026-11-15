import { Skeleton } from "@workspace/ui/components/skeleton"

export default function InvoiceDocumentSkeleton() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6 border p-6">
      <div className="flex justify-between">
        <Skeleton className="size-10" />
        <div className="flex flex-col items-end gap-1.5">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <Skeleton className="h-2.5 w-12" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-3 w-20" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 border-t pt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="grid grid-cols-[1fr_40px_64px] gap-4">
            <Skeleton className="h-3" />
            <Skeleton className="h-3" />
            <Skeleton className="h-3" />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-4 border-t pt-4">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  )
}
