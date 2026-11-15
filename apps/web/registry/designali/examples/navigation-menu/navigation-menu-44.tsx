"use client"

import * as React from "react"
import { SquareCheckIcon, SquareIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"

const tags = [
  "Remote",
  "Full-time",
  "Contract",
  "Senior",
  "Design",
  "Engineering",
]

export default function NavWithKeepOpenLinks() {
  const [selected, setSelected] = React.useState<string[]>(["Remote"])

  return (
    <div className="flex flex-col items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Job filters
              {selected.length > 0 && (
                <Badge className="ms-1.5 h-4 px-1 text-[10px]">
                  {selected.length}
                </Badge>
              )}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-60 grid-cols-2 gap-1">
                {tags.map((tag) => {
                  const on = selected.includes(tag)
                  return (
                    <li key={tag}>
                      <NavigationMenuLink
                        href="#"
                        closeOnClick={false}
                        active={on}
                        onClick={(e) => {
                          e.preventDefault()
                          setSelected((prev) =>
                            on ? prev.filter((t) => t !== tag) : [...prev, tag]
                          )
                        }}
                      >
                        {on ? (
                          <SquareCheckIcon />
                        ) : (
                          <SquareIcon className="text-muted-foreground" />
                        )}
                        {tag}
                      </NavigationMenuLink>
                    </li>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <p className="text-xs text-muted-foreground">
        {selected.length ? selected.join(" · ") : "No filters"}
      </p>
    </div>
  )
}
