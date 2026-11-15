import { FolderIcon, HouseIcon, InboxIcon } from "lucide-react"

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

export default function VerticalNavigation() {
  return (
    <NavigationMenu
      orientation="vertical"
      className="w-44 max-w-none items-stretch border p-1"
    >
      <NavigationMenuList className="w-full flex-col items-stretch">
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            active
            className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}
          >
            <HouseIcon /> Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-full justify-start">
            <FolderIcon className="me-2 size-4" /> Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-48 flex-col gap-1">
              {["Atlas rebrand", "Checkout v2", "Help center"].map((p) => (
                <li key={p}>
                  <NavigationMenuLink href="#">{p}</NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={cn(navigationMenuTriggerStyle(), "w-full justify-start")}
          >
            <InboxIcon /> Inbox
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
