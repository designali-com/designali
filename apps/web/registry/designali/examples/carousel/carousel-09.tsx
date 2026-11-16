"use client"

import * as React from "react"
import {
  ArrowRight as ArrowRightIcon,
  Bell as BellIcon,
  Folder as FolderIcon,
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardFooter } from "@workspace/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@workspace/ui/components/carousel"

const steps = [
  {
    icon: SparklesIcon,
    title: "Welcome to Designali",
    body: "Templates, blocks, icons, and UI designs to go from design to code.",
  },
  {
    icon: FolderIcon,
    title: "Save your favorite blocks",
    body: "Collect blocks and landing pages into collections for each project.",
  },
  {
    icon: BellIcon,
    title: "Get notified on new drops",
    body: "Be the first to know when new templates and icons ship.",
  },
]

export default function OnboardingWalkthrough() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selected, setSelected] = React.useState(0)
  const [done, setDone] = React.useState(false)

  const handleApi = React.useCallback((next: CarouselApi) => {
    if (!next) return
    setApi(next)
    next.on("select", () => setSelected(next.selectedScrollSnap()))
  }, [])

  const isLast = selected === steps.length - 1

  return (
    <Card className="w-full max-w-sm">
      <CardContent>
        <Carousel setApi={handleApi}>
          <CarouselContent>
            {steps.map((step) => (
              <CarouselItem key={step.title}>
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <div className="flex size-12 items-center justify-center bg-muted">
                    <step.icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.body}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="text-xs text-muted-foreground">
          {done ? "All set" : "Step " + (selected + 1) + " of " + steps.length}
        </span>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => api?.scrollTo(steps.length - 1)}
            disabled={isLast}
          >
            Skip
          </Button>
          <Button
            size="sm"
            onClick={() => (isLast ? setDone(true) : api?.scrollNext())}
          >
            {isLast ? "Get started" : "Next"}
            {!isLast && <ArrowRightIcon data-icon="inline-end" />}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
