import { CalendarClockIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function RichContentTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        <CalendarClockIcon data-icon="inline-start" />
        Auto-archive
      </TooltipTrigger>
      <TooltipContent className="flex-col items-start gap-1 py-2">
        <span className="font-medium">Auto-archive inactive channels</span>
        <span className="opacity-80">
          Channels with no messages for 90 days are archived each Sunday.
        </span>
        <span className="opacity-60">Last run: 3 channels archived</span>
      </TooltipContent>
    </Tooltip>
  )
}
