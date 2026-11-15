import {
  CirclePlayIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  HotelIcon,
  PhoneIcon,
  StoreIcon,
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

const solutions = [
  {
    title: "Retail",
    description: "Unify in-store and online sales.",
    icon: StoreIcon,
  },
  {
    title: "Hospitality",
    description: "Bookings, tabs and tips.",
    icon: HotelIcon,
  },
  {
    title: "Healthcare",
    description: "Compliant patient billing.",
    icon: HeartPulseIcon,
  },
  {
    title: "Education",
    description: "Tuition plans and grants.",
    icon: GraduationCapIcon,
  },
]

export default function FooterRowMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <div className="w-72 sm:w-[28rem]">
              <ul className="grid gap-1 p-1 sm:grid-cols-2">
                {solutions.map((s) => (
                  <li key={s.title}>
                    <NavigationMenuLink href="#" className="items-start gap-3">
                      <s.icon className="mt-0.5 text-muted-foreground" />
                      <span className="flex flex-col gap-0.5">
                        <span className="font-medium">{s.title}</span>
                        <span className="text-muted-foreground">
                          {s.description}
                        </span>
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <div className="flex border-t bg-muted/50">
                <NavigationMenuLink href="#" className="flex-1 justify-center">
                  <CirclePlayIcon /> Watch demo
                </NavigationMenuLink>
                <NavigationMenuLink href="#" className="flex-1 justify-center">
                  <PhoneIcon /> Contact sales
                </NavigationMenuLink>
              </div>
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
