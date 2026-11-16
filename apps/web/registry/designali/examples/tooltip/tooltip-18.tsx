import { Badge } from "@workspace/ui/components/badge"
import { Switch } from "@workspace/ui/components/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function BetaBadgeTooltip() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between border p-4">
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">AI workflows</span>
          <Tooltip>
            <TooltipTrigger render={<Badge variant="outline" tabIndex={0} />}>
              Beta
            </TooltipTrigger>
            <TooltipContent className="max-w-56">
              Still being refined. Suggestions may change and feedback is
              welcome.
            </TooltipContent>
          </Tooltip>
        </div>
        <span className="text-xs text-muted-foreground">
          Designali AI-assisted design se code tak.
        </span>
      </div>
      <Switch defaultChecked />
    </div>
  )
}
