import { MapPinIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const pins = [
  { name: "Harbor Street store", top: "28%", left: "22%" },
  { name: "Old Town kiosk", top: "55%", left: "48%" },
  { name: "Riverside pickup point", top: "38%", left: "76%" },
]

export default function MapPinTooltips() {
  return (
    <TooltipProvider>
      <div className="relative h-44 w-full max-w-sm overflow-hidden border bg-gradient-to-br from-sky-100 via-emerald-50 to-lime-100 dark:from-sky-950 dark:via-emerald-950 dark:to-lime-950">
        <div className="absolute inset-x-0 top-2/3 h-3 -rotate-6 bg-sky-300/60 dark:bg-sky-800/60" />
        {pins.map((p) => (
          <Tooltip key={p.name}>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  aria-label={p.name}
                  className="absolute -translate-x-1/2 -translate-y-full text-rose-500"
                  style={{ top: p.top, left: p.left }}
                />
              }
            >
              <MapPinIcon className="size-6 fill-rose-500/20" />
            </TooltipTrigger>
            <TooltipContent>{p.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
