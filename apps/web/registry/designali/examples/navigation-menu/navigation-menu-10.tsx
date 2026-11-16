"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"

export default function ControlledValueNav() {
  const [value, setValue] = React.useState<string | null>(null)

  return (
    <div className="flex flex-col items-center gap-3">
      <NavigationMenu
        value={value}
        onValueChange={(next) => setValue(next as string | null)}
      >
        <NavigationMenuList>
          <NavigationMenuItem value="services">
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-56 flex-col gap-1">
                {["Brand identity", "UI/UX design", "Web development"].map((s) => (
                  <li key={s}>
                    <NavigationMenuLink href="#">{s}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="designali">
            <NavigationMenuTrigger>Designali</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-48 flex-col gap-1">
                {["About Ali Imam", "Work", "Contact"].map((s) => (
                  <li key={s}>
                    <NavigationMenuLink href="#">{s}</NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setValue("services")}
        >
          Open Services
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setValue(null)}>
          Close
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Open menu: {value ?? "none"}
      </p>
    </div>
  )
}
