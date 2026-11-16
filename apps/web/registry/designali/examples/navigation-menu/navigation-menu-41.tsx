import {
  Rss as RssIcon,
} from "@designali/icons"

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

const releases = [
  { version: "3.8", title: "40 new pricing blocks", date: "Nov 4" },
  { version: "3.7", title: "Dark mode for templates", date: "Oct 21" },
  { version: "3.6", title: "@designali/logos package", date: "Oct 2" },
]

export default function ChangelogNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Product
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>What&apos;s new</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col gap-1">
              {releases.map((r, i) => (
                <NavigationMenuLink key={r.version} href="#">
                  <Badge
                    variant={i === 0 ? "default" : "secondary"}
                    className="font-sans"
                  >
                    v{r.version}
                  </Badge>
                  <span className="flex-1 truncate font-medium">{r.title}</span>
                  <span className="text-muted-foreground">{r.date}</span>
                </NavigationMenuLink>
              ))}
              <NavigationMenuLink
                href="#"
                className="border-t text-muted-foreground"
              >
                <RssIcon /> Subscribe to updates
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
