import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

export default function BillingIntervalChoiceCards() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Designali Pro billing</FieldLegend>
      <RadioGroup defaultValue="yearly">
        <FieldLabel htmlFor="interval-monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="interval-monthly" />
            <FieldContent>
              <FieldTitle>Monthly</FieldTitle>
              <FieldDescription>
                $18 per seat for templates, blocks and icons
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="interval-yearly">
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="interval-yearly" />
            <FieldContent>
              <FieldTitle>
                Yearly <Badge variant="secondary">Save 20%</Badge>
              </FieldTitle>
              <FieldDescription>
                $172 per seat, full designali.com library for a year
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </RadioGroup>
    </FieldSet>
  )
}
