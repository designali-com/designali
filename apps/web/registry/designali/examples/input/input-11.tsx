import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"

export default function CurrencyAmountInput() {
  return (
    <Field className="w-full max-w-[14rem]">
      <FieldLabel htmlFor="amount">Designali Pro monthly price</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="amount"
          type="number"
          inputMode="decimal"
          min={0}
          step="0.01"
          defaultValue="49.00"
          className="tabular-nums"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
