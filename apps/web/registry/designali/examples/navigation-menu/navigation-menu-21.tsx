import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const sections = ["World", "Business", "Science", "Culture", "Sport"]
const headlines = [
  { title: "City council approves new tram line", time: "12 min ago" },
  { title: "Researchers map deep-sea coral reef", time: "48 min ago" },
  { title: "Local bakery wins national award", time: "2 h ago" },
]

export default function NewsSectionsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-72 gap-2 sm:w-[30rem] sm:grid-cols-[8rem_1fr]">
              <ul className="flex flex-wrap gap-0.5 sm:flex-col">
                {sections.map((s) => (
                  <li key={s}>
                    <NavigationMenuLink href="#" className="font-medium">
                      {s}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-0.5">
                <p className="px-2 py-1 text-[11px] font-semibold tracking-wide text-red-600 uppercase dark:text-red-400">
                  Latest
                </p>
                {headlines.map((h) => (
                  <NavigationMenuLink
                    key={h.title}
                    href="#"
                    className="flex-col items-start gap-0.5"
                  >
                    <span className="font-medium">{h.title}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Opinion
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Subscribe
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
