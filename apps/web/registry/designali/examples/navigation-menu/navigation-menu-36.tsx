import {
  Calculator as CalculatorIcon,
  ClipboardList as ClipboardListIcon,
  IdCard as IdCardIcon,
  UserCheck as UserCheckIcon,
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

const roles = [
  {
    role: "Designers",
    value: "Figma files for every Designali block",
    icon: ClipboardListIcon,
  },
  {
    role: "Developers",
    value: "Copy-paste Next.js and Tailwind CSS code",
    icon: UserCheckIcon,
  },
  {
    role: "Founders",
    value: "Launch a landing page in a day",
    icon: IdCardIcon,
  },
  {
    role: "Agencies",
    value: "Ship client work faster with templates",
    icon: CalculatorIcon,
  },
]

export default function RoleBasedSolutionsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For your team</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 gap-1 sm:w-[28rem] sm:grid-cols-2">
              {roles.map((r) => (
                <li key={r.role}>
                  <NavigationMenuLink
                    href="#"
                    className="flex-col items-start gap-1 border border-transparent p-3 hover:border-border"
                  >
                    <r.icon className="text-muted-foreground" />
                    <span className="font-medium">{r.role}</span>
                    <span className="text-muted-foreground">{r.value}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Work
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
