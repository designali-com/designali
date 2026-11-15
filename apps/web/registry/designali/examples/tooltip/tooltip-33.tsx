import { CrownIcon, DownloadIcon, LockIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function LockedFeatureTooltip() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline">
          <DownloadIcon data-icon="inline-start" />
          Export CSV
        </Button>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="outline" aria-disabled className="opacity-60" />
            }
          >
            <LockIcon data-icon="inline-start" />
            Export to warehouse
          </TooltipTrigger>
          <TooltipContent>
            <CrownIcon className="size-3" />
            Available on the Scale plan
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
