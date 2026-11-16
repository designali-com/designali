import {
  ArrowRight as ArrowRightIcon,
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

const apps = [
  { name: "Figma", color: "bg-primary" },
  { name: "Vercel", color: "bg-primary" },
  { name: "GitHub", color: "bg-primary" },
  { name: "Notion", color: "bg-primary" },
  { name: "Stripe", color: "bg-primary" },
  { name: "Cursor", color: "bg-primary" },
]

export default function IntegrationsDirectoryNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Integrations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              <ul className="grid grid-cols-3 gap-1">
                {apps.map((app) => (
                  <li key={app.name}>
                    <NavigationMenuLink
                      href="#"
                      className="flex-col gap-1.5 py-3"
                    >
                      <span
                        className={cn(
                          "flex size-8 items-center justify-center text-xs font-bold text-white",
                          app.color
                        )}
                      >
                        {app.name[0]}
                      </span>
                      {app.name}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <NavigationMenuLink href="#" className="justify-between border-t">
                Browse 120+ integrations <ArrowRightIcon />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Marketplace
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
