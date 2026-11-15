"use client"

import * as React from "react"
import { CreditCardIcon, SlidersHorizontalIcon, UsersIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"

const sections = [
  {
    id: "general",
    label: "General",
    icon: SlidersHorizontalIcon,
    body: "Workspace name, URL and default language.",
  },
  {
    id: "members",
    label: "Members",
    icon: UsersIcon,
    body: "Invite people and manage their roles.",
  },
  {
    id: "billing",
    label: "Billing",
    icon: CreditCardIcon,
    body: "Plan, payment method and invoices.",
  },
]

export default function SettingsSectionNav() {
  const [active, setActive] = React.useState("general")
  const current = sections.find((s) => s.id === active)

  return (
    <div className="w-full max-w-sm border">
      <NavigationMenu className="max-w-none border-b px-1">
        <NavigationMenuList>
          {sections.map((s) => (
            <NavigationMenuItem key={s.id}>
              <NavigationMenuLink
                href="#"
                active={active === s.id}
                onClick={(e) => {
                  e.preventDefault()
                  setActive(s.id)
                }}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "border-b-2 border-transparent bg-transparent hover:bg-transparent focus:bg-transparent data-active:border-foreground data-active:bg-transparent"
                )}
              >
                <s.icon /> {s.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="p-4">
        <p className="text-sm font-medium">{current?.label}</p>
        <p className="text-xs text-muted-foreground">{current?.body}</p>
      </div>
    </div>
  )
}
