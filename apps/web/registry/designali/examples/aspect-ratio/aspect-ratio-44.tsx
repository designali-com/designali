import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { cn } from "@workspace/ui/lib/utils"

const columns = [
  [
    { ratio: 3 / 4, className: "from-chart-1 to-primary" },
    { ratio: 1, className: "from-primary/20 to-primary" },
  ],
  [
    { ratio: 4 / 3, className: "from-chart-1 to-chart-2" },
    { ratio: 2 / 3, className: "from-chart-1 to-chart-2" },
  ],
]

export default function MasonryMixedRatios() {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-2">
      {columns.map((column, c) => (
        <div key={c} className="flex flex-col gap-2">
          {column.map((tile, t) => (
            <AspectRatio
              key={t}
              ratio={tile.ratio}
              className={cn("bg-linear-to-br", tile.className)}
            >
              <span className="absolute end-1.5 bottom-1.5 bg-black/40 px-1 font-sans text-[9px] text-white">
                {tile.ratio.toFixed(2)}
              </span>
            </AspectRatio>
          ))}
        </div>
      ))}
    </div>
  )
}
