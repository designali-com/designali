import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

const palette = [
  { name: "designali-blue", hex: "#00A8FF", className: "bg-primary" },
  { name: "chart-1", hex: "#8EC5FF", className: "bg-chart-1" },
  { name: "chart-3", hex: "#155DFC", className: "bg-chart-3" },
  { name: "chart-5", hex: "#193CB8", className: "bg-chart-5" },
  { name: "designali-ink", hex: "#000000", className: "bg-foreground" },
]

export default function ColorPaletteTooltips() {
  return (
    <TooltipProvider>
      <div className="flex">
        {palette.map((c) => (
          <Tooltip key={c.name}>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  aria-label={c.name}
                  className={cn(
                    "h-16 w-12 transition-transform hover:-translate-y-1",
                    c.className
                  )}
                />
              }
            />
            <TooltipContent side="bottom">
              <span className="font-medium">{c.name}</span>
              <span className="font-sans opacity-70">{c.hex}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
