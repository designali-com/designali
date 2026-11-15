import { StarIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const items = [
  {
    name: "Aero Running Shoe",
    price: "$129.00",
    rating: 4.7,
    stock: "In stock",
    tone: "from-sky-400 to-indigo-500",
  },
  {
    name: "Trail Merino Socks",
    price: "$24.00",
    rating: 4.9,
    stock: "Low stock",
    tone: "from-amber-300 to-orange-500",
  },
]

export default function ProductQuickViewHoverCard() {
  return (
    <div className="w-full max-w-sm border p-4">
      <p className="mb-3 text-sm font-medium">Order summary</p>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <HoverCard>
              <HoverCardTrigger href="#" className="hover:underline">
                {item.name}
              </HoverCardTrigger>
              <HoverCardContent
                side="right"
                className="flex w-60 flex-col gap-2"
              >
                <div
                  className={cn(
                    "aspect-video w-full bg-gradient-to-br",
                    item.tone
                  )}
                />
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span>{item.price}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <StarIcon className="size-3.5 fill-amber-400 text-amber-400" />
                    {item.rating}
                  </span>
                  <Badge
                    variant={
                      item.stock === "Low stock" ? "destructive" : "secondary"
                    }
                  >
                    {item.stock}
                  </Badge>
                </div>
              </HoverCardContent>
            </HoverCard>
            <span className="text-muted-foreground">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
