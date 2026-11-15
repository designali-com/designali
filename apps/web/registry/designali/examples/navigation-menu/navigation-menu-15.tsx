import {
  CoffeeIcon,
  SaladIcon,
  UtensilsCrossedIcon,
  WineIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const services = [
  { title: "Breakfast", hours: "7:00 - 11:00", icon: CoffeeIcon },
  { title: "Lunch", hours: "12:00 - 15:00", icon: SaladIcon },
  { title: "Dinner", hours: "18:00 - 22:30", icon: UtensilsCrossedIcon },
  { title: "Wine list", hours: "All day", icon: WineIcon },
]

export default function RestaurantMenuNav() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2">
      <span className="font-serif text-base italic">Olive &amp; Ash</span>
      <div className="flex items-center gap-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-56 flex-col gap-1">
                  {services.map((s) => (
                    <li key={s.title}>
                      <NavigationMenuLink href="#">
                        <s.icon className="text-muted-foreground" />
                        <span className="flex-1 font-medium">{s.title}</span>
                        <span className="text-muted-foreground tabular-nums">
                          {s.hours}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className={navigationMenuTriggerStyle()}
              >
                Visit
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button size="sm">Reserve</Button>
      </div>
    </div>
  )
}
