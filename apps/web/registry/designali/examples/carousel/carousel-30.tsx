import {
  CloudIcon,
  CloudRainIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel"
import { cn } from "@workspace/ui/lib/utils"

const hours = [
  { time: "Now", temp: 18, icon: SunIcon },
  { time: "1 PM", temp: 19, icon: SunIcon },
  { time: "2 PM", temp: 19, icon: CloudSunIcon },
  { time: "3 PM", temp: 17, icon: CloudIcon },
  { time: "4 PM", temp: 16, icon: CloudRainIcon },
  { time: "5 PM", temp: 15, icon: CloudRainIcon },
  { time: "6 PM", temp: 14, icon: CloudIcon },
  { time: "7 PM", temp: 13, icon: MoonIcon },
  { time: "8 PM", temp: 12, icon: MoonIcon },
]

export default function HourlyForecastStrip() {
  return (
    <div className="w-full max-w-sm border p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium">Hourly forecast</span>
        <span className="text-xs text-muted-foreground">Rain from 4 PM</span>
      </div>
      <Carousel opts={{ dragFree: true, align: "start" }}>
        <CarouselContent className="-ms-2">
          {hours.map((hour, index) => (
            <CarouselItem key={hour.time} className="basis-1/5 ps-2">
              <div
                className={cn(
                  "flex flex-col items-center gap-2 py-2 text-xs",
                  index === 0 && "bg-muted"
                )}
              >
                <span className="text-muted-foreground">{hour.time}</span>
                <hour.icon className="size-5" />
                <span className="font-medium">{hour.temp}°</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
