import {
  CreditCard as CreditCardIcon,
  ExternalLink as ExternalLinkIcon,
  Rocket as RocketIcon,
  Shield as ShieldIcon,
  Wrench as WrenchIcon,
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

const topics = [
  { title: "Getting started", icon: RocketIcon },
  { title: "Account & billing", icon: CreditCardIcon },
  { title: "Troubleshooting", icon: WrenchIcon },
  { title: "Privacy & security", icon: ShieldIcon },
]

export default function SupportCenterNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Support</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col">
              <ul className="flex flex-col gap-1">
                {topics.map((t) => (
                  <li key={t.title}>
                    <NavigationMenuLink href="#">
                      <t.icon className="text-muted-foreground" />
                      {t.title}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <NavigationMenuLink href="#" className="mt-1 border-t pt-2.5">
                <span className="size-2 rounded-full bg-primary" />
                All systems operational
                <ExternalLinkIcon className="ms-auto text-muted-foreground" />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Community
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
