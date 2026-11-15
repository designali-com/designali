import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Switch } from "@workspace/ui/components/switch"

export default function InlineLabelColumnForm() {
  return (
    <FieldGroup className="w-full max-w-md gap-3">
      <Field orientation="horizontal">
        <FieldLabel
          htmlFor="sku-code"
          className="w-24 flex-none text-muted-foreground"
        >
          SKU
        </FieldLabel>
        <Input
          id="sku-code"
          defaultValue="TEE-ORG-M-BLK"
          className="font-mono"
        />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel
          htmlFor="sku-stock"
          className="w-24 flex-none text-muted-foreground"
        >
          Stock
        </FieldLabel>
        <Input id="sku-stock" type="number" defaultValue={128} />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel
          htmlFor="sku-weight"
          className="w-24 flex-none text-muted-foreground"
        >
          Weight
        </FieldLabel>
        <InputGroup>
          <InputGroupInput id="sku-weight" defaultValue="0.24" />
          <InputGroupAddon align="inline-end">kg</InputGroupAddon>
        </InputGroup>
      </Field>
      <Field orientation="horizontal">
        <FieldLabel
          htmlFor="sku-active"
          className="w-24 flex-none text-muted-foreground"
        >
          Visible
        </FieldLabel>
        <Switch id="sku-active" defaultChecked />
      </Field>
    </FieldGroup>
  )
}
