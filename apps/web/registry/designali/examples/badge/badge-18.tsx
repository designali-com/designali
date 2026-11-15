import { HeadphonesIcon, TruckIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function ProductCardDealBadges() {
  return (
    <Card className="w-full max-w-xs pt-0">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-muted to-muted/40">
        <HeadphonesIcon className="size-16 text-muted-foreground" />
        <div className="absolute start-2 top-2 flex flex-col items-start gap-1">
          <Badge
            variant="destructive"
            className="bg-destructive text-white dark:bg-destructive"
          >
            -25%
          </Badge>
          <Badge variant="secondary">Only 3 left</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>Aurora Wireless Headphones</CardTitle>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold">$149</span>
          <span className="text-xs text-muted-foreground line-through">
            $199
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <Badge variant="outline">
          <TruckIcon data-icon="inline-start" />
          Free shipping
        </Badge>
      </CardContent>
    </Card>
  )
}
