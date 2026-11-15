import { Badge } from "@workspace/ui/components/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function CloseDelayTooltip() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-muted-foreground">Order</span>
      <Tooltip>
        <TooltipTrigger
          closeDelay={400}
          render={
            <Badge variant="secondary" tabIndex={0} className="font-mono" />
          }
        >
          #A-20931
        </TooltipTrigger>
        <TooltipContent className="flex-col items-start gap-0.5 select-text">
          <span className="opacity-70">Tracking number</span>
          <span className="font-mono">1Z 999 AA1 01 2345 6784</span>
        </TooltipContent>
      </Tooltip>
      <span className="text-muted-foreground">shipped today</span>
    </div>
  )
}
