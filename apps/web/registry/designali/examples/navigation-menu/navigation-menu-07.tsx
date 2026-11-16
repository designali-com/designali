"use client"

import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const pages = ["Templates", "Blocks", "Icons", "Pricing"]

export default function ActiveLinkNav() {
  const [active, setActive] = React.useState("Templates")

  return (
    <div className="flex flex-col items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList>
          {pages.map((page) => (
            <NavigationMenuItem key={page}>
              <NavigationMenuLink
                href="#"
                active={active === page}
                onClick={(e) => {
                  e.preventDefault()
                  setActive(page)
                }}
                className={navigationMenuTriggerStyle()}
              >
                {page}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">Current page: designali.com/{active.toLowerCase()}</p>
    </div>
  )
}
