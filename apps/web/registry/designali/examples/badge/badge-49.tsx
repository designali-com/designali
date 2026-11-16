import {
  Car as CarIcon,
  Coffee as CoffeeIcon,
  PawPrint as PawPrintIcon,
  Snowflake as SnowflakeIcon,
  Wifi as WifiIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"

const amenities = [
  { label: "Wi-Fi", icon: WifiIcon },
  { label: "Parking", icon: CarIcon },
  { label: "Coffee", icon: CoffeeIcon },
  { label: "Pets allowed", icon: PawPrintIcon },
  { label: "Air conditioning", icon: SnowflakeIcon },
]

export default function AmenityIconBadges() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div>
        <p className="text-sm font-semibold">Resort template · Demo listing</p>
        <p className="text-xs text-muted-foreground">
          Designali template sample · $128 / night
        </p>
      </div>
      <div className="flex gap-1.5">
        {amenities.map((amenity) => (
          <Badge
            key={amenity.label}
            variant="secondary"
            className="size-7 p-0 [&>svg]:size-3.5!"
            title={amenity.label}
            aria-label={amenity.label}
          >
            <amenity.icon />
          </Badge>
        ))}
      </div>
    </div>
  )
}
