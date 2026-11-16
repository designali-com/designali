import {
  Check as CheckIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    note: "For personal projects",
    features: ["Free blocks", "4000+ icons", "Community support"],
  },
  {
    name: "Pro",
    price: "$24",
    note: "Per seat / month",
    features: ["All 460+ blocks", "Premium templates", "Priority support"],
    featured: true,
  },
  {
    name: "Studio",
    price: "$59",
    note: "Per seat / month",
    features: ["240+ landing pages", "Figma source files", "Team license"],
  },
]

export default function PricingPlansPeek() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <CarouselContent>
        {plans.map((plan) => (
          <CarouselItem key={plan.name} className="basis-4/5 sm:basis-1/2">
            <Card
              className={cn("h-full", plan.featured && "ring-2 ring-primary")}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {plan.name}
                  {plan.featured && <Badge>Popular</Badge>}
                </CardTitle>
                <CardDescription>{plan.note}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-3xl font-semibold">{plan.price}</p>
                <ul className="flex flex-col gap-1.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs"
                    >
                      <CheckIcon className="size-3.5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? "default" : "outline"}
                  className="mt-2"
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
