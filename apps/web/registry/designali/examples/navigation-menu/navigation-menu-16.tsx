import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"

const destinations = [
  {
    city: "Brand identity",
    stays: "Dalim Agency",
    gradient: "from-amber-300 to-orange-500",
  },
  { city: "Web design", stays: "Dalim Works", gradient: "from-rose-300 to-pink-600" },
  {
    city: "Icons",
    stays: "Dalim Icons",
    gradient: "from-sky-300 to-indigo-600",
  },
  {
    city: "Typography",
    stays: "Dalim Fonts",
    gradient: "from-emerald-300 to-teal-600",
  },
]

export default function DestinationTilesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 grid-cols-2 gap-1 sm:w-96">
              {destinations.map((d) => (
                <li key={d.city}>
                  <NavigationMenuLink
                    href="#"
                    className="flex-col items-stretch gap-1.5"
                  >
                    <span
                      className={cn("h-16 bg-gradient-to-br", d.gradient)}
                    />
                    <span className="font-medium">{d.city}</span>
                    <span className="text-muted-foreground">{d.stays}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
