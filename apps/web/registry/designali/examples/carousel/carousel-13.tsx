import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Card, CardContent } from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const kpis = [
  {
    label: "Revenue",
    value: "$48.2k",
    delta: "+12.4%",
    up: true,
    points: [8, 10, 9, 13, 12, 16, 18],
  },
  {
    label: "Active users",
    value: "3,904",
    delta: "+4.1%",
    up: true,
    points: [10, 11, 10, 12, 13, 13, 14],
  },
  {
    label: "Churn",
    value: "2.3%",
    delta: "-0.4%",
    up: false,
    points: [14, 13, 13, 11, 12, 10, 9],
  },
  {
    label: "Avg. order",
    value: "$62.10",
    delta: "+1.8%",
    up: true,
    points: [9, 9, 10, 9, 11, 11, 12],
  },
  {
    label: "Tickets",
    value: "128",
    delta: "-9.0%",
    up: false,
    points: [16, 15, 13, 14, 11, 10, 8],
  },
]

function toPath(points: number[]) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  return points
    .map(
      (p, i) =>
        (i === 0 ? "M" : "L") +
        (i * 100) / (points.length - 1) +
        " " +
        (30 - ((p - min) / (max - min || 1)) * 26 - 2)
    )
    .join(" ")
}

export default function KpiSparklineCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-md">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">This week</h3>
        <div className="flex gap-1">
          <CarouselPrevious className="static translate-none" />
          <CarouselNext className="static translate-none" />
        </div>
      </div>
      <CarouselContent>
        {kpis.map((kpi) => (
          <CarouselItem key={kpi.label} className="basis-1/2">
            <Card size="sm">
              <CardContent className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground">
                  {kpi.label}
                </span>
                <span className="text-xl font-semibold">{kpi.value}</span>
                <svg
                  viewBox="0 0 100 30"
                  className="h-8 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d={toPath(kpi.points)}
                    fill="none"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    className={kpi.up ? "stroke-primary" : "stroke-destructive"}
                  />
                </svg>
                <span
                  className={cn(
                    "flex items-center gap-1 text-xs",
                    kpi.up ? "text-primary" : "text-destructive"
                  )}
                >
                  {kpi.up ? (
                    <TrendingUpIcon className="size-3.5" />
                  ) : (
                    <TrendingDownIcon className="size-3.5" />
                  )}
                  {kpi.delta}
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
