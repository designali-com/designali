import { Spinner } from "@workspace/ui/components/spinner"

const tiles = [
  { hue: 210, ready: true },
  { hue: 160, ready: false },
  { hue: 30, ready: true },
  { hue: 280, ready: false },
  { hue: 350, ready: false },
  { hue: 90, ready: true },
]

export default function GalleryTilesLoading() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-1.5">
      {tiles.map((tile, i) => (
        <div
          key={i}
          className="relative aspect-square"
          style={{
            background:
              "linear-gradient(135deg, hsl(" +
              tile.hue +
              " 70% 65%), hsl(" +
              (tile.hue + 40) +
              " 60% 45%))",
            opacity: tile.ready ? 1 : 0.35,
          }}
        >
          {!tile.ready && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner className="size-5 text-foreground" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
