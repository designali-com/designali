"use client"

import * as React from "react"
import { ShoppingBagIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { value: "olive", label: "Olive", className: "bg-lime-800" },
  { value: "navy", label: "Navy", className: "bg-blue-900" },
  { value: "rust", label: "Rust", className: "bg-orange-700" },
]
const sizes = ["S", "M", "L", "XL"]

export default function ProductOptionsDrawer() {
  const [color, setColor] = React.useState("olive")
  const [size, setSize] = React.useState<string[]>([])

  return (
    <Drawer>
      <DrawerTrigger render={<Button className="w-full max-w-xs" />}>
        <ShoppingBagIcon data-icon="inline-start" />
        Add to bag · $148
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader className="flex-row items-center gap-3 text-start">
            <div className="size-14 shrink-0 bg-gradient-to-br from-lime-700 to-lime-950" />
            <div>
              <DrawerTitle>Field Jacket</DrawerTitle>
              <DrawerDescription>Waxed cotton · $148</DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <p className="font-medium">
                Color:{" "}
                <span className="font-normal text-muted-foreground capitalize">
                  {color}
                </span>
              </p>
              <div className="flex gap-2">
                {colors.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    aria-label={item.label}
                    aria-pressed={item.value === color}
                    onClick={() => setColor(item.value)}
                    className={cn(
                      "size-8 rounded-full ring-offset-2 ring-offset-background",
                      item.className,
                      item.value === color && "ring-2 ring-foreground"
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="font-medium">Size</p>
                <Button variant="link" size="xs" className="h-auto p-0">
                  Size guide
                </Button>
              </div>
              <ToggleGroup
                variant="outline"
                value={size}
                onValueChange={(value) => setSize(value.map(String))}
                className="grid w-full grid-cols-4"
              >
                {sizes.map((item) => (
                  <ToggleGroupItem
                    key={item}
                    value={item}
                    disabled={item === "XL"}
                  >
                    {item}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <p className="text-muted-foreground">
                XL is sold out in {color}.
              </p>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button disabled={size.length === 0} />}>
              {size.length
                ? "Add size " + size[0] + " to bag"
                : "Select a size"}
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
