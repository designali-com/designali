import { StethoscopeIcon } from "lucide-react"

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
  { name: "Dr. Amara Osei", specialty: "Cardiology" },
  { name: "Dr. Tomas Lindqvist", specialty: "Dermatology" },
  { name: "Dr. Rina Patel", specialty: "Pediatrics" },
]

export default function ClinicDoctorsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Find a doctor</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col gap-1">
              {doctors.map((d) => (
                <NavigationMenuLink key={d.name} href="#">
                  <Avatar className="size-8">
                    <AvatarFallback>
                      {d.name
                        .split(" ")
                        .slice(1)
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
                <StethoscopeIcon /> Browse all specialties
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Locations
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
