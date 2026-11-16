import {
  Info as InfoIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function LabelWithTooltipInfo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <div className="flex items-center gap-1">
        <Label htmlFor="tax-id">Tax ID</Label>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="About tax ID"
              />
            }
          >
            <InfoIcon />
          </TooltipTrigger>
          <TooltipContent>
            Shown on invoices sent to your customers.
          </TooltipContent>
        </Tooltip>
      </div>
      <Input id="tax-id" placeholder="EU 123 456 789" />
    </div>
  )
}
