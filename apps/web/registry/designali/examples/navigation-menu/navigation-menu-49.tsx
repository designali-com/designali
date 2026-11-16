"use client"

import * as React from "react"
import {
  FileText as FileTextIcon,
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
import { Skeleton } from "@workspace/ui/components/skeleton"

const recent = ["Brand identity", "Templates v2", "Pricing page"]

export default function LoadingContentNav() {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <NavigationMenu
      onValueChange={(value) => {
        if (value && !loaded) window.setTimeout(() => setLoaded(true), 1200)
      }}
    >
      <NavigationMenuList>
        <NavigationMenuItem value="recent">
          <NavigationMenuTrigger>Recent</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-56 flex-col gap-1">
              {loaded
                ? recent.map((r) => (
                    <li key={r}>
                      <NavigationMenuLink href="#">
                        <FileTextIcon className="text-muted-foreground" />
                        {r}
                      </NavigationMenuLink>
                    </li>
                  ))
                : recent.map((r) => (
                    <li key={r} className="flex items-center gap-2 p-2">
                      <Skeleton className="size-4" />
                      <Skeleton className="h-3 flex-1" />
                    </li>
                  ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Starred
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
