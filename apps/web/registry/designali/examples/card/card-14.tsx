"use client"

import * as React from "react"
import {
  Heart as HeartIcon,
  LayoutTemplate as ShirtIcon,
  ShoppingBag as ShoppingBagIcon,
  Star as StarIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { name: "Light", className: "bg-amber-200" },
  { name: "Accent", className: "bg-emerald-300" },
  { name: "Dark", className: "bg-slate-500" },
]

export default function ProductCard() {
  const [color, setColor] = React.useState("Light")

  return (
    <Card className="w-full max-w-64 pt-0">
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-amber-100 to-orange-200 dark:from-amber-900/40 dark:to-orange-900/40">
        <ShirtIcon
          className="size-20 text-amber-900/40 dark:text-amber-100/40"
          strokeWidth={1}
        />
        <Badge className="absolute start-3 top-3">-20%</Badge>
        <Button
          variant="secondary"
          size="icon-sm"
          aria-label="Save to favorites"
          className="absolute end-3 top-3"
        >
          <HeartIcon />
        </Button>
      </div>
      <CardHeader>
        <CardTitle>Portfolio Simple Template</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <StarIcon className="size-3 fill-amber-400 text-amber-400" /> 4.7 ·
          312 reviews
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-semibold">$56</span>
          <span className="text-muted-foreground line-through">$70</span>
        </div>
        <div className="flex gap-1.5">
          {colors.map((c) => (
            <button
              key={c.name}
              type="button"
              aria-label={c.name}
              aria-pressed={color === c.name}
              onClick={() => setColor(c.name)}
              className={cn(
                "size-5 ring-offset-2 ring-offset-card",
                c.className,
                color === c.name && "ring-2 ring-foreground"
              )}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ShoppingBagIcon data-icon="inline-start" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
