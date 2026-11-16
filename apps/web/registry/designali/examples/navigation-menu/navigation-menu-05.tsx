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

const columns = [
  { heading: "Templates", links: ["Portfolio", "Agency", "SaaS", "AI"] },
  { heading: "Assets", links: ["Icons", "Logos", "Illustrations"] },
]

export default function StoreCategoriesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 grid-cols-2 gap-3 p-2 sm:w-[30rem] sm:grid-cols-3">
              {columns.map((col) => (
                <div key={col.heading} className="flex flex-col gap-0.5">
                  <p className="px-2 pb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                    {col.heading}
                  </p>
                  {col.links.map((link) => (
                    <NavigationMenuLink key={link} href="#" className="py-1.5">
                      {link}
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
              <NavigationMenuLink
                href="#"
                className="col-span-2 flex-col items-start justify-end gap-1 bg-gradient-to-br from-primary/20 to-chart-1 p-3 text-chart-5 sm:col-span-1"
              >
                <span className="text-[11px] font-semibold uppercase">
                  New drop
                </span>
                <span className="text-sm font-semibold">
                  Fresh Designali templates
                </span>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Services
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-destructive dark:text-destructive"
            )}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
