import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const cabins = [
  {
    value: "economy",
    label: "Economy",
    detail: "Carry-on included",
    price: "$412",
  },
  {
    value: "premium",
    label: "Premium economy",
    detail: "Extra legroom, priority boarding",
    price: "$689",
  },
  {
    value: "business",
    label: "Business",
    detail: "Lie-flat seat, lounge access",
    price: "$1,940",
  },
]

export default function CabinClassToggleGroup() {
  return (
    <ToggleGroup
      orientation="vertical"
      variant="outline"
      spacing={2}
      defaultValue={["premium"]}
      className="w-full max-w-sm"
    >
      {cabins.map((c) => (
        <ToggleGroupItem
          key={c.value}
          value={c.value}
          className="h-auto justify-between px-3 py-2.5 text-start"
        >
          <span className="flex flex-col">
            <span className="text-sm">{c.label}</span>
            <span className="font-normal text-muted-foreground">
              {c.detail}
            </span>
          </span>
          <span className="text-sm">{c.price}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
