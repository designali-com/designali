import {
  Zap as ZapIcon,
} from "@designali/icons"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const links = [
  { title: "Brand identity", description: "Logos, type and visual systems." },
  { title: "UI/UX design", description: "Interfaces that feel intuitive." },
  { title: "Web development", description: "Production-ready Next.js sites." },
]

export default function FeaturedCardMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-1 sm:w-[30rem] sm:grid-cols-[11rem_1fr]">
              <NavigationMenuLink
                href="#"
                className="flex-col items-start justify-end gap-1 bg-gradient-to-br from-primary to-primary p-4 text-white hover:bg-gradient-to-br hover:opacity-95 focus:bg-gradient-to-br"
              >
                <ZapIcon className="size-5" />
                <span className="text-sm font-semibold">Designali Studio</span>
                <span className="text-white/80">
                  Where thoughtful design meets production-ready code.
                </span>
              </NavigationMenuLink>
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.title}>
                    <NavigationMenuLink
                      href="#"
                      className="flex-col items-start gap-0.5"
                    >
                      <span className="font-medium">{link.title}</span>
                      <span className="text-muted-foreground">
                        {link.description}
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Work
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
