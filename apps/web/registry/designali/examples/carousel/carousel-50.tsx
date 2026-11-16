"use client"

import * as React from "react"
import {
  Eye as EyeIcon,
  ShoppingBag as ShoppingBagIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { name: "Light", src: "/img/dashboard-1-light.jpg" },
  { name: "Dark", src: "/img/dashboard-1-dark.jpg" },
  { name: "Chat", src: "/img/chat-1-light.jpg" },
]

export default function QuickViewDialogGallery() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    setSelected(next.selectedScrollSnap())
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <EyeIcon data-icon="inline-start" />
        Quick view
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Designali Dashboard template</DialogTitle>
          <DialogDescription>Next.js · Tailwind CSS · $68</DialogDescription>
        </DialogHeader>
        <Carousel setApi={handleApi}>
          <CarouselContent>
            {colors.map((color) => (
              <CarouselItem key={color.name}>
                <div className="relative flex aspect-square items-end overflow-hidden bg-muted p-3">
                  <img
                    src={color.src}
                    alt={"Dashboard template, " + color.name}
                    className="absolute inset-0 size-full object-cover"
                  />
                  <span className="relative bg-background/80 px-2 py-0.5 text-xs">
                    {color.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex items-center gap-2">
          {colors.map((color, index) => (
            <button
              key={color.name}
              type="button"
              aria-label={color.name}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "size-6 overflow-hidden rounded-full bg-muted ring-offset-2 ring-offset-background",
                selected === index && "ring-2 ring-primary"
              )}
            >
              <img src={color.src} alt="" className="size-full object-cover" />
            </button>
          ))}
          <span className="ms-auto text-xs text-muted-foreground">
            {colors[selected]!.name}
          </span>
        </div>
        <DialogFooter>
          <Button className="w-full">
            <ShoppingBagIcon data-icon="inline-start" />
            Add to cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
