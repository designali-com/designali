import {
  Braces as BracesIcon,
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

const guides = [
  {
    title: "Quickstart",
    description: "Add your first Designali block in five minutes.",
  },
  {
    title: "Installation",
    description: "Next.js, Tailwind CSS and TypeScript setup.",
  },
  { title: "Theming", description: "Semantic tokens and dark mode." },
  { title: "Icons", description: "Use @designali/icons in React." },
]

const reference = [
  "Templates",
  "Blocks",
  "Icons",
  "Logos",
  "Vectors",
  "Components",
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
          <NavigationMenuTrigger>Library</NavigationMenuTrigger>
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
