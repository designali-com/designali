import { InfoIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function FieldInfoTooltip() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center gap-1">
        <Label htmlFor="vat">VAT number</Label>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="About VAT number"
              />
            }
          >
            <InfoIcon />
          </TooltipTrigger>
          <TooltipContent side="right" className="max-w-52">
            Required for EU businesses so invoices can be issued without VAT.
          </TooltipContent>
        </Tooltip>
      </div>
      <Input id="vat" placeholder="DE123456789" />
    </div>
  )
}
