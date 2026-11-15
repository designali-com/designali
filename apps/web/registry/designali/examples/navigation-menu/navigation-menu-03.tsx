import { ZapIcon } from "lucide-react"

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
  { title: "Customer portal", description: "Let clients self-serve invoices." },
  { title: "Usage billing", description: "Meter and charge per API call." },
  { title: "Tax engine", description: "Automatic rates in 40+ regions." },
]

export default function FeaturedCardMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-1 sm:w-[30rem] sm:grid-cols-[11rem_1fr]">
              <NavigationMenuLink
                href="#"
                className="flex-col items-start justify-end gap-1 bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-4 text-white hover:bg-gradient-to-br hover:opacity-95 focus:bg-gradient-to-br"
              >
                <ZapIcon className="size-5" />
                <span className="text-sm font-semibold">Tallyo Billing</span>
                <span className="text-white/80">
                  Everything you need to charge customers, in one API.
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
            Customers
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
