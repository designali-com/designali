import {
  Lock as LockIcon,
} from "@designali/icons"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"

export default function DisabledTextarea() {
  return (
    <Field data-disabled="true" className="w-full max-w-sm">
      <FieldLabel htmlFor="ta-disabled">Contract terms</FieldLabel>
      <Textarea
        id="ta-disabled"
        disabled
        defaultValue="Designali studio invoices are due within 30 days. Design files are handed over once the final invoice is paid."
      />
      <FieldDescription className="flex items-center gap-1">
        <LockIcon className="size-3" />
        Locked after signature on Nov 3, 2026.
      </FieldDescription>
    </Field>
  )
}
