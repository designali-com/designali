import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { cn } from "@workspace/ui/lib/utils"

const photos = [
  { title: "Dalim Works", className: "from-amber-300 to-orange-600" },
  { title: "Dalim UI", className: "from-cyan-300 to-blue-600" },
  { title: "Dalim Icons", className: "from-lime-300 to-emerald-600" },
  { title: "Dalim Fonts", className: "from-fuchsia-400 to-indigo-700" },
  { title: "Dalim Graphic", className: "from-rose-300 to-red-600" },
  { title: "Dalim Visuals", className: "from-slate-200 to-slate-500" },
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
