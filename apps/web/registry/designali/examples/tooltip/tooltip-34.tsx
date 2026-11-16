import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { cn } from "@workspace/ui/lib/utils"

const palette = [
  { name: "designali-ink", hex: "#111827", className: "bg-[#111827]" },
  { name: "slate-500", hex: "#64748B", className: "bg-[#64748B]" },
  { name: "coral-400", hex: "#FB7185", className: "bg-[#FB7185]" },
  { name: "mint-300", hex: "#6EE7B7", className: "bg-[#6EE7B7]" },
  { name: "sun-200", hex: "#FDE68A", className: "bg-[#FDE68A]" },
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
              <span className="font-mono opacity-70">{c.hex}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
