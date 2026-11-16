import {
  Car as CarIcon,
  Coffee as CoffeeIcon,
  Dumbbell as DumbbellIcon,
  PawPrint as PawPrintIcon,
  Waves as WavesIcon,
  Wifi as WifiIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"

const amenities = [
  { label: "Wi-Fi", icon: WifiIcon },
  { label: "Parking", icon: CarIcon },
  { label: "Pool", icon: WavesIcon },
  { label: "Gym", icon: DumbbellIcon },
  { label: "Breakfast", icon: CoffeeIcon },
  { label: "Pets", icon: PawPrintIcon },
]

export default function HotelAmenityToggles() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <p className="text-sm font-medium">Amenities</p>
      <div className="grid grid-cols-3 gap-2">
        {amenities.map((a) => (
          <Toggle
            key={a.label}
            variant="outline"
            className="h-auto flex-col gap-1.5 py-3"
          >
            <a.icon />
            {a.label}
          </Toggle>
        ))}
      </div>
    </div>
  )
}
