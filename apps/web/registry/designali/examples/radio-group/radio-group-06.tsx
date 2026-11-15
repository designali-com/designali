import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function BillingCycleRadio() {
  return (
    <RadioGroup
      defaultValue="yearly"
      className="grid w-full max-w-sm grid-cols-2"
    >
      <FieldLabel htmlFor="cycle-monthly">
        <Field orientation="horizontal">
          <RadioGroupItem value="monthly" id="cycle-monthly" />
          <FieldContent>
            <FieldTitle>Monthly</FieldTitle>
            <FieldDescription>$12 / month</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="cycle-yearly">
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="cycle-yearly" />
          <FieldContent>
            <FieldTitle>
              Yearly
              <Badge variant="secondary">-20%</Badge>
            </FieldTitle>
            <FieldDescription>$115 / year</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </RadioGroup>
  )
}
