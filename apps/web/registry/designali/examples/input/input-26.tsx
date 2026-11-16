import {
  CircleCheck as CircleCheckIcon,
  TriangleAlert as TriangleAlertIcon,
} from "@designali/icons"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function ValidationFeedbackInputs() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="fb-success">Subdomain</FieldLabel>
        <Input
          id="fb-success"
          defaultValue="studio"
          className="border-chart-2 focus-visible:border-chart-2 focus-visible:ring-chart-2/30"
        />
        <FieldDescription className="flex items-center gap-1 text-primary">
          <CircleCheckIcon className="size-3.5" />
          studio.designali.com is available
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="fb-warning">Display name</FieldLabel>
        <Input
          id="fb-warning"
          defaultValue="DESIGNALI STUDIO"
          className="border-primary focus-visible:border-primary focus-visible:ring-primary/30"
        />
        <FieldDescription className="flex items-center gap-1 text-primary">
          <TriangleAlertIcon className="size-3.5" />
          All caps can look like shouting in notifications.
        </FieldDescription>
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="fb-error">Billing email</FieldLabel>
        <Input id="fb-error" aria-invalid defaultValue="billing@designali" />
        <FieldError>Enter a complete email address.</FieldError>
      </Field>
    </FieldGroup>
  )
}
