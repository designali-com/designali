import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const links = [
  { label: "Dashboard", icon: HomeIcon, active: true },
  { label: "Inbox", icon: InboxIcon, badge: "12" },
  { label: "Projects", icon: FolderIcon },
  { label: "Calendar", icon: CalendarIcon },
  { label: "Reports", icon: ChartBarIcon },
]

export default function MobileNavigationSheet() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="outline" size="icon" aria-label="Open menu" />}
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Northwind Studio</SheetTitle>
          <SheetDescription>Workspace navigation</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-0.5 px-2">
          {links.map((link) => (
            <SheetClose
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
            </SheetClose>
          ))}
        </nav>
        <SheetFooter className="border-t">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback>LP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">Lena Park</span>
              <span className="text-muted-foreground">
                lena@northwind.studio
              </span>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
