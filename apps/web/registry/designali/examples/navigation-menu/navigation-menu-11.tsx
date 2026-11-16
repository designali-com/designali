import {
  Plus as PlusIcon,
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
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const projects = [
  { name: "designali.com", status: "bg-emerald-500", env: "Production" },
  { name: "Blocks registry", status: "bg-amber-500", env: "Deploying" },
  { name: "Icons package", status: "bg-red-500", env: "Failed" },
]

export default function DashboardProjectsNav() {
  return (
    <div className="flex w-full max-w-md items-center gap-2 border px-2 py-1">
      <span className="flex size-6 items-center justify-center bg-foreground text-[11px] font-bold text-background">
        K
      </span>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              active
              className={navigationMenuTriggerStyle()}
            >
              Overview
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-64 flex-col gap-1">
                {projects.map((p) => (
                  <NavigationMenuLink key={p.name} href="#">
                    <span className={cn("size-2 rounded-full", p.status)} />
                    <span className="flex-1 font-medium">{p.name}</span>
                    <span className="text-muted-foreground">{p.env}</span>
                  </NavigationMenuLink>
                ))}
                <Separator className="my-1" />
                <NavigationMenuLink href="#">
                  <PlusIcon /> New project
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              Team
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
