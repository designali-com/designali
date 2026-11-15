import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function ResponsiveOrientationFields() {
  return (
    <FieldGroup className="w-full max-w-lg">
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="resp-company">Company name</FieldLabel>
          <FieldDescription>Appears on invoices.</FieldDescription>
        </FieldContent>
        <Input
          id="resp-company"
          defaultValue="Bramble & Oak Ltd"
          className="@md/field-group:w-56"
        />
      </Field>
      <FieldSeparator />
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="resp-vat">VAT number</FieldLabel>
          <FieldDescription>Required for EU businesses.</FieldDescription>
        </FieldContent>
        <Input
          id="resp-vat"
          placeholder="GB123456789"
          className="@md/field-group:w-56"
        />
      </Field>
      <FieldSeparator />
      <Field orientation="responsive">
        <FieldContent>
          <FieldLabel htmlFor="resp-email">Billing email</FieldLabel>
          <FieldDescription>Receipts are sent here.</FieldDescription>
        </FieldContent>
        <Input
          id="resp-email"
          type="email"
          defaultValue="accounts@brambleoak.co"
          className="@md/field-group:w-56"
        />
      </Field>
    </FieldGroup>
  )
}
