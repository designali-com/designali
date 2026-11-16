"use client"

import * as React from "react"
import {
  Fish as FishIcon,
  Leaf as LeafIcon,
  MilkOff as MilkOffIcon,
  Sprout as SproutIcon,
  WheatOff as WheatOffIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const options = [
  { value: "vegetarian", label: "Vegetarian", icon: LeafIcon },
  { value: "vegan", label: "Vegan", icon: SproutIcon },
  { value: "gluten", label: "Gluten free", icon: WheatOffIcon },
  { value: "dairy", label: "Dairy free", icon: MilkOffIcon },
  { value: "fish", label: "Pescatarian", icon: FishIcon },
]

export default function DietaryPreferenceToggleGroup() {
  const [prefs, setPrefs] = React.useState<string[]>(["vegetarian"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div>
        <p className="text-sm font-medium">Any dietary preferences?</p>
        <p className="text-xs text-muted-foreground">
          We&apos;ll tailor weekly recipes to match.
        </p>
      </div>
      <ToggleGroup
        multiple
        variant="outline"
        spacing={2}
        value={prefs}
        onValueChange={setPrefs}
        className="flex-wrap"
      >
        {options.map((o) => (
          <ToggleGroupItem
            key={o.value}
            value={o.value}
            className="rounded-full"
          >
            <o.icon data-icon="inline-start" />
            {o.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Button size="sm" className="self-start">
        Continue ({prefs.length} selected)
      </Button>
    </div>
  )
}
