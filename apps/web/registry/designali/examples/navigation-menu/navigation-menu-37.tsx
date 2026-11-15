import {
  KeyRoundIcon,
  RadarIcon,
  ScrollTextIcon,
  ShieldCheckIcon,
  VaultIcon,
} from "lucide-react"

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

const capabilities = [
  { title: "Threat detection", icon: RadarIcon },
  { title: "Access control", icon: KeyRoundIcon },
  { title: "Secrets vault", icon: VaultIcon },
  { title: "Audit trail", icon: ScrollTextIcon },
]

export default function SecurityPlatformNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              <ul className="grid grid-cols-2 gap-1">
                {capabilities.map((c) => (
                  <li key={c.title}>
                    <NavigationMenuLink href="#">
                      <c.icon className="text-muted-foreground" />
                      {c.title}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-1 border-t px-2 pt-2">
                <ShieldCheckIcon className="size-3.5 text-muted-foreground" />
                {["SOC 2", "ISO 27001", "GDPR"].map((b) => (
                  <Badge key={b} variant="secondary">
                    {b}
                  </Badge>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Trust center
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
