import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

const metrics = [
  { value: "38%", label: "Average lift in trial signups" },
  { value: "12 days", label: "From kickoff to launch" },
  { value: "140+", label: "Brands shipped since 2019" },
]

export default function Hero06() {
  return (
    <section className="w-full border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-x border-b border-border px-6 py-3 text-xs text-muted-foreground">
          <span>Independent studio, Lisbon and remote</span>
          <span className="hidden sm:inline">Booking projects for Q1</span>
        </div>
        <div className="border-x border-border px-6 py-20 md:py-32">
          <h1 className="max-w-5xl text-5xl leading-[1.02] font-medium tracking-tight md:text-8xl">
            Websites that turn attention into revenue.
          </h1>
          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              We design and build marketing sites for software companies, with
              copy, motion and analytics handled by one small senior team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<a href="#" />}>
                Start a project
                <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<a href="#" />}>
                View case studies
              </Button>
            </div>
          </div>
        </div>
        <div className="grid border-x border-t border-border sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-b border-border px-6 py-8 sm:border-b-0 sm:not-last:border-r"
            >
              <div className="text-3xl font-medium tracking-tight">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
