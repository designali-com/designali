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
          Template
        </FieldLabel>
        <Input
          id="sku-code"
          defaultValue="DSG-TPL-PRO-01"
          className="font-sans"
        />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel
          htmlFor="sku-stock"
          className="w-24 flex-none text-muted-foreground"
        >
          Licenses
        </FieldLabel>
        <Input id="sku-stock" type="number" defaultValue={128} />
      </Field>
      <Field orientation="horizontal">
        <FieldLabel
          htmlFor="sku-weight"
          className="w-24 flex-none text-muted-foreground"
        >
          Download
        </FieldLabel>
        <InputGroup>
          <InputGroupInput id="sku-weight" defaultValue="48" />
          <InputGroupAddon align="inline-end">MB</InputGroupAddon>
        </InputGroup>
      </Field>
      <Field orientation="horizontal">
        <FieldLabel
          htmlFor="sku-active"
          className="w-24 flex-none text-muted-foreground"
        >
          On designali.com
        </FieldLabel>
        <Switch id="sku-active" defaultChecked />
      </Field>
    </FieldGroup>
  )
}
