import {
  ChartBar as ChartBarIcon,
  Code as CodeIcon,
  PenTool as PenToolIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const topics = [
  { title: "Product design", lessons: 42, icon: PenToolIcon },
  { title: "Frontend engineering", lessons: 68, icon: CodeIcon },
  { title: "Data analysis", lessons: 35, icon: ChartBarIcon },
  { title: "Leadership", lessons: 21, icon: UsersIcon },
]

export default function CourseCatalogNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              {topics.map((t) => (
                <NavigationMenuLink key={t.title} href="#">
                  <t.icon className="text-muted-foreground" />
                  <span className="flex-1 font-medium">{t.title}</span>
                  <span className="text-muted-foreground tabular-nums">
                    {t.lessons} lessons
                  </span>
                </NavigationMenuLink>
              ))}
              <div className="flex gap-1 border-t px-2 pt-2">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <Badge key={level} variant="outline">
                    {level}
                  </Badge>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Paths
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            For teams
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
