import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const menus = [
  {
    label: "Products",
    groups: [
      { heading: "Design", links: ["Templates", "UI Designs", "Landing pages"] },
      { heading: "Assets", links: ["Icons & logos", "Illustrations"] },
    ],
  },
  {
    label: "Designali Studio",
    groups: [
      {
        heading: "Services",
        links: ["Brand identity", "Web development", "CGI & motion"],
      },
      { heading: "Resources", links: ["Docs", "Blog"] },
    ],
  },
]

export default function UniversityNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.label}>
            <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-72 grid-cols-2 gap-2 sm:w-80">
                {menu.groups.map((g) => (
                  <div key={g.heading} className="flex flex-col gap-0.5">
                    <p className="px-2 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                      {g.heading}
                    </p>
                    {g.links.map((link) => (
                      <NavigationMenuLink
                        key={link}
                        href="#"
                        className="py-1.5"
                      >
                        {link}
                      </NavigationMenuLink>
                    ))}
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
