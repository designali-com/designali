import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function ShippingAddressInputs() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Shipping address</FieldLegend>
      <div className="grid grid-cols-2 gap-3">
        <Field className="col-span-2">
          <FieldLabel htmlFor="ship-name">Full name</FieldLabel>
          <Input
            id="ship-name"
            autoComplete="name"
            placeholder="Ali Imam"
          />
        </Field>
        <Field className="col-span-2">
          <FieldLabel htmlFor="ship-street">Street address</FieldLabel>
          <Input
            id="ship-street"
            autoComplete="address-line1"
            placeholder="221 Larkspur Ave, Apt 4"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="ship-city">City</FieldLabel>
          <Input
            id="ship-city"
            autoComplete="address-level2"
            placeholder="Portland"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="ship-zip">ZIP code</FieldLabel>
          <Input
            id="ship-zip"
            autoComplete="postal-code"
            inputMode="numeric"
            placeholder="97205"
          />
        </Field>
      </div>
    </FieldSet>
  )
}
