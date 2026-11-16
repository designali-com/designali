import { AspectRatio } from "@workspace/ui/components/aspect-ratio"

const spots = [
  { id: 1, x: "18%", y: "22%", label: "Blocks library" },
  { id: 2, x: "62%", y: "14%", label: "Icon search" },
  { id: 3, x: "48%", y: "64%", label: "Template preview" },
]

export default function ScreenshotHotspots() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 10} className="border bg-muted/40">
        <div className="absolute inset-y-0 start-0 w-1/4 border-e bg-muted" />
        <div className="absolute inset-x-0 top-0 ms-[25%] h-[12%] border-b bg-background" />
        <div className="absolute end-[6%] bottom-[8%] ms-[25%] grid h-[66%] w-[63%] grid-cols-2 gap-2">
          <div className="bg-background ring-1 ring-border" />
          <div className="bg-background ring-1 ring-border" />
        </div>
        {spots.map((spot) => (
          <span
            key={spot.id}
            className="absolute flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground ring-4 ring-primary/20"
            style={{ left: spot.x, top: spot.y }}
          >
            {spot.id}
          </span>
        ))}
      </AspectRatio>
      <ol className="mt-3 flex flex-col gap-1 text-xs">
        {spots.map((spot) => (
          <li key={spot.id} className="flex gap-2">
            <span className="font-sans text-muted-foreground">{spot.id}.</span>
            {spot.label}
          </li>
        ))}
      </ol>
    </div>
  )
}
