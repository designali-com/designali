import { MapPinIcon, SearchIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const areas = [
  "Harbor District",
  "Old Town",
  "Riverside",
  "Maple Heights",
  "Westgate",
  "Cedar Park",
]

export default function RealEstateNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {["Buy", "Rent"].map((mode) => (
          <NavigationMenuItem key={mode}>
            <NavigationMenuTrigger>{mode}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-64 flex-col gap-1">
                <NavigationMenuLink href="#" className="font-medium">
                  <SearchIcon />{" "}
                  {mode === "Buy" ? "Homes for sale" : "Homes for rent"}
                </NavigationMenuLink>
                <p className="px-2 pt-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                  Popular areas
                </p>
                <ul className="grid grid-cols-2">
                  {areas.map((area) => (
                    <li key={area}>
                      <NavigationMenuLink href="#" className="py-1.5">
                        <MapPinIcon className="size-3.5 text-muted-foreground" />
                        {area}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Sell
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
