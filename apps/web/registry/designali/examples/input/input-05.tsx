import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function InputStatesShowcase() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="state-default">Default</FieldLabel>
        <Input id="state-default" placeholder="Designali project name" />
      </Field>
      <Field>
        <FieldLabel htmlFor="state-readonly">Read-only</FieldLabel>
        <Input
          id="state-readonly"
          readOnly
          defaultValue="designali_8f2k19"
          className="bg-muted/50 font-sans"
        />
      </Field>
      <Field data-disabled>
        <FieldLabel htmlFor="state-disabled">Disabled</FieldLabel>
        <Input
          id="state-disabled"
          disabled
          defaultValue="Managed by your organization"
        />
      </Field>
      <Field data-invalid>
        <FieldLabel htmlFor="state-invalid">Invalid</FieldLabel>
        <Input id="state-invalid" aria-invalid defaultValue="my project!" />
        <FieldError>Only letters, numbers, and dashes are allowed.</FieldError>
      </Field>
    </FieldGroup>
  )
}
