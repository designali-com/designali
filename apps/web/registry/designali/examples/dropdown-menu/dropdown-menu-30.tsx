import {
  ChartBarIcon,
  LayoutDashboardIcon,
  LifeBuoyIcon,
  MenuIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const links = [
  { label: "Dashboard", icon: LayoutDashboardIcon, active: true },
  { label: "Orders", icon: ShoppingBagIcon, active: false },
  { label: "Customers", icon: UsersIcon, active: false },
  { label: "Reports", icon: ChartBarIcon, active: false },
]

export default function MobileHamburgerMenu() {
  return (
    <header className="flex w-full max-w-xs items-center justify-between border px-3 py-2">
      <span className="text-xs font-semibold">Fernway Admin</span>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Open navigation"
            />
          }
        >
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {links.map((link) => (
            <DropdownMenuItem
              key={link.label}
              nativeButton={false}
              render={
                <a href="#" aria-current={link.active ? "page" : undefined} />
              }
              className={cn(link.active && "font-medium")}
            >
              <link.icon />
              {link.label}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem nativeButton={false} render={<a href="#" />}>
            <LifeBuoyIcon />
            Help center
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
