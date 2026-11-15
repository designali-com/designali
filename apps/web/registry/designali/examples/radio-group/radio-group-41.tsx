import { InfoIcon } from "lucide-react"

import { Field, FieldLabel, FieldTitle } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const plans = [
  { value: "starter", label: "Starter", price: "$0" },
  { value: "team", label: "Team", price: "$18 / seat" },
  { value: "scale", label: "Scale", price: "$32 / seat" },
]

export default function ReadOnlyPlanSelection() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <RadioGroup defaultValue="team" readOnly>
        {plans.map((p) => (
          <FieldLabel key={p.value} htmlFor={"ro-" + p.value}>
            <Field orientation="horizontal">
              <RadioGroupItem value={p.value} id={"ro-" + p.value} />
              <FieldTitle>{p.label}</FieldTitle>
              <span className="ms-auto text-sm text-muted-foreground">
                {p.price}
              </span>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <InfoIcon className="size-3.5" />
        Only billing admins can change the plan.
      </p>
    </div>
  )
}
