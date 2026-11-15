"use client"

import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"

const pages = ["Overview", "Activity", "Settings", "Billing"]

export default function ActiveLinkNav() {
  const [active, setActive] = React.useState("Overview")

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
      <p className="text-xs text-muted-foreground">Current page: {active}</p>
    </div>
  )
}
