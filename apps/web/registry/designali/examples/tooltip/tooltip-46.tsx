import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function LogicalSideTooltips() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                aria-label="Previous page"
              />
            }
          >
            <ChevronLeftIcon />
          </TooltipTrigger>
          <TooltipContent side="inline-start">Previous page</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" size="icon" aria-label="Next page" />
            }
          >
            <ChevronRightIcon />
          </TooltipTrigger>
          <TooltipContent side="inline-end">Next page</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
