import {
  PenTool as PenToolIcon,
  LayoutTemplate as LayoutTemplateIcon,
  Code as CodeIcon,
  Box as BoxIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const services = [
  { title: "Brand identity", hours: "Logos", icon: PenToolIcon },
  { title: "UI/UX design", hours: "Figma", icon: LayoutTemplateIcon },
  { title: "Web development", hours: "Next.js", icon: CodeIcon },
  { title: "CGI & motion", hours: "3D", icon: BoxIcon },
]

export default function RestaurantMenuNav() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-2">
      <span className="font-sans text-base italic">designali</span>
      <div className="flex items-center gap-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-56 flex-col gap-1">
                  {services.map((s) => (
                    <li key={s.title}>
                      <NavigationMenuLink href="#">
                        <s.icon className="text-muted-foreground" />
                        <span className="flex-1 font-medium">{s.title}</span>
                        <span className="text-muted-foreground tabular-nums">
                          {s.hours}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className={navigationMenuTriggerStyle()}
              >
                Work
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button size="sm">Book a call</Button>
      </div>
    </div>
  )
}
