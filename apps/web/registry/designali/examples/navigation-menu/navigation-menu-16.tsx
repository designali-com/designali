import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const destinations = [
  {
    city: "Brand identity",
    stays: "Dalim Agency",
    image: "/images/templates/dalim-agency-old.jpg",
  },
  { city: "Web design", stays: "Dalim Works", image: "/images/templates/dalim-works-old.jpg" },
  {
    city: "Icons",
    stays: "Dalim Icons",
    image: "/images/templates/dalim-icons-old.jpg",
  },
  {
    city: "Typography",
    stays: "Dalim Fonts",
    image: "/images/templates/dalim-fonts-old.jpg",
  },
]

export default function DestinationTilesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-72 grid-cols-2 gap-1 sm:w-96">
              {destinations.map((d) => (
                <li key={d.city}>
                  <NavigationMenuLink
                    href="#"
                    className="flex-col items-stretch gap-1.5"
                  >
                    <img
                      src={d.image}
                      alt={d.stays}
                      className="h-16 w-full bg-muted object-cover"
                    />
                    <span className="font-medium">{d.city}</span>
                    <span className="text-muted-foreground">{d.stays}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
