import { ShieldIcon } from "lucide-react"

import { FieldLegend, FieldSet } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const plans = [
  {
    value: "none",
    label: "No protection",
    hint: "Manufacturer warranty only",
    price: "",
  },
  {
    value: "1y",
    label: "1-year protection",
    hint: "Accidental damage included",
    price: "$29",
  },
  {
    value: "3y",
    label: "3-year protection",
    hint: "Damage, theft, and battery",
    price: "$69",
  },
]

export default function WarrantyAddOn() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label" className="flex items-center gap-1.5">
        <ShieldIcon className="size-3.5" />
        Add protection
      </FieldLegend>
      <RadioGroup defaultValue="none" className="gap-0 border">
        {plans.map((p) => (
          <label
            key={p.value}
            htmlFor={"warr-" + p.value}
            className="flex cursor-pointer items-start gap-3 border-b p-3 last:border-b-0 has-data-checked:bg-muted/40"
          >
            <RadioGroupItem
              value={p.value}
              id={"warr-" + p.value}
              className="mt-0.5"
            />
            <div className="flex-1">
              <p className="text-sm font-medium">{p.label}</p>
              <p className="text-xs text-muted-foreground">{p.hint}</p>
            </div>
            {p.price && <span className="text-sm font-medium">{p.price}</span>}
          </label>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
