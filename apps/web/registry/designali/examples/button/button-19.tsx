import {
  Rocket as RocketIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function DisabledReasonTooltipButton() {
  return (
    <Tooltip>
      <TooltipTrigger render={<span tabIndex={0} className="inline-flex" />}>
        <Button disabled>
          <RocketIcon data-icon="inline-start" />
          Deploy to production
        </Button>
      </TooltipTrigger>
      <TooltipContent>Waiting for 2 required checks to pass</TooltipContent>
    </Tooltip>
  )
}
