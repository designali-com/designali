import * as React from "react"
import { CloudIcon, CloudRainIcon, CloudSunIcon, SunIcon } from "lucide-react"

import { Separator } from "@workspace/ui/components/separator"

const days = [
  { day: "Mon", icon: SunIcon, high: 22, low: 13 },
  { day: "Tue", icon: CloudSunIcon, high: 20, low: 12 },
  { day: "Wed", icon: CloudRainIcon, high: 16, low: 10 },
  { day: "Thu", icon: CloudIcon, high: 18, low: 11 },
  { day: "Fri", icon: SunIcon, high: 23, low: 14 },
]

export default function WeatherForecastColumns() {
  return (
    <div className="flex w-full max-w-md border py-3">
      {days.map((day, index) => (
        <React.Fragment key={day.day}>
          {index > 0 && <Separator orientation="vertical" />}
          <div className="flex flex-1 flex-col items-center gap-1.5 text-xs">
            <span className="text-muted-foreground">{day.day}</span>
            <day.icon className="size-5" />
            <span className="font-medium">{day.high}&deg;</span>
            <span className="text-muted-foreground">{day.low}&deg;</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
