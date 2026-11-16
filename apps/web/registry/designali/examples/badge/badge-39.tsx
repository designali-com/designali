import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const files = [
  {
    name: "Designali brand guidelines",
    ext: "PDF",
    size: "2.4 MB",
    className: "bg-red-600 text-white",
  },
  {
    name: "Hero banner",
    ext: "PNG",
    size: "880 KB",
    className: "bg-sky-600 text-white",
  },
  {
    name: "Icon list",
    ext: "CSV",
    size: "64 KB",
    className: "bg-emerald-600 text-white",
  },
  {
    name: "Designali logos",
    ext: "ZIP",
    size: "31 MB",
    className: "bg-zinc-700 text-white",
  },
]

export default function FileTypeBadges() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {files.map((file) => (
        <div key={file.name} className="flex items-center gap-3 p-3">
          <Badge
            className={cn(
              "w-10 font-mono text-[10px] font-bold",
              file.className
            )}
          >
            {file.ext}
          </Badge>
          <span className="flex-1 truncate text-sm">{file.name}</span>
          <span className="text-xs text-muted-foreground">{file.size}</span>
        </div>
      ))}
    </div>
  )
}
