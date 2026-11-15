import { LockIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

export default function LockedPlanInput() {
  return (
    <Field data-disabled className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="custom-domain">Custom domain</FieldLabel>
        <Badge variant="secondary">Pro</Badge>
      </div>
      <InputGroup>
        <InputGroupAddon>
          <LockIcon />
        </InputGroupAddon>
        <InputGroupInput
          id="custom-domain"
          disabled
          placeholder="docs.yourcompany.com"
        />
      </InputGroup>
      <FieldDescription>
        Upgrade to Pro to serve your help center from your own domain.{" "}
        <a
          href="#"
          className="font-medium text-foreground underline underline-offset-4"
        >
          See plans
        </a>
      </FieldDescription>
    </Field>
  )
}
