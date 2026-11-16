import {
  ChevronDown as ChevronDownIcon,
  CloudRain as CloudRainIcon,
  Sun as SunIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const days = [
  {
    day: "Today",
    icon: SunIcon,
    high: 21,
    low: 12,
    hours: [
      { t: "9 AM", v: 14 },
      { t: "12 PM", v: 19 },
      { t: "3 PM", v: 21 },
      { t: "6 PM", v: 17 },
    ],
  },
  {
    day: "Tuesday",
    icon: CloudRainIcon,
    high: 16,
    low: 10,
    hours: [
      { t: "9 AM", v: 11 },
      { t: "12 PM", v: 14 },
      { t: "3 PM", v: 16 },
      { t: "6 PM", v: 13 },
    ],
  },
]

export default function WeatherHourlyForecast() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {days.map((day, index) => (
        <Collapsible key={day.day} defaultOpen={index === 0}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                className="h-12 w-full justify-start px-3"
              >
                <day.icon className="size-5" />
                <span className="w-20 text-left">{day.day}</span>
                <span className="ml-auto text-sm">
                  {day.high}°{" "}
                  <span className="text-muted-foreground">/ {day.low}°</span>
                </span>
                <ChevronDownIcon className="transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <div className="grid grid-cols-4 gap-2 px-3 pb-3">
              {day.hours.map((hour) => (
                <div
                  key={hour.t}
                  className="flex flex-col items-center gap-1 bg-muted py-2 text-xs"
                >
                  <span className="text-muted-foreground">{hour.t}</span>
                  <span className="font-medium">{hour.v}°</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
