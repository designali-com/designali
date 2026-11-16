import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

export default function ShippingAddressFields() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Shipping address</FieldLegend>
      <FieldGroup className="gap-4">
        <div className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="ship-first">First name</FieldLabel>
            <Input
              id="ship-first"
              autoComplete="given-name"
              defaultValue="Ali"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="ship-last">Last name</FieldLabel>
            <Input
              id="ship-last"
              autoComplete="family-name"
              defaultValue="Imam"
            />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="ship-street">Street address</FieldLabel>
          <Input
            id="ship-street"
            autoComplete="street-address"
            placeholder="221 Willow Lane, Apt 4"
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field>
            <FieldLabel htmlFor="ship-country">Country</FieldLabel>
            <NativeSelect id="ship-country" defaultValue="ca">
              <NativeSelectOption value="ca">Canada</NativeSelectOption>
              <NativeSelectOption value="us">United States</NativeSelectOption>
              <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
              <NativeSelectOption value="ie">Ireland</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel htmlFor="ship-postal">Postal code</FieldLabel>
            <Input
              id="ship-postal"
              autoComplete="postal-code"
              placeholder="M5V 2T6"
            />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}
