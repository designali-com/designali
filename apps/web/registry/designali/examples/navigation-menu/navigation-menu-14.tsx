import {
  MapPin as MapPinIcon,
  Search as SearchIcon,
} from "@designali/icons"

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
  "Portfolio",
  "Design agency",
  "SaaS",
  "AI",
  "Resort",
  "Landing pages",
]

export default function RealEstateNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {["Templates", "Blocks"].map((mode) => (
          <NavigationMenuItem key={mode}>
            <NavigationMenuTrigger>{mode}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-64 flex-col gap-1">
                <NavigationMenuLink href="#" className="font-medium">
                  <SearchIcon />{" "}
                  {mode === "Templates" ? "Browse all templates" : "Browse all blocks"}
                </NavigationMenuLink>
                <p className="px-2 pt-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                  Popular categories
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
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
