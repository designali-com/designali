"use client"

import * as React from "react"
import {
  Terminal as TerminalIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"

const managers = [
  { id: "npm", cmd: "npm install @designali/icons" },
  { id: "pnpm", cmd: "pnpm add @designali/icons" },
  { id: "yarn", cmd: "yarn add @designali/icons" },
  { id: "bun", cmd: "bun add @designali/icons" },
]

export default function InstallCommandCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  return (
    <div className="w-full max-w-sm border bg-muted/30">
      <div className="flex items-center gap-1 border-b px-2 py-1.5">
        <TerminalIcon className="me-1 size-3.5 text-muted-foreground" />
        {managers.map((m, index) => (
          <Button
            key={m.id}
            size="xs"
            variant={selected === index ? "secondary" : "ghost"}
            onClick={() => api?.scrollTo(index)}
          >
            {m.id}
          </Button>
        ))}
      </div>
      <Carousel setApi={handleApi} opts={{ duration: 18 }}>
        <CarouselContent>
          {managers.map((m) => (
            <CarouselItem key={m.id}>
              <pre className="overflow-x-auto p-4 font-mono text-xs">
                <span className="text-muted-foreground">$ </span>
                {m.cmd}
              </pre>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
