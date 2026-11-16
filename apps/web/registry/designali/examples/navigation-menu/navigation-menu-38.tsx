import {
  ArrowRight as ArrowRightIcon,
  Quote as QuoteIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const stories = [
  {
    quote: "Designali blocks cut our launch time in half.",
    name: "Startup Founder",
    company: "Designali client",
  },
  {
    quote: "The templates feel production-ready out of the box.",
    name: "Agency Designer",
    company: "designali.com customer",
  },
]

export default function CustomerStoriesNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Customers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              {stories.map((s) => (
                <NavigationMenuLink
                  key={s.name}
                  href="#"
                  className="flex-col items-start gap-2 p-3"
                >
                  <QuoteIcon className="text-muted-foreground" />
                  <span className="text-sm">{s.quote}</span>
                  <span className="flex items-center gap-2">
                    <Avatar className="size-6">
                      <AvatarFallback className="text-[10px]">
                        {s.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-muted-foreground">
                      {s.name}, {s.company}
                    </span>
                  </span>
                </NavigationMenuLink>
              ))}
              <NavigationMenuLink href="#" className="justify-center border-t">
                Read all customer stories <ArrowRightIcon />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
