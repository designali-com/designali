import { Badge } from "@workspace/ui/components/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

export default function DisabledTriggerNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-52 flex-col gap-1">
              {["Invoice generator", "Expense tracker", "Tax estimator"].map(
                (t) => (
                  <li key={t}>
                    <NavigationMenuLink href="#">{t}</NavigationMenuLink>
                  </li>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger disabled>
            Marketplace
            <Badge variant="outline" className="ms-1.5">
              Soon
            </Badge>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <p className="w-48 p-2 text-xs">Coming in spring.</p>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Guides
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
