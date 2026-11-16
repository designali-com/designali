import {
  Calendar as CalendarIcon,
  ChartColumn as ChartColumnIcon,
  FolderKanban as FolderKanbanIcon,
  Hexagon as HexagonIcon,
  Inbox as InboxIcon,
  LayoutDashboard as LayoutDashboardIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

const links = [
  { label: "Dashboard", icon: LayoutDashboardIcon, active: true },
  { label: "Projects", icon: FolderKanbanIcon, badge: "12" },
  { label: "Inbox", icon: InboxIcon, badge: "3" },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Reports", icon: ChartColumnIcon },
]

export default function MobileNavigationDrawer() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={<Button variant="outline" size="icon" aria-label="Open menu" />}
      >
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-center gap-2">
          <div className="flex size-7 items-center justify-center bg-primary text-primary-foreground">
            <HexagonIcon className="size-4" />
          </div>
          <DrawerTitle>Designali Studio</DrawerTitle>
          <DrawerDescription className="sr-only">
            Main navigation
          </DrawerDescription>
        </DrawerHeader>
        <nav className="flex flex-1 flex-col gap-1 p-2 pt-4">
          {links.map((link) => (
            <DrawerClose
              key={link.label}
              render={
                <Button
                  variant={link.active ? "secondary" : "ghost"}
                  className="justify-start"
                />
              }
            >
              <link.icon data-icon="inline-start" />
              <span className="flex-1 text-start">{link.label}</span>
              {link.badge && <Badge variant="outline">{link.badge}</Badge>}
            </DrawerClose>
          ))}
        </nav>
        <DrawerFooter className="flex-row items-center gap-3 border-t pt-4">
          <Avatar size="sm">
            <AvatarImage src="/ali.jpg" alt="Ali Imam" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate font-medium">Ali Imam</p>
            <p className="truncate text-muted-foreground">ali@designali.com</p>
          </div>
          <Button variant="ghost" size="icon-sm" aria-label="Sign out">
            <LogOutIcon />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
