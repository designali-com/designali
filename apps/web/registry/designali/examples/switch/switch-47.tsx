import { LeafIcon, TruckIcon } from "lucide-react"

import { Switch } from "@workspace/ui/components/switch"

const options = [
  {
    id: "express",
    title: "Express delivery",
    description: "Arrives tomorrow before 12 PM",
    icon: TruckIcon,
    on: false,
  },
  {
    id: "eco",
    title: "Eco packaging",
    description: "Plastic-free, compostable materials",
    icon: LeafIcon,
    on: true,
  },
]

export default function SegmentedSwitchCards() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {options.map((option) => (
        <label
          key={option.id}
          htmlFor={"card-" + option.id}
          className="flex cursor-pointer items-start gap-3 border p-4 transition-colors hover:bg-muted/40 has-data-checked:border-primary has-data-checked:bg-primary/5"
        >
          <option.icon className="mt-0.5 size-4" />
          <div className="flex-1">
            <p className="text-sm font-medium">{option.title}</p>
            <p className="text-xs text-muted-foreground">
              {option.description}
            </p>
          </div>
          <Switch id={"card-" + option.id} defaultChecked={option.on} />
        </label>
      ))}
    </div>
  )
}
