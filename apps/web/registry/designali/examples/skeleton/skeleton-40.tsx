import { Skeleton } from "@workspace/ui/components/skeleton"

const shapes = [
  { label: "Circle", el: <Skeleton className="size-12 rounded-full" /> },
  { label: "Square", el: <Skeleton className="size-12" /> },
  { label: "Pill", el: <Skeleton className="h-6 w-20 rounded-full" /> },
  { label: "Text", el: <Skeleton className="h-3 w-24" /> },
  { label: "Button", el: <Skeleton className="h-8 w-24" /> },
  { label: "Block", el: <Skeleton className="h-12 w-24" /> },
]

export default function SkeletonShapes() {
  return (
    <div className="grid w-full max-w-md grid-cols-3 gap-3">
      {shapes.map((shape) => (
        <div
          key={shape.label}
          className="flex flex-col items-center gap-2 border p-3"
        >
          <div className="flex h-12 items-center">{shape.el}</div>
          <span className="text-xs text-muted-foreground">{shape.label}</span>
        </div>
      ))}
    </div>
  )
}
