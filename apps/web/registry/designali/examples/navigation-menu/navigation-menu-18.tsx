import {
  Users as UsersIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
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

const doctors = [
  { name: "Ali Imam", specialty: "Founder · Design engineer" },
  { name: "Brand Designer", specialty: "Brand identity" },
  { name: "Motion Designer", specialty: "CGI & motion" },
]

export default function ClinicDoctorsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Meet the studio</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col gap-1">
              {doctors.map((d) => (
                <NavigationMenuLink key={d.name} href="#">
                  <Avatar className="size-8">
                    <AvatarFallback>
                      {d.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="flex flex-col">
                    <span className="font-medium">{d.name}</span>
                    <span className="text-muted-foreground">{d.specialty}</span>
                  </span>
                </NavigationMenuLink>
              ))}
              <Separator className="my-1" />
              <NavigationMenuLink href="#">
                <UsersIcon /> Browse all services
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
