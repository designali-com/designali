"use client"

import * as React from "react"
import {
  AnchorIcon,
  CompassIcon,
  GemIcon,
  LeafIcon,
  MountainIcon,
  OrbitIcon,
  SunIcon,
} from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"

const logos = [
  { name: "Northwind", icon: CompassIcon },
  { name: "Lumen", icon: SunIcon },
  { name: "Orbit", icon: OrbitIcon },
  { name: "Fernway", icon: LeafIcon },
  { name: "Quartz", icon: GemIcon },
  { name: "Harbor", icon: AnchorIcon },
  { name: "Summit", icon: MountainIcon },
]

export default function LogoMarqueeAutoplay() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return
    const id = setInterval(() => api.scrollNext(), 1800)
    return () => clearInterval(id)
  }, [api])

  return (
    <div className="w-full max-w-md">
      <p className="mb-3 text-center text-xs text-muted-foreground">
        Trusted by 4,000+ teams
      </p>
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start", duration: 40 }}
        className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <CarouselContent>
          {logos.map((logo) => (
            <CarouselItem key={logo.name} className="basis-1/3 sm:basis-1/4">
              <div className="flex items-center justify-center gap-1.5 py-2 text-muted-foreground">
                <logo.icon className="size-4" />
                <span className="text-sm font-semibold tracking-tight">
                  {logo.name}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
