"use client"

import * as React from "react"
import {
  Bell as BellIcon,
  Camera as CameraIcon,
  Gift as GiftIcon,
  Heart as HeartIcon,
  Leaf as LeafIcon,
  Rocket as RocketIcon,
  Shapes as ShapesIcon,
  Star as StarIcon,
  Zap as ZapIcon,
} from "@designali/icons"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"

const icons = [
  { name: "Heart", icon: HeartIcon },
  { name: "Star", icon: StarIcon },
  { name: "Bell", icon: BellIcon },
  { name: "Camera", icon: CameraIcon },
  { name: "Zap", icon: ZapIcon },
  { name: "Rocket", icon: RocketIcon },
  { name: "Leaf", icon: LeafIcon },
  { name: "Gift", icon: GiftIcon },
]

type IconOption = (typeof icons)[number]

export default function IconPickerSearch() {
  const [value, setValue] = React.useState<IconOption | null>(icons[5]!)
  return (
    <div className="flex w-full max-w-xs items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center border bg-muted">
        {value ? (
          <value.icon className="size-5" />
        ) : (
          <ShapesIcon className="size-5 text-muted-foreground" />
        )}
      </div>
      <Combobox
        items={icons}
        value={value}
        onValueChange={setValue}
        itemToStringLabel={(o: IconOption) => o.name}
      >
        <ComboboxInput placeholder="Search icons" className="w-full" />
        <ComboboxContent>
          <ComboboxEmpty>No icons found.</ComboboxEmpty>
          <ComboboxList>
            {(o: IconOption) => (
              <ComboboxItem key={o.name} value={o}>
                <o.icon />
                {o.name}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
