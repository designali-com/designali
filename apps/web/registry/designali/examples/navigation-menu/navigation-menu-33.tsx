import {
  GiftIcon,
  HandHelpingIcon,
  HandshakeIcon,
  HeartIcon,
} from "lucide-react"

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

const ways = [
  {
    title: "Volunteer",
    description: "Join a weekend river cleanup.",
    icon: HandHelpingIcon,
  },
  {
    title: "Fundraise",
    description: "Start a page for your birthday.",
    icon: GiftIcon,
  },
  {
    title: "Partner with us",
    description: "Corporate matching programs.",
    icon: HandshakeIcon,
  },
]

export default function NonprofitGetInvolvedNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get involved</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-64 flex-col gap-1">
              {ways.map((w) => (
                <li key={w.title}>
                  <NavigationMenuLink href="#" className="items-start gap-3">
                    <w.icon className="mt-0.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="flex flex-col gap-0.5">
                      <span className="font-medium">{w.title}</span>
                      <span className="text-muted-foreground">
                        {w.description}
                      </span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Our impact
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-emerald-600 text-white hover:bg-emerald-700 focus:bg-emerald-700"
            )}
          >
            <HeartIcon /> Donate
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
