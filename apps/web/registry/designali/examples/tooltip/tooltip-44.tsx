import {
  MapPin as MapPinIcon,
} from "@designali/icons"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const pins = [
  { name: "Designali studio", top: "28%", left: "22%" },
  { name: "Client workshop", top: "55%", left: "48%" },
  { name: "Design meetup", top: "38%", left: "76%" },
]

export default function MapPinTooltips() {
  return (
    <TooltipProvider>
      <div className="relative h-44 w-full max-w-sm overflow-hidden border bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 dark:from-chart-5 dark:via-chart-5 dark:to-chart-5">
        <div className="absolute inset-x-0 top-2/3 h-3 -rotate-6 bg-chart-1/60 dark:bg-primary/60" />
        {pins.map((p) => (
          <Tooltip key={p.name}>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  aria-label={p.name}
                  className="absolute -translate-x-1/2 -translate-y-full text-primary"
                  style={{ top: p.top, left: p.left }}
                />
              }
            >
              <MapPinIcon className="size-6 fill-primary/20" />
            </TooltipTrigger>
            <TooltipContent>{p.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
