import {
  Ticket as TicketIcon,
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
import { cn } from "@workspace/ui/lib/utils"

const days = [
  {
    day: "Day 1 · Mar 12",
    sessions: [
      { time: "09:30", title: "Ali Imam: Design se code tak" },
      { time: "11:00", title: "Design tokens at scale" },
    ],
  },
  {
    day: "Day 2 · Mar 13",
    sessions: [
      { time: "10:00", title: "Shipping Designali blocks with Next.js" },
      { time: "14:30", title: "Closing panel" },
    ],
  },
]

export default function ConferenceScheduleNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Schedule</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-2 sm:w-[28rem] sm:grid-cols-2">
              {days.map((d) => (
                <div key={d.day} className="flex flex-col gap-0.5">
                  <p className="px-2 py-1 text-[11px] font-semibold text-muted-foreground">
                    {d.day}
                  </p>
                  {d.sessions.map((s) => (
                    <NavigationMenuLink key={s.title} href="#">
                      <span className="w-10 font-mono text-muted-foreground">
                        {s.time}
                      </span>
                      <span className="font-medium">{s.title}</span>
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Speakers
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/90"
            )}
          >
            <TicketIcon /> Tickets
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
