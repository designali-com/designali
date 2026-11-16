import { ArrowRight, Play } from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { IPad } from "@/registry/designali/ui/apple/ipad"
import { GridPattern } from "@/registry/designali/ui/grid-pattern"

export default function Media05() {
  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-background">
      <GridPattern
        width={80}
        height={80}
        className="stroke-border opacity-60"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Designali showreel
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            From Figma to production in ninety seconds.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Watch a Designali block go from a Figma frame to themed React and
            Tailwind code. No cuts, no voice-over, just design se code tak.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">
              <Play className="fill-current" />
              Watch the film
            </Button>
            <Button size="lg" variant="outline">
              Browse blocks
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <IPad
            variant="ipad-pro"
            size="md"
            orientation="landscape"
            color="silver"
            className="max-w-full"
          >
            <div className="relative size-full">
              <img
                src="/img/dashboard-1-light.jpg"
                alt="Designali showreel poster"
                className="size-full object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 bg-background/90 p-2 backdrop-blur">
                <Play className="size-3 fill-current" />
                <div className="h-1 flex-1 bg-border">
                  <div className="h-full w-1/3 bg-foreground" />
                </div>
                <span className="text-xs tabular-nums">0:31 / 1:30</span>
              </div>
            </div>
          </IPad>
        </div>
      </div>
    </section>
  )
}
