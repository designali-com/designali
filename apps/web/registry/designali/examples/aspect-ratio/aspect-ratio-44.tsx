import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { cn } from "@workspace/ui/lib/utils"

const columns = [
  [
    { ratio: 3 / 4, className: "from-rose-300 to-pink-500" },
    { ratio: 1, className: "from-amber-200 to-yellow-500" },
  ],
  [
    { ratio: 4 / 3, className: "from-sky-300 to-cyan-600" },
    { ratio: 2 / 3, className: "from-lime-300 to-emerald-600" },
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
              <span className="absolute end-1.5 bottom-1.5 bg-black/40 px-1 font-mono text-[9px] text-white">
                {tile.ratio.toFixed(2)}
              </span>
            </AspectRatio>
          ))}
        </div>
      ))}
    </div>
  )
}
