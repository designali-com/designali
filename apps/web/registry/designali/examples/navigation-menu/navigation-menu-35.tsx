import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"

const markets = [
  { name: "Global 100", value: "4,812.30", change: 0.84 },
  { name: "Tech Leaders", value: "17,204.11", change: -0.42 },
  { name: "Green Energy", value: "1,093.57", change: 2.15 },
  { name: "Bond Index", value: "102.48", change: -0.05 },
]

export default function MarketsTickerNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-64 flex-col gap-1">
              {markets.map((m) => (
                <li key={m.name}>
                  <NavigationMenuLink href="#">
                    <span className="flex-1 font-medium">{m.name}</span>
                    <span className="text-muted-foreground tabular-nums">
                      {m.value}
                    </span>
                    <span
                      className={cn(
                        "flex w-16 items-center justify-end gap-0.5 tabular-nums",
                        m.change >= 0
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-red-600 dark:text-red-400"
                      )}
                    >
                      {m.change >= 0 ? (
                        <ArrowUpRightIcon className="size-3" />
                      ) : (
                        <ArrowDownRightIcon className="size-3" />
                      )}
                      {Math.abs(m.change).toFixed(2)}%
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Portfolio
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Watchlist
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
