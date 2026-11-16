"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Globe as GlobeIcon,
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

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "nl", label: "Nederlands" },
]

export default function LocaleSwitcherNav() {
  const [locale, setLocale] = React.useState("en")

  return (
    <NavigationMenu align="end">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Help
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <GlobeIcon className="me-1.5 size-3.5" />
            {locale.toUpperCase()}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-44 flex-col gap-1">
              {locales.map((l) => (
                <li key={l.code}>
                  <NavigationMenuLink
                    href="#"
                    active={locale === l.code}
                    onClick={(e) => {
                      e.preventDefault()
                      setLocale(l.code)
                    }}
                  >
                    <span className="flex-1">{l.label}</span>
                    {locale === l.code && <CheckIcon />}
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
