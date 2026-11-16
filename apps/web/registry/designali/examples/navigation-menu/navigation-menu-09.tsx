import {
  Calendar as CalendarIcon,
  Folder as FolderIcon,
  LayoutDashboard as LayoutDashboardIcon,
  MessageSquare as MessageSquareIcon,
  Settings as SettingsIcon,
} from "@designali/icons"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"

const links = [
  { label: "Dashboard", icon: LayoutDashboardIcon },
  { label: "Messages", icon: MessageSquareIcon },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Files", icon: FolderIcon },
  { label: "Settings", icon: SettingsIcon },
]

export default function IconOnlyNav() {
  return (
    <NavigationMenu className="border p-1">
      <NavigationMenuList className="gap-1">
        {links.map((link, i) => (
          <NavigationMenuItem key={link.label}>
            <NavigationMenuLink
              href="#"
              aria-label={link.label}
              title={link.label}
              active={i === 0}
              className={cn(navigationMenuTriggerStyle(), "size-9 px-0")}
            >
              <link.icon />
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
