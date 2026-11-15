"use client"

import * as React from "react"
import { EyeIcon, HeartIcon, StarIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const sizes = ["XS", "S", "M", "L", "XL"]
const soldOut = new Set(["XS"])

export default function ProductQuickViewSheet() {
  const [size, setSize] = React.useState<string | null>(null)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <EyeIcon data-icon="inline-start" />
        Quick view
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <div className="aspect-[4/3] bg-gradient-to-br from-stone-300 via-stone-200 to-stone-400 dark:from-stone-700 dark:via-stone-800 dark:to-stone-600" />
        <SheetHeader>
          <div className="flex items-start justify-between gap-2">
            <SheetTitle className="text-base">Harbor wool overshirt</SheetTitle>
            <span className="text-base font-semibold">$148</span>
          </div>
          <SheetDescription className="flex items-center gap-1">
            <StarIcon className="size-3 fill-current" /> 4.8 · 212 reviews
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-4">
          <span className="font-medium">Size</span>
          <div className="grid grid-cols-5 gap-1">
            {sizes.map((s) => (
              <Button
                key={s}
                variant={size === s ? "default" : "outline"}
                disabled={soldOut.has(s)}
                onClick={() => setSize(s)}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
        <SheetFooter className="flex-row">
          <Button variant="outline" size="icon" aria-label="Add to wishlist">
            <HeartIcon />
          </Button>
          <Button className="flex-1" disabled={!size}>
            {size ? "Add to bag" : "Select a size"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
