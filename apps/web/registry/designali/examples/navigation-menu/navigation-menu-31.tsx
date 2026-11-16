import {
  Award as AwardIcon,
  CalendarDays as CalendarDaysIcon,
  MessagesSquare as MessagesSquareIcon,
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

const contributors = ["AK", "BM", "CS", "DL", "EF"]

export default function CommunityNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-64 flex-col gap-1">
              <NavigationMenuLink href="#">
                <MessagesSquareIcon /> Discussion forum
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <CalendarDaysIcon /> Meetups & events
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <AwardIcon /> Champions program
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#"
                className="mt-1 justify-between border-t pt-2.5"
              >
                <span className="flex -space-x-1.5">
                  {contributors.map((c) => (
                    <Avatar key={c} className="size-6 ring-2 ring-popover">
                      <AvatarFallback className="text-[9px]">
                        {c}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </span>
                <span className="text-muted-foreground">2.4k contributors</span>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
