import {
  ArrowRight,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const metrics = [
  { value: 460, label: "Production-ready blocks" },
  { value: 240, label: "Landing pages and templates" },
  { value: 4000, label: "Icons in @designali/icons" },
]

export default function Hero06() {
  return (
    <section className="w-full border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-x border-b border-border px-6 py-3 text-xs text-muted-foreground">
          <span>Designali studio · Remote, worldwide</span>
          <span className="hidden sm:inline">hello@designali.com</span>
        </div>
        <div className="border-x border-border px-6 py-20 md:py-32">
          <h1 className="max-w-5xl text-5xl leading-[1.02] font-medium tracking-tight md:text-8xl">
            Where thoughtful design meets production-ready code.
          </h1>
          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              Designali designs and builds brand identities, UI/UX and Next.js
              websites, with design and code handled end to end by Ali Imam.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" nativeButton={false} render={<a href="/contact" />}>
                Start a project
                <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<a href="/work" />}>
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
              <CounterNumber
                value={metric.value}
                suffix="+"
                size="lg"
                className="font-medium tracking-tight"
              />
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
