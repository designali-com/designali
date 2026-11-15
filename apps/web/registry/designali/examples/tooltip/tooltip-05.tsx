import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const aligns = ["start", "center", "end"] as const

export default function TooltipAlignments() {
  return (
    <TooltipProvider>
      <div className="flex w-full max-w-sm flex-col gap-2">
        {aligns.map((align) => (
          <Tooltip key={align}>
            <TooltipTrigger
              render={
                <Button variant="outline" className="w-full capitalize" />
              }
            >
              Align {align}
            </TooltipTrigger>
            <TooltipContent side="bottom" align={align}>
              Aligned to the {align} edge
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
