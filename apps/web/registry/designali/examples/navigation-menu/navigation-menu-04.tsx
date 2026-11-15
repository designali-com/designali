import { BracesIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const guides = [
  {
    title: "Quickstart",
    description: "Send your first request in five minutes.",
  },
  {
    title: "Authentication",
    description: "API keys, OAuth and scoped tokens.",
  },
  { title: "Webhooks", description: "Receive and verify event payloads." },
  { title: "Rate limits", description: "Quotas, headers and retry strategy." },
]

const reference = [
  "Customers",
  "Payments",
  "Subscriptions",
  "Invoices",
  "Events",
  "Files",
]

export default function DocumentationNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-72 flex-col gap-1">
              {guides.map((g) => (
                <li key={g.title}>
                  <NavigationMenuLink
                    href="#"
                    className="flex-col items-start gap-0.5"
                  >
                    <span className="font-medium">{g.title}</span>
                    <span className="text-muted-foreground">
                      {g.description}
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>API reference</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 grid-cols-2 gap-1">
              {reference.map((r) => (
                <li key={r}>
                  <NavigationMenuLink href="#" className="font-mono">
                    <BracesIcon className="text-muted-foreground" />
                    {r.toLowerCase()}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Changelog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
