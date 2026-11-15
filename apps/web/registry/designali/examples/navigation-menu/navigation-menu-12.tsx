import { ArrowRightIcon } from "lucide-react"

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
import { cn } from "@workspace/ui/lib/utils"

const plans = [
  { name: "Starter", price: "$0", note: "For side projects" },
  {
    name: "Team",
    price: "$24",
    note: "Per seat, billed yearly",
    popular: true,
  },
  { name: "Scale", price: "$79", note: "Advanced controls" },
]

export default function PricingPlansNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-72 flex-col gap-1">
              {plans.map((plan) => (
                <NavigationMenuLink
                  key={plan.name}
                  href="#"
                  className={cn(
                    "justify-between",
                    plan.popular && "bg-muted/60"
                  )}
                >
                  <span className="flex flex-col">
                    <span className="flex items-center gap-1.5 font-medium">
                      {plan.name}
                      {plan.popular && (
                        <Badge variant="secondary">Popular</Badge>
                      )}
                    </span>
                    <span className="text-muted-foreground">{plan.note}</span>
                  </span>
                  <span className="text-sm font-semibold tabular-nums">
                    {plan.price}
                    <span className="text-xs font-normal text-muted-foreground">
                      /mo
                    </span>
                  </span>
                </NavigationMenuLink>
              ))}
              <NavigationMenuLink
                href="#"
                className="justify-center text-muted-foreground"
              >
                Compare all features <ArrowRightIcon />
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Enterprise
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
