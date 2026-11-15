import { ShieldAlertIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function WrappingLongTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        <ShieldAlertIcon data-icon="inline-start" />
        Data retention
      </TooltipTrigger>
      <TooltipContent className="max-w-64 leading-relaxed">
        Messages older than 18 months are permanently deleted on the first day
        of each month. Files attached to those messages are removed as well,
        unless they are pinned in a channel.
      </TooltipContent>
    </Tooltip>
  )
}
