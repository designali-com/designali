import { CreditCardIcon, LandmarkIcon, WalletIcon } from "lucide-react"

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

const methods = [
  {
    value: "card",
    label: "Credit or debit card",
    hint: "Visa ending in 4242",
    icon: CreditCardIcon,
  },
  {
    value: "bank",
    label: "Bank transfer",
    hint: "1-2 days to clear",
    icon: LandmarkIcon,
  },
  {
    value: "wallet",
    label: "Store credit",
    hint: "$32.50 available",
    icon: WalletIcon,
  },
]

export default function PaymentMethodPicker() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Payment method</FieldLegend>
      <RadioGroup defaultValue="card">
        {methods.map((m) => (
          <FieldLabel key={m.value} htmlFor={"pay-" + m.value}>
            <Field orientation="horizontal">
              <m.icon className="size-4 text-muted-foreground" />
              <FieldContent>
                <FieldTitle>{m.label}</FieldTitle>
                <FieldDescription>{m.hint}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={m.value} id={"pay-" + m.value} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
