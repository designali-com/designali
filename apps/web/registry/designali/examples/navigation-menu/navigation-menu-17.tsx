import {
  BuildingIcon,
  CreditCardIcon,
  HouseIcon,
  LandmarkIcon,
  LockIcon,
  PiggyBankIcon,
  StoreIcon,
  UsersIcon,
  WalletIcon,
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

const products = {
  Personal: [
    { title: "Checking", icon: WalletIcon },
    { title: "Savings", icon: PiggyBankIcon },
    { title: "Credit cards", icon: CreditCardIcon },
    { title: "Mortgages", icon: HouseIcon },
  ],
  Business: [
    { title: "Business accounts", icon: BuildingIcon },
    { title: "Payroll", icon: UsersIcon },
    { title: "Merchant services", icon: StoreIcon },
    { title: "Lending", icon: LandmarkIcon },
  ],
}

export default function BankingNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(products).map(([segment, items]) => (
          <NavigationMenuItem key={segment}>
            <NavigationMenuTrigger>{segment}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-72 grid-cols-2 gap-1">
                {items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink href="#">
                      <item.icon className="text-muted-foreground" />
                      {item.title}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            <LockIcon /> Log in
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
