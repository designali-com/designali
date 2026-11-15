import { ScrollArea } from "@workspace/ui/components/scroll-area"

const entries = Array.from({ length: 16 }, (_, i) => ({
  day: "Day " + (i + 1),
  note: [
    "Ran 5k along the river",
    "Rest day and stretching",
    "Intervals: 6 x 400m",
    "Long ride, 42 km",
  ][i % 4],
}))

export default function BrandedScrollbarThumb() {
  return (
    <ScrollArea className="h-64 w-full max-w-xs border [&_[data-slot=scroll-area-scrollbar]]:w-3 [&_[data-slot=scroll-area-thumb]]:rounded-full [&_[data-slot=scroll-area-thumb]]:bg-primary/60 hover:[&_[data-slot=scroll-area-thumb]]:bg-primary">
      <div className="flex flex-col divide-y pr-2">
        {entries.map((e) => (
          <div key={e.day} className="flex flex-col px-3 py-2 text-xs">
            <span className="font-medium">{e.day}</span>
            <span className="text-muted-foreground">{e.note}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
