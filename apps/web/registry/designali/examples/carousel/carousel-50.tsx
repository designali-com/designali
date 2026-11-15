"use client"

import * as React from "react"
import { EyeIcon, ShoppingBagIcon } from "lucide-react"

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
  { name: "Sand", tone: "from-amber-100 to-amber-300" },
  { name: "Sage", tone: "from-emerald-200 to-emerald-400" },
  { name: "Slate", tone: "from-slate-300 to-slate-500" },
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
          <DialogTitle>Everyday crew sweater</DialogTitle>
          <DialogDescription>Organic cotton · $68</DialogDescription>
        </DialogHeader>
        <Carousel setApi={handleApi}>
          <CarouselContent>
            {colors.map((color) => (
              <CarouselItem key={color.name}>
                <div
                  className={cn(
                    "flex aspect-square items-end bg-gradient-to-br p-3",
                    color.tone
                  )}
                >
                  <span className="bg-background/80 px-2 py-0.5 text-xs">
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
                "size-6 rounded-full bg-gradient-to-br ring-offset-2 ring-offset-background",
                color.tone,
                selected === index && "ring-2 ring-primary"
              )}
            />
          ))}
          <span className="ms-auto text-xs text-muted-foreground">
            {colors[selected]!.name}
          </span>
        </div>
        <DialogFooter>
          <Button className="w-full">
            <ShoppingBagIcon data-icon="inline-start" />
            Add to bag
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
