import {
  CloudIcon,
  CloudRainIcon,
  CloudSunIcon,
  DropletsIcon,
  MapPinIcon,
  SunIcon,
  WindIcon,
} from "lucide-react"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const forecast = [
  { day: "Tue", icon: SunIcon, high: 21, low: 12 },
  { day: "Wed", icon: CloudSunIcon, high: 19, low: 11 },
  { day: "Thu", icon: CloudRainIcon, high: 15, low: 9 },
  { day: "Fri", icon: CloudIcon, high: 16, low: 10 },
  { day: "Sat", icon: SunIcon, high: 22, low: 13 },
]

export default function WeatherForecastCard() {
  return (
    <Card className="w-full max-w-xs bg-gradient-to-b from-sky-500/10 to-transparent">
      <CardHeader>
        <CardDescription className="flex items-center gap-1">
          <MapPinIcon className="size-3" />
          Porto, Portugal
        </CardDescription>
        <CardTitle className="text-4xl font-light tabular-nums">18°</CardTitle>
        <CardAction>
          <CloudSunIcon className="size-12 text-amber-500" strokeWidth={1.25} />
        </CardAction>
      </CardHeader>
      <CardContent className="flex gap-3 text-muted-foreground">
        <span className="flex items-center gap-1">
          <WindIcon className="size-3.5" /> 14 km/h
        </span>
        <span className="flex items-center gap-1">
          <DropletsIcon className="size-3.5" /> 62%
        </span>
      </CardContent>
      <CardFooter className="grid grid-cols-5 gap-1 text-center">
        {forecast.map((f) => (
          <div key={f.day} className="grid justify-items-center gap-1">
            <span className="text-muted-foreground">{f.day}</span>
            <f.icon className="size-4" />
            <span className="tabular-nums">
              {f.high}° <span className="text-muted-foreground">{f.low}°</span>
            </span>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}
