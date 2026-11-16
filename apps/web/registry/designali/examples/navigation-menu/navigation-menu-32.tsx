import {
  PenTool as PenToolIcon,
  Code as CodeIcon,
  LayoutTemplate as LayoutTemplateIcon,
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

const programs = [
  { title: "Brand identity sprint", weeks: 6, intensity: 2, icon: PenToolIcon },
  { title: "Figma UI design", weeks: 4, intensity: 1, icon: LayoutTemplateIcon },
  { title: "Next.js website build", weeks: 10, intensity: 3, icon: CodeIcon },
]

export default function FitnessProgramsNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Engagements</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-72 flex-col gap-1">
              {programs.map((p) => (
                <li key={p.title}>
                  <NavigationMenuLink href="#" className="gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center bg-orange-500/10 text-orange-600 dark:text-orange-400">
                      <p.icon />
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span className="font-medium">{p.title}</span>
                      <span className="text-muted-foreground">
                        {p.weeks} weeks
                      </span>
                    </span>
                    <span
                      className="flex gap-0.5"
                      aria-label={"Intensity " + p.intensity + " of 3"}
                    >
                      {[1, 2, 3].map((n) => (
                        <span
                          key={n}
                          className={cn(
                            "h-3 w-1",
                            n <= p.intensity ? "bg-orange-500" : "bg-muted"
                          )}
                        />
                      ))}
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Studio
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
