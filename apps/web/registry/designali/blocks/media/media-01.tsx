import { ArrowRight, Play } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export default function Media01() {
  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-background">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--border) 0 1px, transparent 1px 80px), repeating-linear-gradient(0deg, var(--border) 0 1px, transparent 1px 80px)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Product film
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            See the whole workflow in ninety seconds.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            From a blank canvas to a published, themed component library. No
            cuts, no voice-over, just the product doing its job.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">
              <Play className="fill-current" />
              Watch the film
            </Button>
            <Button size="lg" variant="outline">
              Start free trial
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 border border-border" />
          <div
            className="relative flex aspect-[4/3] items-end border border-border p-6"
            style={{
              background:
                "radial-gradient(circle at 70% 30%, var(--chart-2), transparent 60%), linear-gradient(180deg, var(--muted), var(--background))",
            }}
          >
            <div className="flex w-full items-center gap-3 bg-background/90 p-3 backdrop-blur">
              <Play className="size-4 fill-current" />
              <div className="h-1 flex-1 bg-border">
                <div className="h-full w-1/3 bg-foreground" />
              </div>
              <span className="text-xs tabular-nums">0:31 / 1:30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
