import { Skeleton } from "@workspace/ui/components/skeleton"

const lines = [
  { indent: 0, w: 40 },
  { indent: 1, w: 64 },
  { indent: 2, w: 52 },
  { indent: 2, w: 72 },
  { indent: 1, w: 20 },
  { indent: 0, w: 8 },
  { indent: 0, w: 0 },
  { indent: 0, w: 56 },
]

export default function CodeBlockSkeleton() {
  return (
    <div className="w-full max-w-md border bg-muted/30">
      <div className="flex items-center gap-1.5 border-b px-3 py-2">
        <Skeleton className="size-2.5 rounded-full" />
        <Skeleton className="size-2.5 rounded-full" />
        <Skeleton className="size-2.5 rounded-full" />
        <Skeleton className="ms-3 h-2.5 w-20" />
      </div>
      <div className="flex flex-col gap-2 p-3 font-sans">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-4 text-end text-[10px] text-muted-foreground tabular-nums">
              {i + 1}
            </span>
            {line.w > 0 && (
              <Skeleton
                className="h-3"
                style={{
                  marginInlineStart: line.indent * 16,
                  width: line.w + "%",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
