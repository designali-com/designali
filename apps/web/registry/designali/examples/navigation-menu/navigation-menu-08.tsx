import {
  Folder as FolderIcon,
  House as HouseIcon,
  Inbox as InboxIcon,
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
              {["Designali rebrand", "Templates v2", "Docs site"].map((p) => (
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
