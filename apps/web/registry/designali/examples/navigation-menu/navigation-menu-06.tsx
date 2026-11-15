import { ArrowRightIcon, TerminalIcon } from "lucide-react"

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
import { Separator } from "@workspace/ui/components/separator"

const sdks = [
  { name: "Node.js", version: "v6.2.0", tag: "TS" },
  { name: "Python", version: "v4.8.1", tag: "PY" },
  { name: "Go", version: "v2.3.0", tag: "GO" },
  { name: "Ruby", version: "v3.1.4", tag: "RB" },
]

export default function DeveloperSdksNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              <p className="px-2 pt-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
                SDKs
              </p>
              <ul className="grid grid-cols-2 gap-1">
                {sdks.map((sdk) => (
                  <li key={sdk.name}>
                    <NavigationMenuLink href="#">
                      <Badge
                        variant="outline"
                        className="w-7 justify-center font-mono"
                      >
                        {sdk.tag}
                      </Badge>
                      <span className="flex flex-col">
                        <span className="font-medium">{sdk.name}</span>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {sdk.version}
                        </span>
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
              <Separator className="my-1" />
              <NavigationMenuLink href="#">
                <TerminalIcon /> CLI reference
                <ArrowRightIcon className="ms-auto text-muted-foreground" />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Status
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
