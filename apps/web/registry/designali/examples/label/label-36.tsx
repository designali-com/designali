import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const methods = [
  { value: "standard", label: "Standard", eta: "Dec 2 - Dec 5", price: "Free" },
  {
    value: "priority",
    label: "Priority",
    eta: "Nov 28 - Nov 30",
    price: "$7.50",
  },
  {
    value: "overnight",
    label: "Overnight",
    eta: "Tomorrow by 10am",
    price: "$24.00",
  },
]

export default function ShippingMethodRadioLabels() {
  return (
    <RadioGroup
      defaultValue="standard"
      className="w-full max-w-sm gap-0 divide-y border"
    >
      {methods.map((method) => (
        <div key={method.value} className="flex items-center gap-3 p-3">
          <RadioGroupItem id={"ship-" + method.value} value={method.value} />
          <Label
            htmlFor={"ship-" + method.value}
            className="flex-1 justify-between"
          >
            <span className="grid gap-1">
              <span className="font-medium">{method.label}</span>
              <span className="text-muted-foreground">{method.eta}</span>
            </span>
            <span className="font-medium">{method.price}</span>
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
