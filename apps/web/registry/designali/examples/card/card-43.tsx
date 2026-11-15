"use client"

import * as React from "react"
import {
  BathIcon,
  BedDoubleIcon,
  HeartIcon,
  HouseIcon,
  MapPinIcon,
  RulerIcon,
} from "lucide-react"

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
  { icon: BedDoubleIcon, label: "3 beds" },
  { icon: BathIcon, label: "2 baths" },
  { icon: RulerIcon, label: "118 m²" },
]

export default function PropertyListingCard() {
  const [fav, setFav] = React.useState(false)

  return (
    <Card className="w-full max-w-xs pt-0">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-300 via-amber-200 to-emerald-300 dark:from-stone-700 dark:via-amber-900 dark:to-emerald-900">
        <HouseIcon
          className="absolute inset-0 m-auto size-16 text-white/70"
          strokeWidth={1}
        />
        <Badge className="absolute start-3 top-3">New listing</Badge>
        <Button
          size="icon-sm"
          variant="secondary"
          aria-label="Favorite"
          aria-pressed={fav}
          onClick={() => setFav(!fav)}
          className="absolute end-3 top-3"
        >
          <HeartIcon className={cn(fav && "fill-rose-500 text-rose-500")} />
        </Button>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">€640,000</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <MapPinIcon className="size-3" />
          14 Linden Court, Eastgate
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
