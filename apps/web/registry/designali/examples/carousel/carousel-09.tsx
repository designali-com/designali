"use client"

import * as React from "react"
import {
  ArrowRightIcon,
  BellIcon,
  FolderIcon,
  SparklesIcon,
} from "lucide-react"

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
    title: "Welcome to Fieldnote",
    body: "Capture ideas, tasks, and meeting notes in one calm workspace.",
  },
  {
    icon: FolderIcon,
    title: "Organize with spaces",
    body: "Group notes by project or client and share a space with your team.",
  },
  {
    icon: BellIcon,
    title: "Never miss a follow-up",
    body: "Turn any line into a reminder and get nudged at the right time.",
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
