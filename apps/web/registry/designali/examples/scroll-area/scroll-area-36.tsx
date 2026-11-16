import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const ramps = [
  {
    name: "Slate",
    shades: [
      "bg-muted",
      "bg-border",
      "bg-muted-foreground",
      "bg-foreground",
      "bg-foreground",
    ],
  },
  {
    name: "Sky",
    shades: [
      "bg-primary/10",
      "bg-chart-1",
      "bg-primary",
      "bg-chart-3",
      "bg-chart-5",
    ],
  },
  {
    name: "Emerald",
    shades: [
      "bg-primary/10",
      "bg-chart-1",
      "bg-primary",
      "bg-chart-3",
      "bg-chart-5",
    ],
  },
  {
    name: "Amber",
    shades: [
      "bg-primary/10",
      "bg-chart-1",
      "bg-primary",
      "bg-chart-3",
      "bg-chart-5",
    ],
  },
  {
    name: "Rose",
    shades: [
      "bg-primary/10",
      "bg-chart-1",
      "bg-primary",
      "bg-chart-3",
      "bg-chart-5",
    ],
  },
  {
    name: "Violet",
    shades: [
      "bg-primary/10",
      "bg-chart-1",
      "bg-primary",
      "bg-chart-3",
      "bg-chart-5",
    ],
  },
  {
    name: "Fuchsia",
    shades: [
      "bg-primary/10",
      "bg-chart-1",
      "bg-primary",
      "bg-chart-3",
      "bg-chart-5",
    ],
  },
]
const steps = [100, 300, 500, 700, 900]

export default function ColorPaletteSwatches() {
  return (
    <ScrollArea className="h-64 w-full max-w-sm border">
      <div className="flex flex-col gap-3 p-3">
        {ramps.map((ramp) => (
          <div key={ramp.name} className="flex flex-col gap-1">
            <span className="text-xs font-medium">{ramp.name}</span>
            <div className="grid grid-cols-5 gap-1">
              {ramp.shades.map((shade, i) => (
                <div key={shade} className="flex flex-col gap-0.5">
                  <div className={cn("h-8", shade)} />
                  <span className="font-sans text-[10px] text-muted-foreground">
                    {steps[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
