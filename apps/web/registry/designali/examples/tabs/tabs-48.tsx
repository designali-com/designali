import {
  Cloud as CloudIcon,
  CloudRain as CloudRainIcon,
  CloudSun as CloudSunIcon,
  Sun as SunIcon,
} from "@designali/icons"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const hourly = [
  { h: "09", t: 12, icon: CloudSunIcon },
  { h: "12", t: 16, icon: SunIcon },
  { h: "15", t: 17, icon: SunIcon },
  { h: "18", t: 13, icon: CloudIcon },
]
const daily = [
  ["Mon", 17, 9],
  ["Tue", 14, 8],
  ["Wed", 11, 6],
  ["Thu", 13, 7],
  ["Fri", 15, 9],
] as const

export default function WeatherForecastTabs() {
  return (
    <Tabs defaultValue="today" className="w-full max-w-xs border p-3">
      <TabsList className="w-full">
        <TabsTrigger value="today">Today</TabsTrigger>
        <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
        <TabsTrigger value="week">5 days</TabsTrigger>
      </TabsList>
      <TabsContent value="today" className="grid grid-cols-4 text-center">
        {hourly.map((slot) => (
          <div key={slot.h} className="flex flex-col items-center gap-1">
            <span className="text-muted-foreground">{slot.h}:00</span>
            <slot.icon className="size-5" />
            <span className="font-medium">{slot.t}°</span>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="tomorrow" className="flex items-center gap-3">
        <CloudRainIcon className="size-8" />
        <div>
          <p className="text-lg font-semibold">14° / 8°</p>
          <p className="text-muted-foreground">Showers in the afternoon</p>
        </div>
      </TabsContent>
      <TabsContent value="week" className="flex flex-col gap-1">
        {daily.map(([d, hi, lo]) => (
          <div key={d} className="flex justify-between">
            <span>{d}</span>
            <span className="tabular-nums">
              <span className="font-medium">{hi}°</span>{" "}
              <span className="text-muted-foreground">{lo}°</span>
            </span>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
