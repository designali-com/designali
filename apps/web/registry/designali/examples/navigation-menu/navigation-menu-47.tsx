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

const primary = ["Home", "Explore"]
const secondary = ["Library", "Following", "Saved", "History"]

export default function ResponsiveOverflowNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {primary.map((link, i) => (
          <NavigationMenuItem key={link}>
            <NavigationMenuLink
              href="#"
              active={i === 0}
              className={navigationMenuTriggerStyle()}
            >
              {link}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        {secondary.slice(0, 2).map((link) => (
          <NavigationMenuItem key={link} className="hidden sm:block">
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              {link}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-40 flex-col gap-1">
              {secondary.map((link, i) => (
                <li key={link} className={cn(i < 2 && "sm:hidden")}>
                  <NavigationMenuLink href="#">{link}</NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
