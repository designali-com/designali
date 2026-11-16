import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"

const menus = {
  Explore: ["Designali Templates", "Blocks", "UI Designs"],
  Studio: ["Work by Ali Imam", "Services", "Contact"],
}

export default function CenterAlignedNav() {
  return (
    <NavigationMenu align="center">
      <NavigationMenuList>
        {Object.entries(menus).map(([label, links]) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-48 flex-col gap-1 text-center">
                {links.map((link) => (
                  <li key={link}>
                    <NavigationMenuLink href="#" className="justify-center">
                      {link}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
