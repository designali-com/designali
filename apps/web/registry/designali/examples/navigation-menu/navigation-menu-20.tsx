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

const work = [
  {
    client: "Dalim Agency",
    type: "Brand identity",
    gradient: "from-muted-foreground to-chart-3",
  },
  {
    client: "Dalim Fonts",
    type: "Web design",
    gradient: "from-chart-1 to-chart-2",
  },
]

const services = ["Brand identity", "UI/UX design", "Web development", "CGI & motion"]

export default function AgencyWorkNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-1 sm:w-[30rem] sm:grid-cols-[1fr_10rem]">
              <ul className="grid grid-cols-2 gap-1">
                {work.map((w) => (
                  <li key={w.client}>
                    <NavigationMenuLink
                      href="#"
                      className="flex-col items-stretch gap-1"
                    >
                      <span
                        className={cn(
                          "aspect-[4/3] bg-gradient-to-br",
                          w.gradient
                        )}
                      />
                      <span className="font-medium">{w.client}</span>
                      <span className="text-muted-foreground">{w.type}</span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-0.5 border-t pt-1 sm:border-s sm:border-t-0 sm:ps-1 sm:pt-0">
                {services.map((s) => (
                  <li key={s}>
                    <NavigationMenuLink href="#">{s}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Studio
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
