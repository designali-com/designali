import { Skeleton } from "@workspace/ui/components/skeleton"

export default function SettingsTogglesSkeleton() {
  return (
    <div className="w-full max-w-md border">
      <div className="border-b p-4">
        <Skeleton className="h-4 w-32" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-4 border-b p-4 last:border-b-0"
        >
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-2.5 w-48 max-w-full" />
          </div>
          <Skeleton className="h-4.5 w-8 rounded-full" />
        </div>
      ))}
    </div>
  )
}
