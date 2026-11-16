"use client"

import * as React from "react"
import {
  ChevronRight as ChevronRightIcon,
  CircleCheck as CircleCheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"
import { cn } from "@workspace/ui/lib/utils"

const steps = ["Cart", "Shipping", "Payment", "Review"]

export default function CheckoutBreadcrumbNav() {
  const [current, setCurrent] = React.useState(1)

  return (
    <div className="flex flex-col items-center gap-3">
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          {steps.map((step, i) => (
            <NavigationMenuItem key={step} className="flex items-center gap-1">
              {i > 0 && (
                <ChevronRightIcon className="size-3 text-muted-foreground" />
              )}
              <NavigationMenuLink
                href="#"
                active={i === current}
                aria-disabled={i > current}
                onClick={(e) => {
                  e.preventDefault()
                  if (i <= current) setCurrent(i)
                }}
                className={cn(
                  "px-2 py-1",
                  i < current && "text-foreground",
                  i > current &&
                    "pointer-events-none text-muted-foreground opacity-60",
                  i === current && "font-semibold"
                )}
              >
                {i < current ? (
                  <CircleCheckIcon className="text-primary dark:text-primary" />
                ) : (
                  <span className="tabular-nums">{i + 1}.</span>
                )}
                {step}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        size="sm"
        disabled={current === steps.length - 1}
        onClick={() => setCurrent((c) => c + 1)}
      >
        Continue to {steps[Math.min(current + 1, steps.length - 1)]}
      </Button>
    </div>
  )
}
