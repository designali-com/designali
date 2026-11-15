import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const delays = [0, 400, 1000]

export default function TriggerDelayTooltips() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {delays.map((delay) => (
        <Tooltip key={delay}>
          <TooltipTrigger delay={delay} render={<Button variant="outline" />}>
            {delay === 0 ? "Instant" : delay + " ms"}
          </TooltipTrigger>
          <TooltipContent>Opened after {delay} ms</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
