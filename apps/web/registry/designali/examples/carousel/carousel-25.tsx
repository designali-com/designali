"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Package as PackageIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"

const addons = [
  { name: "Figma source files", price: 19 },
  { name: "Icon pack", price: 12 },
  { name: "Logo pack", price: 6 },
  { name: "Extended license", price: 29 },
  { name: "Setup call with Ali", price: 49 },
]

export default function CheckoutUpsellCarousel() {
  const [added, setAdded] = React.useState<string[]>([])
  const total = addons
    .filter((a) => added.includes(a.name))
    .reduce((sum, a) => sum + a.price, 0)

  return (
    <div className="w-full max-w-sm border p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-sm font-medium">Complete your order</h3>
        <span className="text-xs text-muted-foreground">+${total} add-ons</span>
      </div>
      <Carousel opts={{ align: "start" }} className="px-8">
        <CarouselContent className="-ms-2">
          {addons.map((addon) => {
            const isAdded = added.includes(addon.name)
            return (
              <CarouselItem key={addon.name} className="basis-1/2 ps-2">
                <div className="flex flex-col gap-2 border p-2">
                  <div className="flex aspect-square items-center justify-center bg-muted">
                    <PackageIcon className="size-6 text-muted-foreground" />
                  </div>
                  <span className="truncate text-xs font-medium">
                    {addon.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ${addon.price}
                  </span>
                  <Button
                    size="xs"
                    variant={isAdded ? "secondary" : "outline"}
                    onClick={() =>
                      setAdded((list) =>
                        isAdded
                          ? list.filter((n) => n !== addon.name)
                          : [...list, addon.name]
                      )
                    }
                  >
                    {isAdded ? (
                      <CheckIcon data-icon="inline-start" />
                    ) : (
                      <PlusIcon data-icon="inline-start" />
                    )}
                    {isAdded ? "Added" : "Add"}
                  </Button>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious variant="ghost" className="start-0" />
        <CarouselNext variant="ghost" className="end-0" />
      </Carousel>
    </div>
  )
}
