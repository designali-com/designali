import {
  Building as BuildingIcon,
  CreditCard as CreditCardIcon,
  House as HouseIcon,
  Landmark as LandmarkIcon,
  Lock as LockIcon,
  PiggyBank as PiggyBankIcon,
  Store as StoreIcon,
  Users as UsersIcon,
  Wallet as WalletIcon,
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

const products = {
  Products: [
    { title: "Pricing", icon: WalletIcon },
    { title: "Free blocks", icon: PiggyBankIcon },
    { title: "Templates Pro", icon: CreditCardIcon },
    { title: "Templates", icon: HouseIcon },
  ],
  Studio: [
    { title: "Brand identity", icon: BuildingIcon },
    { title: "Team license", icon: UsersIcon },
    { title: "Web development", icon: StoreIcon },
    { title: "Design systems", icon: LandmarkIcon },
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
