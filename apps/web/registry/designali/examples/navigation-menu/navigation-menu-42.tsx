"use client"

import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"

const tabs = ["All", "Templates", "Blocks", "Icons"]

export default function PillStyleNav() {
  const [active, setActive] = React.useState("Templates")

  return (
    <NavigationMenu className="bg-muted p-1">
      <NavigationMenuList className="gap-1">
        {tabs.map((tab) => (
          <NavigationMenuItem key={tab}>
            <NavigationMenuLink
              href="#"
              active={active === tab}
              onClick={(e) => {
                e.preventDefault()
                setActive(tab)
              }}
              className={cn(
                navigationMenuTriggerStyle(),
                "h-7 bg-transparent px-3 text-muted-foreground hover:bg-background/60 data-active:bg-background data-active:text-foreground data-active:shadow-sm"
              )}
            >
              {tab}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
