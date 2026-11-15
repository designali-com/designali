import { Skeleton } from "@workspace/ui/components/skeleton"
import { cn } from "@workspace/ui/lib/utils"

const columns = [
  ["h-32", "h-20", "h-28"],
  ["h-20", "h-36", "h-16"],
  ["h-28", "h-16", "h-32"],
]

export default function MasonryGallerySkeleton() {
  return (
    <div className="grid w-full max-w-md grid-cols-3 gap-2">
      {columns.map((col, c) => (
        <div key={c} className="flex flex-col gap-2">
          {col.map((h, i) => (
            <Skeleton key={i} className={cn("w-full", h)} />
          ))}
        </div>
      ))}
    </div>
  )
}
