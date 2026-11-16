import {
  Waves as WavesIcon,
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

export default function HeaderWithAuthButtons() {
  return (
    <header className="flex w-full max-w-lg items-center justify-between gap-2 border-b pb-2">
      <div className="flex items-center gap-2">
        <span className="flex size-7 items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
          <WavesIcon className="size-4" />
        </span>
        <NavigationMenu className="hidden sm:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex w-52 flex-col gap-1">
                  {["Templates", "Blocks", "Icons"].map((p) => (
                    <li key={p}>
                      <NavigationMenuLink href="#">{p}</NavigationMenuLink>
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
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-1.5">
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
        <Button size="sm">Get started</Button>
      </div>
    </header>
  )
}
