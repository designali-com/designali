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

const methods = [
  {
    value: "standard",
    label: "Standard",
    eta: "4-6 business days",
    price: "Free",
  },
  {
    value: "express",
    label: "Express",
    eta: "2-3 business days",
    price: "$9.00",
  },
  {
    value: "overnight",
    label: "Overnight",
    eta: "Next business day",
    price: "$24.00",
  },
]

export default function ShippingMethodCards() {
  return (
    <RadioGroup defaultValue="standard" className="w-full max-w-sm">
      {methods.map((method) => (
        <FieldLabel key={method.value} htmlFor={"ship-" + method.value}>
          <Field orientation="horizontal">
            <RadioGroupItem value={method.value} id={"ship-" + method.value} />
            <FieldContent>
              <FieldTitle>{method.label}</FieldTitle>
              <FieldDescription>{method.eta}</FieldDescription>
            </FieldContent>
            <span className="text-sm font-medium">{method.price}</span>
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  )
}
