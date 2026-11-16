"use client"

import * as React from "react"
import {
  Eye as EyeIcon,
  ShoppingBag as ShoppingBagIcon,
  Star as StarIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const sizes = ["XS", "S", "M", "L", "XL"]

export default function ProductQuickViewDialog() {
  const [size, setSize] = React.useState<string[]>(["M"])

  return (
    <div className="flex w-full max-w-48 flex-col gap-2">
      <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-400 dark:from-stone-700 dark:to-stone-900" />
      <div className="flex items-center justify-between">
        <span className="font-medium">Merino Crew</span>
        <span className="text-muted-foreground">$89</span>
      </div>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" size="sm" />}>
          <EyeIcon data-icon="inline-start" />
          Quick view
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-400 dark:from-stone-700 dark:to-stone-900" />
            <div className="flex flex-col gap-3">
              <DialogHeader>
                <DialogTitle className="text-base">
                  Merino Crew Sweater
                </DialogTitle>
                <DialogDescription>
                  Fine-gauge knit in undyed merino wool.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon
                    key={star}
                    className={cn(
                      "size-3.5",
                      star < 4 ? "fill-current" : "text-muted-foreground"
                    )}
                  />
                ))}
                <span className="ms-1 text-muted-foreground">128 reviews</span>
              </div>
              <p className="font-heading text-lg font-semibold">$89.00</p>
              <ToggleGroup
                variant="outline"
                size="sm"
                spacing={1}
                value={size}
                onValueChange={(value) =>
                  value.length && setSize(value.map(String))
                }
              >
                {sizes.map((item) => (
                  <ToggleGroupItem
                    key={item}
                    value={item}
                    disabled={item === "XS"}
                  >
                    {item}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <DialogClose render={<Button className="mt-auto" />}>
                <ShoppingBagIcon data-icon="inline-start" />
                Add to bag · {size[0]}
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
