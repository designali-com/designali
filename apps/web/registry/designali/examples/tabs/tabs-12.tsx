import {
  Bike as BikeIcon,
  Car as CarIcon,
  Footprints as FootprintsIcon,
  TrainFront as TrainFrontIcon,
} from "@designali/icons"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const modes = [
  {
    value: "drive",
    label: "Drive",
    icon: CarIcon,
    eta: "24 min",
    detail: "Via Harbor Rd, light traffic",
  },
  {
    value: "transit",
    label: "Transit",
    icon: TrainFrontIcon,
    eta: "31 min",
    detail: "Line 4, then 6 min walk",
  },
  {
    value: "bike",
    label: "Bike",
    icon: BikeIcon,
    eta: "38 min",
    detail: "Mostly protected bike lanes",
  },
  {
    value: "walk",
    label: "Walk",
    icon: FootprintsIcon,
    eta: "1 h 12 min",
    detail: "Flat route along the river",
  },
]

export default function SegmentedFullWidthTabs() {
  return (
    <Tabs defaultValue="transit" className="w-full max-w-md">
      <TabsList className="h-10 w-full">
        {modes.map((m) => (
          <TabsTrigger key={m.value} value={m.value}>
            <m.icon data-icon="inline-start" />
            <span className="hidden sm:inline">{m.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {modes.map((m) => (
        <TabsContent
          key={m.value}
          value={m.value}
          className="flex items-baseline justify-between border p-3"
        >
          <span className="text-lg font-semibold">{m.eta}</span>
          <span className="text-muted-foreground">{m.detail}</span>
        </TabsContent>
      ))}
    </Tabs>
  )
}
