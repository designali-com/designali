import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { cn } from "@workspace/ui/lib/utils"

const photos = [
  { title: "Dalim Works", className: "from-chart-1 to-chart-2" },
  { title: "Dalim UI", className: "from-chart-1 to-chart-2" },
  { title: "Dalim Icons", className: "from-chart-1 to-chart-2" },
  { title: "Dalim Fonts", className: "from-primary to-chart-3" },
  { title: "Dalim Graphic", className: "from-chart-1 to-destructive" },
  { title: "Dalim Visuals", className: "from-muted to-muted-foreground" },
]

export default function PhotoGalleryGrid() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-1">
      {photos.map((photo) => (
        <AspectRatio
          key={photo.title}
          ratio={1}
          className={cn(
            "group overflow-hidden bg-linear-to-br",
            photo.className
          )}
        >
          <div className="absolute inset-0 flex items-end bg-black/0 p-2 transition-colors group-hover:bg-black/30">
            <span className="text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {photo.title}
            </span>
          </div>
        </AspectRatio>
      ))}
    </div>
  )
}
