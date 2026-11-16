import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const plans = [
  {
    value: "starter",
    name: "Designali Free",
    price: "$0",
    detail: "Free blocks and 4000+ icons",
  },
  {
    value: "team",
    name: "Designali Pro",
    price: "$24",
    detail: "All 460+ blocks and templates",
  },
  {
    value: "scale",
    name: "Designali Studio",
    price: "$79",
    detail: "Pro plus custom design by Ali Imam",
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
