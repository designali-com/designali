import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Badge } from "@workspace/ui/components/badge"

export default function CourseLessonThumbnail() {
  return (
    <div className="w-full max-w-xs">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden bg-linear-to-br from-slate-800 to-slate-600"
      >
        <span className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-white/20">
          03
        </span>
        <Badge
          variant="secondary"
          className="absolute end-2 bottom-3 font-mono"
        >
          14:20
        </Badge>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20">
          <div className="h-full w-2/3 bg-red-500" />
        </div>
      </AspectRatio>
      <p className="mt-2 text-sm font-medium">
        Lesson 3: Designing with constraints
      </p>
      <p className="text-xs text-muted-foreground">
        Interface Systems - 65% watched
      </p>
    </div>
  )
}
