"use client"

import * as React from "react"
import {
  PenTool as BathIcon,
  Layers as BedDoubleIcon,
  Heart as HeartIcon,
  House as HouseIcon,
  MapPin as MapPinIcon,
  Code as RulerIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"

const specs = [
  { icon: BedDoubleIcon, label: "12 pages" },
  { icon: BathIcon, label: "Figma" },
  { icon: RulerIcon, label: "Next.js" },
]

export default function PropertyListingCard() {
  const [fav, setFav] = React.useState(false)

  return (
    <Card className="w-full max-w-xs pt-0">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-border via-primary/20 to-chart-1 dark:from-muted dark:via-chart-5 dark:to-chart-5">
        <HouseIcon
          className="absolute inset-0 m-auto size-16 text-white/70"
          strokeWidth={1}
        />
        <Badge className="absolute start-3 top-3">New template</Badge>
        <Button
          size="icon-sm"
          variant="secondary"
          aria-label="Favorite"
          aria-pressed={fav}
          onClick={() => setFav(!fav)}
          className="absolute end-3 top-3"
        >
          <HeartIcon className={cn(fav && "fill-primary text-primary")} />
        </Button>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Resort Template · $79</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPinIcon className="size-3" />
          designali.com/templates
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-between">
        {specs.map((s) => (
          <span
            key={s.label}
            className="flex items-center gap-1.5 text-muted-foreground"
          >
            <s.icon className="size-3.5" />
            {s.label}
          </span>
        ))}
      </CardFooter>
    </Card>
  )
}
