import {
  Send as SendIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function DisabledButtonTooltip() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Save draft</Button>
      <Tooltip>
        <TooltipTrigger render={<span tabIndex={0} className="inline-flex" />}>
          <Button disabled>
            <SendIcon data-icon="inline-start" />
            Publish
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add a cover title before publishing to designali.com</TooltipContent>
      </Tooltip>
    </div>
  )
}
