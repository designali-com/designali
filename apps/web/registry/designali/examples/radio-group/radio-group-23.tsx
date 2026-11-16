import {
  Plane as PlaneIcon,
} from "@designali/icons"

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

const cabins = [
  { value: "economy", label: "Economy", fare: "$412", perks: "1 carry-on" },
  {
    value: "premium",
    label: "Premium economy",
    fare: "$689",
    perks: "Extra legroom, 2 bags",
  },
  {
    value: "business",
    label: "Business",
    fare: "$1,940",
    perks: "Lie-flat seat, lounge",
  },
]

export default function FlightCabinClass() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-2 text-sm">
        <PlaneIcon className="size-4" />
        <span className="font-medium">Lisbon to Reykjavik</span>
        <span className="text-muted-foreground">&middot; Dec 4</span>
      </div>
      <RadioGroup defaultValue="economy">
        {cabins.map((c) => (
          <FieldLabel key={c.value} htmlFor={"cabin-" + c.value}>
            <Field orientation="horizontal">
              <RadioGroupItem value={c.value} id={"cabin-" + c.value} />
              <FieldContent>
                <FieldTitle>{c.label}</FieldTitle>
                <FieldDescription>{c.perks}</FieldDescription>
              </FieldContent>
              <span className="text-sm font-semibold">{c.fare}</span>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </div>
  )
}
