import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const plans = [
  {
    value: "starter",
    name: "Starter",
    price: "$0",
    detail: "3 projects, 1 seat",
  },
  {
    value: "team",
    name: "Team",
    price: "$24",
    detail: "Unlimited projects, 10 seats",
  },
  {
    value: "scale",
    name: "Scale",
    price: "$79",
    detail: "SSO, audit log, 50 seats",
  },
]

export default function PlanCardRadioLabels() {
  return (
    <RadioGroup defaultValue="team" className="w-full max-w-sm gap-2">
      {plans.map((plan) => (
        <Label
          key={plan.value}
          htmlFor={"plan-" + plan.value}
          className="items-start gap-3 border p-3 has-data-checked:border-primary has-data-checked:bg-primary/5"
        >
          <RadioGroupItem
            id={"plan-" + plan.value}
            value={plan.value}
            className="mt-0.5"
          />
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-sm font-medium">{plan.name}</span>
            <span className="text-muted-foreground">{plan.detail}</span>
          </div>
          <span className="text-sm font-semibold">
            {plan.price}
            <span className="text-xs font-normal text-muted-foreground">
              /mo
            </span>
          </span>
        </Label>
      ))}
    </RadioGroup>
  )
}
