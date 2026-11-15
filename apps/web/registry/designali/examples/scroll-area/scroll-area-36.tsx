import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const ramps = [
  {
    name: "Slate",
    shades: [
      "bg-slate-100",
      "bg-slate-300",
      "bg-slate-500",
      "bg-slate-700",
      "bg-slate-900",
    ],
  },
  {
    name: "Sky",
    shades: [
      "bg-sky-100",
      "bg-sky-300",
      "bg-sky-500",
      "bg-sky-700",
      "bg-sky-900",
    ],
  },
  {
    name: "Emerald",
    shades: [
      "bg-emerald-100",
      "bg-emerald-300",
      "bg-emerald-500",
      "bg-emerald-700",
      "bg-emerald-900",
    ],
  },
  {
    name: "Amber",
    shades: [
      "bg-amber-100",
      "bg-amber-300",
      "bg-amber-500",
      "bg-amber-700",
      "bg-amber-900",
    ],
  },
  {
    name: "Rose",
    shades: [
      "bg-rose-100",
      "bg-rose-300",
      "bg-rose-500",
      "bg-rose-700",
      "bg-rose-900",
    ],
  },
  {
    name: "Violet",
    shades: [
      "bg-violet-100",
      "bg-violet-300",
      "bg-violet-500",
      "bg-violet-700",
      "bg-violet-900",
    ],
  },
  {
    name: "Fuchsia",
    shades: [
      "bg-fuchsia-100",
      "bg-fuchsia-300",
      "bg-fuchsia-500",
      "bg-fuchsia-700",
      "bg-fuchsia-900",
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
                  <span className="font-mono text-[10px] text-muted-foreground">
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
