import { Badge } from "@workspace/ui/components/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const items = [
  { title: "Blocks", description: "460+ production-ready sections" },
  {
    title: "Landing pages",
    description: "240+ pages ready to ship",
    badge: "New",
  },
  { title: "Icons", description: "4000+ icons for React" },
  { title: "AI workflows", description: "From design to code", badge: "Beta" },
]

export default function NewFeatureBadgesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Designali
            <span className="ms-1.5 size-1.5 rounded-full bg-primary" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-72 flex-col gap-1">
              {items.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink
                    href="#"
                    className="flex-col items-start gap-0.5"
                  >
                    <span className="flex items-center gap-1.5 font-medium">
                      {item.title}
                      {item.badge && (
                        <Badge
                          variant={item.badge === "New" ? "default" : "outline"}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </span>
                    <span className="text-muted-foreground">
                      {item.description}
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Templates
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
