import {
  Lock as LockIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const options = [
  { id: "watermark", label: "Remove watermark", pro: true },
  { id: "hd", label: "Export in 4K", pro: true },
  { id: "captions", label: "Burn in captions", pro: false },
]

export default function DisabledWithUpgradeTooltip() {
  return (
    <FieldGroup className="w-full max-w-xs gap-3">
      {options.map((option) => (
        <Field
          key={option.id}
          orientation="horizontal"
          data-disabled={option.pro || undefined}
        >
          <Checkbox
            id={"export-" + option.id}
            disabled={option.pro}
            defaultChecked={!option.pro}
          />
          <FieldLabel htmlFor={"export-" + option.id} className="font-normal">
            {option.label}
          </FieldLabel>
          {option.pro && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Badge variant="outline" className="ms-auto cursor-help">
                    <LockIcon />
                    Pro
                  </Badge>
                }
              />
              <TooltipContent>Available on the Designali Pro plan</TooltipContent>
            </Tooltip>
          )}
        </Field>
      ))}
    </FieldGroup>
  )
}
