import { SearchIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

export default function SearchShortcutNav() {
  return (
    <div className="flex w-full max-w-lg items-center gap-2 border-b pb-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-52 flex-col gap-1">
                {["Introduction", "Installation", "Theming", "CLI"].map((d) => (
                  <li key={d}>
                    <NavigationMenuLink href="#">{d}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden sm:block">
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Examples
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        variant="outline"
        size="sm"
        className="ms-auto w-36 justify-start text-muted-foreground sm:w-48"
      >
        <SearchIcon data-icon="inline-start" />
        Search docs
        <KbdGroup className="ms-auto">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
    </div>
  )
}
