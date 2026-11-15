"use client"

import * as React from "react"
import { ChartColumnIcon, InboxIcon, WorkflowIcon } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const features = [
  {
    id: "inbox",
    label: "Inbox",
    icon: InboxIcon,
    body: "Every request from email, chat, and forms lands in one shared queue.",
  },
  {
    id: "rules",
    label: "Rules",
    icon: WorkflowIcon,
    body: "Route, tag, and assign conversations automatically based on content.",
  },
  {
    id: "reports",
    label: "Reports",
    icon: ChartColumnIcon,
    body: "Track response times and satisfaction across every channel.",
  },
]

export default function FeatureTourToggleSync() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup
        variant="outline"
        value={[features[selected]!.id]}
        onValueChange={(value) => {
          const index = features.findIndex((f) => f.id === value[0])
          if (index >= 0) api?.scrollTo(index)
        }}
        className="w-full"
      >
        {features.map((feature) => (
          <ToggleGroupItem
            key={feature.id}
            value={feature.id}
            className="flex-1"
          >
            {feature.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Carousel setApi={handleApi}>
        <CarouselContent>
          {features.map((feature) => (
            <CarouselItem key={feature.id}>
              <div className="flex h-40 flex-col justify-center gap-3 border bg-muted/30 p-5">
                <feature.icon className="size-6" />
                <p className="text-sm">{feature.body}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
