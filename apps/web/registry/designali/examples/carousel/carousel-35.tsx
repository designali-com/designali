"use client"

import * as React from "react"
import {
  ChartColumn as ChartColumnIcon,
  Inbox as InboxIcon,
  Workflow as WorkflowIcon,
} from "@designali/icons"

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
    label: "Requests",
    icon: InboxIcon,
    body: "Every Designali project brief from hello@designali.com lands in one queue.",
  },
  {
    id: "rules",
    label: "Workflow",
    icon: WorkflowIcon,
    body: "Move work from Figma design to Next.js code with AI-assisted workflows.",
  },
  {
    id: "reports",
    label: "Reports",
    icon: ChartColumnIcon,
    body: "Track template sales, block usage and icon downloads in one place.",
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
