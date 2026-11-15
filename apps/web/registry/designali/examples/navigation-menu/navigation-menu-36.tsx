import {
  CalculatorIcon,
  ClipboardListIcon,
  IdCardIcon,
  UserCheckIcon,
} from "lucide-react"

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
    role: "HR teams",
    value: "Automate onboarding and reviews",
    icon: ClipboardListIcon,
  },
  {
    role: "Managers",
    value: "Approve time off in one click",
    icon: UserCheckIcon,
  },
  {
    role: "Employees",
    value: "Payslips and benefits in one place",
    icon: IdCardIcon,
  },
  {
    role: "Finance",
    value: "Sync payroll with your ledger",
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
            Customers
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
