import {
  Bell as BellIcon,
  LogOut as LogOutIcon,
  Settings as SettingsIcon,
  User as UserIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { Separator } from "@workspace/ui/components/separator"

export default function EndAlignedAccountNav() {
  return (
    <div className="flex w-full max-w-md justify-end border-b pb-2">
      <NavigationMenu align="end">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              <BellIcon /> Alerts
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="gap-2">
              <Avatar className="size-6">
                <AvatarImage src="/ali.jpg" alt="Ali Imam" />
                <AvatarFallback className="text-[10px]">AI</AvatarFallback>
              </Avatar>
              Ali
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-56 flex-col gap-1">
                <div className="px-2 py-1.5">
                  <p className="text-xs font-medium">Ali Imam</p>
                  <p className="text-xs text-muted-foreground">
                    ali@designali.com
                  </p>
                </div>
                <Separator />
                <NavigationMenuLink href="#">
                  <UserIcon /> Profile
                </NavigationMenuLink>
                <NavigationMenuLink href="#">
                  <SettingsIcon /> Preferences
                </NavigationMenuLink>
                <NavigationMenuLink href="#" className="text-destructive">
                  <LogOutIcon /> Sign out
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
