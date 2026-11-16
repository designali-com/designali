"use client"

import * as React from "react"
import {
  Bike as BikeIcon,
  Car as CarIcon,
  MapPin as MapPinIcon,
  TrainFront as TrainFrontIcon,
} from "@designali/icons"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function MapLayerToggleGroup() {
  const [layers, setLayers] = React.useState<string[]>(["traffic"])

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="relative h-36 overflow-hidden border bg-gradient-to-br from-primary/10 via-primary/10 to-primary/5 dark:from-chart-5 dark:via-chart-5 dark:to-chart-5">
        <ToggleGroup
          multiple
          size="sm"
          spacing={1}
          value={layers}
          onValueChange={setLayers}
          className="absolute start-2 top-2 bg-background/90 p-1 shadow-sm"
        >
          <ToggleGroupItem value="traffic" aria-label="Traffic">
            <CarIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="transit" aria-label="Transit">
            <TrainFrontIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="bike" aria-label="Bike lanes">
            <BikeIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        <MapPinIcon className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-primary" />
      </div>
      <span className="text-xs text-muted-foreground">
        Layers: {layers.length ? layers.join(", ") : "none"}
      </span>
    </div>
  )
}
